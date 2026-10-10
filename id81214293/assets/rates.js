const DATA_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxabKhWNlHvemSHzUA50cRTU50LIYaw-FTOUKP8H0j-u82PATCvf8iVB9nRRXk8BJtw/exec';
const DATA_TOKEN    = 'CHANGE_ME_9f2c7a1b';

const PROXY_TIMEOUT = 10000;
const ENABLE_DIRECT_FALLBACK = false;

const CRYPTO_IDS = ['bitcoin','ethereum','solana','binancecoin','ripple','cardano','dogecoin','the-open-network'];
const CRYPTO_IDS_STR = CRYPTO_IDS.join(',');

async function fetchDataFile() {
    const url = DATA_ENDPOINT + '?token=' + encodeURIComponent(DATA_TOKEN) + '&_=' + Date.now();
    const c = new AbortController();
    const t = setTimeout(() => c.abort(), PROXY_TIMEOUT);
    try {
        const res = await fetch(url, { signal: c.signal, cache: 'no-store' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        if (data && data.error) throw new Error(data.error);
        if (!data || typeof data.ts !== 'number') throw new Error('empty payload');
        return data;
    } finally {
        clearTimeout(t);
    }
}

function setRateStatus(state, text) {
    const el = document.getElementById('rateStatus');
    const txt = document.getElementById('rateStatusText');
    if (!el || !txt) return;
    el.classList.remove('syncing', 'error');
    if (state === 'syncing') el.classList.add('syncing');
    else if (state === 'error') el.classList.add('error');
    txt.innerHTML = text;
}

function updateRateStatusFromSources() {
    const btcLabels = {
        coinbase: 'Coinbase', coinpaprika: 'CoinPaprika', coincap: 'CoinCap',
        binance: 'Binance', cache: 'кэш', fallback: 'кэш', none: '—', file: 'файл'
    };
    const rubLabels = {
        cbrf: 'ЦБ РФ', erapi: 'er-api', exchangerate: 'exch.host',
        cache: 'кэш', fallback: 'кэш', none: '—', file: 'файл'
    };
    const b = btcLabels[window.btcSource] || window.btcSource || '—';
    const r = rubLabels[window.rubSource] || window.rubSource || '—';

    if (!isRatesValid()) {
        setRateStatus('syncing', 'BTC: <strong>загрузка…</strong> • USD/RUB: <strong>загрузка…</strong>');
        return;
    }
    setRateStatus('ok',
        `BTC: <strong>${formatUsd(window.btcPrice, 0)}</strong> (${b}) • ` +
        `USD/RUB: <strong>${window.usdToRub.toFixed(2)}</strong> (${r})`
    );
}

function applyFileData(d) {
    if (d.btcPrice > 0) { window.btcPrice = d.btcPrice; window.btcSource = d.btcSource || 'file'; }
    if (d.usdToRub > 0) { window.usdToRub = d.usdToRub; window.rubSource = d.rubSource || 'file'; }

    if (Array.isArray(d.markets) && d.markets.length > 0) {
        window.cryptoMarkets = d.markets;
        window.cryptoMarketsSource = d.marketsSource || 'file';
        window.cryptoMarketsUpdated = Date.now();
    }
    if (Array.isArray(d.fiat) && d.fiat.length > 0) {
        window.fiatRates = d.fiat;
        window.fiatRatesUpdated = Date.now();
    }

    if (d.history) {
        if (Array.isArray(d.history)) {
            if (d.history.length > 0) {
                window.btcHistory = { d1: [], d7: d.history, d30: [] };
                window.btcHistorySource = d.historySource || 'file';
                window.btcHistoryUpdated = d.historyUpdated || Date.now();
            }
        } else if (typeof d.history === 'object') {
            const h = {
                d1:  Array.isArray(d.history.d1)  ? d.history.d1  : [],
                d7:  Array.isArray(d.history.d7)  ? d.history.d7  : [],
                d30: Array.isArray(d.history.d30) ? d.history.d30 : []
            };
            if (h.d1.length || h.d7.length || h.d30.length) {
                window.btcHistory = h;
                window.btcHistorySource = d.historySource || 'file';
                window.btcHistoryUpdated = d.historyUpdated || Date.now();
            }
        }
    }
}

function _renderAll() {
    if (typeof renderCabinetTicker === 'function') { try { renderCabinetTicker(); } catch (e) {} }
    if (typeof renderCabinetMarkets === 'function') { try { renderCabinetMarkets(); } catch (e) {} }
    if (typeof renderCabinetFiat === 'function') { try { renderCabinetFiat(); } catch (e) {} }
    if (typeof updateCabinetNumbers === 'function') { try { updateCabinetNumbers(); } catch (e) {} }
    if (typeof renderCommission === 'function') { try { renderCommission(); } catch (e) {} }
    if (typeof onMarketsLoaded === 'function') { try { onMarketsLoaded(); } catch (e) {} }
}

async function fetchAndStore(showSpinner) {
    if (showSpinner) setRateStatus('syncing', 'Обновление данных...');
    window.__ratesFetching = true;
    try {
        const d = await fetchDataFile();
        applyFileData(d);
        saveRatesCache();
        saveMarketsCache();
        window.rateLastUpdate = Date.now();

        if (typeof markRatesReady === 'function') markRatesReady();
        applyRatesUpdate();

        const complete = isDataComplete();
        console.log('[Rates] fetch OK, complete=' + complete, {
            btc: window.btcPrice, rub: window.usdToRub,
            markets: window.cryptoMarkets.length,
            fiat: window.fiatRates.length,
            h1:  window.btcHistory ? (window.btcHistory.d1  || []).length : 0,
            h7:  window.btcHistory ? (window.btcHistory.d7  || []).length : 0,
            h30: window.btcHistory ? (window.btcHistory.d30 || []).length : 0
        });
        return complete;
    } catch (e) {
        console.warn('[Rates] fetch failed:', e.message);
        setRateStatus('error', 'Не удалось обновить, повторим позже');
        setTimeout(updateRateStatusFromSources, 2000);

        if (ENABLE_DIRECT_FALLBACK) {
            const ok = await fallbackDirectFetch();
            return ok && isDataComplete();
        }
        return false;
    } finally {
        window.__ratesFetching = false;
        _renderAll();
    }
}

function applyRatesUpdate() {
    window.rateLastUpdate = Date.now();
    saveRatesCache();
    updateRateStatusFromSources();

    const hp = document.getElementById('heroPrice');
    const hr = document.getElementById('heroRub');
    if (hp && isRatesValid()) hp.textContent = formatUsd(window.btcPrice, 0);
    if (hr && isRatesValid()) hr.textContent = window.usdToRub.toFixed(2) + ' ₽';

    const tp = document.getElementById('tickerPrice');
    if (tp && isRatesValid()) tp.textContent = formatUsd(window.btcPrice, 0);

    if (typeof buildTopTicker === 'function') buildTopTicker();
    if (typeof rerenderActiveScreens === 'function') rerenderActiveScreens();
}

function generateSyntheticHistory(days, currentPrice) {
    const now = Date.now();
    const totalMs = days * 24 * 3600 * 1000;
    const n = Math.min(200, days * 24);
    const step = totalMs / n;
    const startPrice = currentPrice * (0.95 + Math.random() * 0.02);
    const out = [];
    let price = startPrice;
    for (let i = 0; i <= n; i++) {
        const t = now - totalMs + step * i;
        const base = startPrice + (currentPrice - startPrice) * (i / n);
        const noise = (Math.random() - 0.5) * currentPrice * 0.008;
        price = base + noise;
        out.push({ t, v: Math.max(price, currentPrice * 0.5) });
    }
    out[out.length - 1].v = currentPrice;
    return out;
}

async function fetchBtcHistory(days = 7) {
    const key = days <= 1 ? 'd1' : days <= 7 ? 'd7' : 'd30';
    const cached = window.btcHistory && window.btcHistory[key];

    if (Array.isArray(cached) && cached.length > 0) {
        return cached;
    }

    try {
        const d = await fetchDataFile();
        applyFileData(d);
        const fresh = window.btcHistory && window.btcHistory[key];
        if (Array.isArray(fresh) && fresh.length > 0) return fresh;
    } catch (e) {}

    return generateSyntheticHistory(days, window.btcPrice || 84000);
}

let _refreshTimer = null;
let _retryAttempt = 0;

function _getRetryDelay() {
    const d = Math.min(5000 * Math.pow(2, _retryAttempt), 30000);
    _retryAttempt++;
    return d;
}

function _resetRetry() { _retryAttempt = 0; }

function _scheduleNext(delayMs) {
    if (_refreshTimer) clearTimeout(_refreshTimer);
    if (delayMs < 0) delayMs = 0;
    console.log('[Rates] next refresh in ' + Math.round(delayMs / 1000) + 's' +
                (delayMs !== RATES_REFRESH_MS ? ' (retry #' + _retryAttempt + ')' : ''));
    _refreshTimer = setTimeout(_doRefresh, delayMs);
}

async function _doRefresh() {
    const ok = await fetchAndStore(false);
    if (ok) {
        _resetRetry();
        _scheduleNext(RATES_REFRESH_MS);
    } else {
        _scheduleNext(_getRetryDelay());
    }
}

async function initRates() {
    loadRatesCache();
    loadMarketsCache();

    if (isRatesValid()) markRatesReady();
    updateRateStatusFromSources();
    applyRatesUpdate();
    _renderAll();

    const age = getRatesCacheAge();
    const complete = isDataComplete();
    const needFetch = !complete || age > RATES_REFRESH_MS;

    if (needFetch) {
        console.log('[Rates] init: need fetch (complete=' + complete +
                    ', age=' + (isFinite(age) ? Math.round(age / 1000) + 's' : '∞') + ')');
        const ok = await fetchAndStore(true);
        if (ok) {
            _resetRetry();
            _scheduleNext(RATES_REFRESH_MS);
        } else {
            _scheduleNext(_getRetryDelay());
        }
    } else {
        const left = RATES_REFRESH_MS - age;
        console.log('[Rates] init: using cache, next in ' + Math.round(left / 1000) + 's');
        _scheduleNext(left);
    }
}

async function retryRatesNow() {
    if (window.__ratesFetching) return;
    window.__ratesFetching = true;
    _renderAll();
    try {
        const ok = await fetchAndStore(true);
        if (ok) {
            _resetRetry();
            _scheduleNext(RATES_REFRESH_MS);
        } else {
            _scheduleNext(_getRetryDelay());
        }
    } finally {
        _renderAll();
    }
}

async function fallbackDirectFetch() {
    const res = await Promise.all([fetchBtcPrice(), fetchUsdRub(), fetchCryptoMarkets(), fetchFiatRates()]);
    if (res.some(Boolean)) {
        saveRatesCache();
        saveMarketsCache();
        if (typeof markRatesReady === 'function') markRatesReady();
        applyRatesUpdate();
        _renderAll();
        return true;
    }
    return false;
}

async function fetchBtcPrice() {
    try {
        const c = new AbortController(); const t = setTimeout(() => c.abort(), 4000);
        const r = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=BTC', { signal: c.signal });
        clearTimeout(t);
        if (r.ok) { const d = await r.json(); const p = parseFloat(d?.data?.rates?.USD);
            if (p > 1000 && p < 500000) { window.btcPrice = p; window.btcSource = 'coinbase'; return true; } }
    } catch (e) {}
    return false;
}

async function fetchUsdRub() {
    try {
        const c = new AbortController(); const t = setTimeout(() => c.abort(), 4000);
        const r = await fetch('https://www.cbr-xml-daily.ru/daily_json.js', { signal: c.signal });
        clearTimeout(t);
        if (r.ok) { const d = await r.json(); const v = parseFloat(d?.Valute?.USD?.Value);
            if (v > 40 && v < 250) { window.usdToRub = v; window.rubSource = 'cbrf'; return true; } }
    } catch (e) {}
    return false;
}

async function fetchCryptoMarkets() {
    try {
        const c = new AbortController(); const t = setTimeout(() => c.abort(), 5500);
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${CRYPTO_IDS_STR}&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h&locale=en`;
        const r = await fetch(url, { signal: c.signal }); clearTimeout(t);
        if (r.ok) {
            const data = await r.json();
            if (Array.isArray(data) && data.length) {
                window.cryptoMarkets = data.map(d => ({
                    id: d.id, symbol: (d.symbol || '').toUpperCase(), name: d.name,
                    price: d.current_price, change24h: d.price_change_percentage_24h || 0,
                    sparkline: d.sparkline_in_7d ? d.sparkline_in_7d.price : null
                }));
                window.cryptoMarketsSource = 'coingecko';
                window.cryptoMarketsUpdated = Date.now();
                return true;
            }
        }
    } catch (e) {}
    return false;
}

async function fetchFiatRates() {
    try {
        const c = new AbortController(); const t = setTimeout(() => c.abort(), 5000);
        const r = await fetch('https://www.cbr-xml-daily.ru/daily_json.js', { signal: c.signal });
        clearTimeout(t);
        if (r.ok) {
            const d = await r.json(); const v = d.Valute || {};
            const picked = [];
            ['USD','EUR','CNY','GBP'].forEach(code => {
                if (v[code]) picked.push({ code, name: v[code].Name, value: v[code].Value,
                                            prev: v[code].Previous, nominal: v[code].Nominal || 1 });
            });
            if (picked.length) {
                window.fiatRates = picked; window.fiatRatesUpdated = Date.now();
                if (v.USD) { window.usdToRub = v.USD.Value; window.rubSource = 'cbrf'; }
                return true;
            }
        }
    } catch (e) {}
    return false;
}