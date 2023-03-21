export const config = {
  // Only run the middleware on the admin route
  matcher: '/',
};

export default function middleware(request) {
  const url = new URL(request.url);
  // You can retrieve IP location or cookies here.
  if (url.pathname === "/") {
    url.pathname = "/es"
  }
  return Response.redirect(url);
}