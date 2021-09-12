// addEventListener("fetch", (event) => {
//   const response = new Response("<html> Hello </html>", {
//     status: 200,
//     headers: {
//       "content-type": "text/html",
//     },
//   };
                                
//   console.log(JSON.stringify(response));
//   event.respondWith(
//     response,
//   );
// });


// Create a response with html as its body.
const response = new Response("<html> Hello </html>", {
  status: 200,
  headers: {
    "content-type": "text/html",
  },
});

console.log(response.status); // 200
console.log(response.headers.get("content-type")); // text/html

// You can pass the instance to respondWith() to respond to request
// with the above response.
addEventListener("fetch", (event) => {
  event.respondWith(Response.redirect('https://www.googles.es#test'));
});
  

