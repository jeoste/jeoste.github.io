const CACHE_NAME = 'jeoste-cache-v4';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/manifest.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => (key === CACHE_NAME ? undefined : caches.delete(key))))
    ).then(() => self.clients.claim())
  );
});

// Network-first for pages, cache-first for most static assets
// but CSS uses network-first to avoid serving stale styles
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET
  if (request.method !== 'GET') return;

  // Network-first specifically for CSS to ensure latest design updates
  if (request.destination === 'style' || url.pathname.endsWith('.css')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const respClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, respClone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first for other static assets (hashed build files, images, etc.)
  if (url.pathname.startsWith('/_astro/') || url.pathname.startsWith('/assets/') || url.pathname.endsWith('.js') || url.pathname.endsWith('.png') || url.pathname.endsWith('.jpg') || url.pathname.endsWith('.webp') || url.pathname.endsWith('.svg')) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((response) => {
        const respClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, respClone));
        return response;
      }))
    );
    return;
  }

  // Network-first for documents/pages
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request).then((response) => {
        const respClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, respClone));
        return response;
      }).catch(() => caches.match(request))
    );
  }
});


