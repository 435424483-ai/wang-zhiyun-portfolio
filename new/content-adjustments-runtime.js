(() => {
  const STORAGE_KEY = 'portfolio-content-editor-v3';
  const DATA_FILE = 'portfolio-content-adjustments.json';
  const TARGET_SELECTOR = 'h1,h2,h3,h4,h5,h6,p,dt,dd,li,figcaption,button,a,.micro,.project-pill,.role-label,.case-copy-label';

  const decorMarkup = {
    line: '',
    dot: '',
    cross: '＋',
    frame: '',
    label: '01 / NOTE',
    pill: '标签',
    arrow: '↘'
  };

  const normalizePayload = payload => {
    if (!payload || typeof payload !== 'object') return null;
    const src = payload.version ? payload : { ...payload };
    const result = {
      version: src.version || 3,
      page: src.page || 'preview-content-editor.html',
      exportedAt: src.exportedAt || null,
      changes: src.changes || {},
      duplicates: Array.isArray(src.duplicates) ? src.duplicates : [],
      decorations: Array.isArray(src.decorations) ? src.decorations : []
    };
    if (!result.changes || typeof result.changes !== 'object') result.changes = {};
    return result;
  };

  const choosePayload = async () => {
    const fromStorage = (() => {
      try {
        const text = localStorage.getItem(STORAGE_KEY);
        if (!text) return null;
        return normalizePayload(JSON.parse(text));
      } catch (err) {
        return null;
      }
    })();

    let fromFile = null;
    try {
      const res = await fetch(`./${DATA_FILE}`, { cache: 'no-store' });
      if (res.ok) {
        fromFile = normalizePayload(await res.json());
      }
    } catch (err) {
      fromFile = null;
    }

    if (!fromFile) return fromStorage;
    if (!fromStorage || !fromStorage.changes) return fromFile;

    const fileTime = Date.parse(fromFile.exportedAt || '') || 0;
    const localTime = Date.parse(fromStorage.exportedAt || '') || 0;
    return fileTime > localTime ? fromFile : fromStorage;
  };

  const apply = (el, c = {}) => {
    if (!(el && c && typeof c === 'object')) return;

    if (typeof c.html === 'string') {
      let html = c.html.trim();
      if (el.tagName === 'P') {
        html = html.replace(/^<p[^>]*>([\s\S]*)<\/p>$/i, '$1');
        html = html.replace(/<div[^>]*>/gi, '<br>').replace(/<\/div>/gi, '');
      }
      el.innerHTML = html;
    }

    if (c.color) {
      el.style.setProperty('color', c.color, 'important');
    } else if (c.color === '' && el.style.color) {
      el.style.removeProperty('color');
    }

    if (c.align) {
      el.style.setProperty('text-align', c.align, 'important');
    } else if (c.align === '') {
      el.style.removeProperty('text-align');
    }

    if (c.bold) {
      el.style.setProperty('font-weight', '700', 'important');
    } else if (c.bold === false) {
      el.style.removeProperty('font-weight');
    }

    // The formal portfolio keeps editorial changes, but layout always comes
    // from the responsive design system. Free-position editor values are
    // intentionally stripped so they cannot push content out of its grid.
    for (const property of ['translate', 'width', 'max-width', 'font-size', 'line-height', 'scale', 'transform']) {
      el.style.removeProperty(property);
    }
  };

  const createDecor = (host, item, targets, changes) => {
    if (!host || document.querySelector(`[data-content-edit-id="${item.id}"]`)) {
      return;
    }
    const el = document.createElement('span');
    el.className = `decor-element decor-${item.kind}`;
    el.dataset.contentEditId = item.id;
    el.innerHTML = item.html || decorMarkup[item.kind] || '';
    host.style.position = host.style.position || 'relative';
    host.append(el);
    targets.set(item.id, el);
    apply(el, changes[item.id]);
  };

  const applyAll = async () => {
    if (document.body.classList.contains('content-editing')) {
      return;
    }

    const main = document.querySelector('main');
    if (!main) return;

    const payload = await choosePayload();
    if (!payload) return;

    const changes = payload.changes || {};
    // Editor-only duplicates and loose decorations rely on absolute offsets.
    // Approved copies are represented directly in the page markup instead.
    const duplicates = [];
    const decorations = [];

    const targets = new Map();
    const baseTargets = [...main.querySelectorAll(TARGET_SELECTOR)]
      .filter(el => !el.closest('[data-content-static]'));
    const hostCounters = new Map();
    const peopleOpening = document.querySelector('.people-daily-opening');
    let serial = 0;

    baseTargets.forEach(el => {
      serial += 1;
      const host = el.closest('section[id],header[id],article[id],main[id]') || main;
      const hostName = host.id || 'main';
      const hostIndex = (hostCounters.get(hostName) || 0) + 1;
      hostCounters.set(hostName, hostIndex);
      const stableId = el.dataset.contentEditId || `content-${hostName}-${String(hostIndex).padStart(3, '0')}`;
      el.dataset.contentEditId = stableId;

      // The first editor export predates the expanded People Daily opening.
      // That replacement removed five text targets, so translate its old ids once.
      const followsPeopleOpening = peopleOpening && !peopleOpening.contains(el) &&
        Boolean(peopleOpening.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING);
      const legacySerial = serial + (followsPeopleOpening ? 5 : 0);
      const legacyId = `text-${String(legacySerial).padStart(3, '0')}`;
      targets.set(stableId, el);
      targets.set(legacyId, el);

      const cfg = changes[stableId] || (peopleOpening?.contains(el) ? null : changes[legacyId]);
      if (cfg && !el.closest('[data-content-locked]')) apply(el, cfg);
    });

    duplicates.forEach(item => {
      if (!item || !item.id || !item.sourceId) return;
      const source = targets.get(item.sourceId);
      if (!source) return;
      if (document.querySelector(`[data-content-edit-id="${item.id}"]`)) return;
      const clone = source.cloneNode(false);
      clone.dataset.contentEditId = item.id;
      clone.innerHTML = typeof item.html === 'string' ? item.html : source.innerHTML;
      clone.style.cssText = item.style || source.style.cssText;
      source.after(clone);
      targets.set(item.id, clone);
      apply(clone, changes[item.id]);
    });

    decorations.forEach(item => {
      if (!item || !item.id) return;
      const kind = item.kind;
      const host = document.getElementById(item.hostId) || main;
      createDecor(host, item, targets, changes);
    });

    document.body.classList.add('content-adjusted');

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      void applyAll();
    });
  } else {
    void applyAll();
  }
})();
