import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en','zh-TW','zh-CN','ja'],
  defaultLocale: 'en'
})

export const config = { matcher: ['/((?!_next|.*\..*).*)'] }
