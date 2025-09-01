self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pallas-cache").then((cache) => {
      return cache.addAll([
        "pallas_voice_demo.html",
        "manifest.json",
        "1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3",
        "6.mp3", "7.mp3", "8.mp3", "9.mp3", "10.mp3",
        "11.mp3", "12.mp3",
        "icon-192.png",
        "icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
