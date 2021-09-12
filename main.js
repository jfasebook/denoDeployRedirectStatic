addEventListener("fetch", (event) => {
  const response = new Response("<html> Hello </html>", {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  };
                                
  console.log(JSON.stringify(response));
  event.respondWith(
    response,
  );
});
  

