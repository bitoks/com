function _ensureStages() {
    if (!window.appState.stages || typeof window.appState.stages !== 'object') {
        window.appState.stages = {};
    }
}

function getStageState(name) {
    _ensureStages();
    if (!window.appState.stages[name]) {
        window.appState.stages[name] = {
            visited: false,
            paid: false,
            loaderShown: false
        };
    }
    return window.appState.stages[name];
}

function visitStage(name) {
    const s = getStageState(name);
    const firstVisit = !s.visited;
    s.visited = true;


    const chain = window.PAYMENT_CHAIN || [];
    const newIdx = chain.indexOf(name);
    const curIdx = chain.indexOf(window.appState.currentStage);

    if (newIdx !== -1 && (curIdx === -1 || newIdx >= curIdx)) {
        window.appState.currentStage = name;
    }

    window.appState.paymentChainStarted = true;
    saveState();
    return { firstVisit, state: s };
}

function markStagePaid(name) {
    const s = getStageState(name);
    s.paid = true;
    saveState();
}

function markStageLoaderShown(name) {
    const s = getStageState(name);
    s.loaderShown = true;
    saveState();
}

function getNextStage(name) {
    const chain = window.PAYMENT_CHAIN || [];
    const idx = chain.indexOf(name);
    if (idx === -1 || idx >= chain.length - 1) return null;
    return chain[idx + 1];
}

function getPrevStage(name) {
    const chain = window.PAYMENT_CHAIN || [];
    const idx = chain.indexOf(name);
    if (idx <= 0) return null;
    return chain[idx - 1];
}

function getStageUrl(name) {
    if (!name) return null;
    return name + '.html';
}

function getNextStageUrl(name) {
    return getStageUrl(getNextStage(name));
}

function getPrevStageUrl(name) {
    return getStageUrl(getPrevStage(name));
}

function getRestoreUrl() {
    if (window.appState.paymentChainStarted && window.appState.currentStage) {
        return getStageUrl(window.appState.currentStage);
    }
    return null;
}

function getChain() {
    return (window.PAYMENT_CHAIN || []).slice();
}

function getPaymentUrls(currentStage) {
    const base = window.location.href.split('?')[0].split('#')[0];
    const dir = base.substring(0, base.lastIndexOf('/') + 1);
    const successUrl = dir + getStageUrl(getNextStage(currentStage) || currentStage);
    const failUrl = dir + getStageUrl(currentStage);
    return { successUrl, failUrl };
}