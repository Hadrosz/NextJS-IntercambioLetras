export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/dashboard/settings', '/dashboard/privacy', '/dashboard/shopping'],
}
