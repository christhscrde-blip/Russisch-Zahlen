self.addEventListener('install', e => {
  e.waitUntil(caches.open('ru-vocab-v1').then(c => c.addAll([
    '/', '/index.html', '/style.css', '/app.js', '/data/vocab.ru.json', '/data/alphabet.ru.json', '/assets/icon-192.png', '/assets/icon-512.png', '/manifest.json'
  ])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
