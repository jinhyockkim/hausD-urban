/* 하우스디어반 동네 한바퀴 — 서비스워커
   한 번 설치하면 서버 없이(오프라인) 동작하도록 앱 파일을 캐시합니다. */
const CACHE = 'hausd-urban-v1';
const ASSETS = [
  './',
  './index.html',
  './data.js',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const sameOrigin = new URL(req.url).origin === self.location.origin;

  if (sameOrigin) {
    // 앱 파일: 네트워크 우선(서버가 있으면 항상 최신) → 실패 시 캐시(오프라인)
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req, { ignoreSearch: true })
            .then(hit => hit || caches.match('./index.html')))
    );
  } else {
    // 폰트 등 외부 리소스: 캐시 우선 → 없으면 받아서 캐시
    e.respondWith(
      caches.match(req).then(hit =>
        hit || fetch(req).then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
          return res;
        }).catch(() => Response.error())
      )
    );
  }
});
