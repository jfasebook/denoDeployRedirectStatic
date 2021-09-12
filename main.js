addEventListener("fetch", (event) => {
  const response = new Response("<html> Hello </html>", {
  status: 200,
  headers: {
    "content-type": "text/html",
  },
});
  console.log(JSON.stringify(response);
  redirect(url: string, status?: number)
  event.respondWith(
    response,
  );
});
