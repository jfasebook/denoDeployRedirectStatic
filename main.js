// You can pass the instance to respondWith() to respond to request
// with the above response.
addEventListener("fetch", (event) => {
  event.respondWith(Response.redirect('https://www.google.es#test=1'));
});
  

