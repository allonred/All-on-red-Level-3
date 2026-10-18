// All on Red! Level 3 v0.8 — unregister old offline caches so Safari receives the update.
self.addEventListener("install",e=>self.skipWaiting());self.addEventListener("activate",e=>e.waitUntil(self.registration.unregister()));
