addEventListener("fetch", (event) => {
  let response = new Response('', {status: 301})
  event.respondWith(
    response.redirect('https://www.google.es#thisATest'),
  );
});
