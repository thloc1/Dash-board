/* Ngày Mới One UI 8.5 V9.5 — offline application shell */
'use strict';
const CACHE_NAME = 'ngay-moi-oneui85-v9-5-shell';
const APP_SHELL = [
  './index.html',
  './ngay_moi_oneui85_v9_5.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('ngay-moi-oneui85-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          cache.put(request, response.clone()).catch(() => {});
          if (requestUrl.pathname.endsWith('/index.html') || requestUrl.pathname.endsWith('/ngay_moi_oneui85_v9_5.html')) {
            cache.put(requestUrl.pathname.endsWith('/index.html') ? './index.html' : './ngay_moi_oneui85_v9_5.html', response.clone()).catch(() => {});
          }
        }
        return response;
      } catch (_) {
        return (await cache.match(request)) || (await cache.match('./index.html')) || (await cache.match('./ngay_moi_oneui85_v9_5.html')) ||
          new Response('Ngày Mới chưa được lưu để dùng ngoại tuyến. Hãy kết nối mạng và mở ứng dụng một lần.', {status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
      }
    })());
    return;
  }
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME),cached = await cache.match(request);
    if (cached) return cached;
    try { const response=await fetch(request); if(response&&response.ok)cache.put(request,response.clone()).catch(()=>{}); return response; }
    catch (_) { return new Response('',{status:504,statusText:'Offline'}); }
  })());
});
