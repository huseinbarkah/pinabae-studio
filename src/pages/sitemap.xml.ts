import type { APIRoute } from 'astro';
import { supabase } from '../lib/supabase';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  // Gunakan domain asli dari request, atau fallback ke default
  const siteUrl = new URL(request.url).origin;

  try {
    // Ambil data dinamis dari Supabase
    const { data: blogs } = await supabase.from('blog_posts').select('slug').eq('status', 'published');
    const { data: portfolios } = await supabase.from('portfolio').select('slug');
    const { data: services } = await supabase.from('services').select('slug');

    // Halaman statis utama
    const staticPages = [
      '',
      '/tentang',
      '/layanan',
      '/portfolio',
      '/blog',
      '/kontak',
      '/faq',
      '/terms-conditions',
      '/privacy-policy'
    ];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Looping halaman statis
    staticPages.forEach(page => {
      sitemap += `
  <url>
    <loc>${siteUrl}${page}</loc>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    });

    // Looping halaman Blog
    if (blogs && blogs.length > 0) {
      blogs.forEach(blog => {
        sitemap += `
  <url>
    <loc>${siteUrl}/blog/${blog.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
      });
    }

    // Looping halaman Portfolio
    if (portfolios && portfolios.length > 0) {
      portfolios.forEach(portfolio => {
        sitemap += `
  <url>
    <loc>${siteUrl}/portfolio/${portfolio.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
      });
    }

    // Looping halaman Layanan
    if (services && services.length > 0) {
      services.forEach(service => {
        sitemap += `
  <url>
    <loc>${siteUrl}/layanan/${service.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
      });
    }

    sitemap += `
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
};
