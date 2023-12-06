import db from '@/libs/prisma'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'text' },
      },
      async authorize({ username, password }, req) {
        const userFound = await db.user.findUnique({
          where: {
            username: username,
          },
        })
        if (!userFound) throw new Error('Usuario o contrasena incorrectos')
        const pAuth = await bcrypt.compare(password, userFound.password)
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
