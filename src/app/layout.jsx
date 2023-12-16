import './globals.css'
import NavBar from '@/components/NavBar'
import { sofia, playfair } from '@/app/fonts'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { SessionProvider } from 'next-auth/react'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`w-full  flex justify-center items-center flex-col ${playfair.className}`}
      >
        <NavBar />

        <main className="w-[1570px]">{children}</main>
      </body>
    </html>
  )
}
