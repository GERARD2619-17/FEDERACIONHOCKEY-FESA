self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./","/about.html","/contac.html","/price.html","/appointment.html","/service.html","/opening.html","/team.html","/testimonial.html","./src/master.css","./logohockey512_512.png"]);
    })
  );
});
//para que funcione offlinee
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
