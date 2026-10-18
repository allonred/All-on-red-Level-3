// All on Red! Level 3 v0.10 — disable stale offline caching.
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.registration.unregister()));
