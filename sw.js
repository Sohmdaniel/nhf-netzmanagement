// NHF Netzmanagement Service Worker - Final Version
// Optimiert für Vercel + GitHub Pages

const CACHE_NAME = 'nhf-v5';
const APP_SHELL = ['./', './index.html', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (APP_SHELL.some(p => url.pathname.endsWith(p) || url.pathname === '/')) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { caches.open(CACHE_NAME).then(c => c.put(e.request, res.clone())); return res; })));
    return;
  }
  e.respondWith(fetch(e.request).then(res => { if(res.ok) caches.open(CACHE_NAME).then(c => c.put(e.request, res.clone())); return res; }).catch(() => caches.match(e.request)));
});