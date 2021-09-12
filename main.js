addEventListener("fetch", (event) => {
  event.respondWith(
    new Response().redirect('https://www.google.es#thisATest'),
  );
});
