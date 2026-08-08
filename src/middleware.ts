import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // Skip redirect logic for prerendered pages (request.headers not available)
  if (context.isPrerendered) {
    return next();
  }

  const url = new URL(context.request.url);
  const forwardedHost = context.request.headers.get('x-forwarded-host');
  const host = forwardedHost || url.hostname;
  
  // If the host is not the target domain (and not localhost for dev)
  if (
    host !== 'pinabae.site' &&
    host !== 'www.pinabae.site' &&
    host !== 'localhost' &&
    host !== '127.0.0.1'
  ) {
    // Redirect to the new domain
    const newUrl = new URL(url.pathname + url.search, 'https://pinabae.site');
    return Response.redirect(newUrl.toString(), 301);
  }

  return next();
});
