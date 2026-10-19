// All on Red! Level 3 v0.17 — audio mix update, no stale offline cache.
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.registration.unregister()));
