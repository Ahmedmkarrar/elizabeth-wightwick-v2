import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow admin, API routes, and static files through
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/documents') ||
    pathname === '/coming-soon'
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to coming soon
  return NextResponse.redirect(new URL('/coming-soon', request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
