import db from '@/libs/prisma'
import NextAuth from 'next-auth'
import credentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const authOptions = {
  providers: [
    credentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'text' },
      },
      async authorize(credentials, req) {
        const userFound = await db.user.findUnique({
          where: {
            username: credentials.username,
          },
        })
        if (!userFound) throw new Error('Usuario o contrasena incorrectos')
        const pAuth = await bcrypt.compare(
          credentials.password,
          userFound.password
        )
        if (!pAuth) throw new Error('Usuario o contrasena incorrectos')
        return {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email,
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
