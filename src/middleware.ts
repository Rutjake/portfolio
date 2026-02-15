import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['fi', 'en']
const defaultLocale = 'fi'

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/studio') ||
    pathname.includes('.')
  ) {
    return
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|studio|images|public).*)',
  ],
}