// Level 3 v0.2: unregister service worker so iOS always receives new audio.
self.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',e=>e.waitUntil(self.registration.unregister()));
