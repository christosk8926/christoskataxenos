import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the hostname (e.g., "bio.christoskataxenos.com" or "localhost:3000")
  const hostname = request.headers.get('host') || '';

  // Define the subdomains and their target paths
  const currentHost = hostname.replace('.localhost:3000', '').replace('.christoskataxenos.com', ''); // Simplification for matching

  // Logic for "bio.domain.com"
  if (hostname.startsWith('bio.')) {
    return NextResponse.rewrite(new URL('/bio', request.url));
  }

  // Logic for "blog.domain.com"
  if (hostname.startsWith('blog.')) {
    return NextResponse.rewrite(new URL('/blog', request.url));
  }

  // Logic for "portfolio.domain.com"
  if (hostname.startsWith('portfolio.')) {
    return NextResponse.rewrite(new URL('/portfolio', request.url));
  }
  
  // Default: allow request to proceed normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
