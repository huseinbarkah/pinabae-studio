import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  
  // If the host is not the target domain (and not localhost for dev)
  if (
    url.hostname !== 'pinabae.site' &&
    url.hostname !== 'localhost' &&
    url.hostname !== '127.0.0.1'
  ) {
    // Redirect to the new domain
    const newUrl = new URL(url.pathname + url.search, 'https://pinabae.site');
    return Response.redirect(newUrl.toString(), 301);
  }

  return next();
});
