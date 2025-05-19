// Simple service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('ai-tech-cache').then(cache => {
      return cache.addAll([
        '/index.html',
        '/manifest.json',
        '/firebaseConfig.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});