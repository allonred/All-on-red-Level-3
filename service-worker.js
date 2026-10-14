// Level 3 v0.1: do not install an offline service worker during early testing.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.registration.unregister()));
