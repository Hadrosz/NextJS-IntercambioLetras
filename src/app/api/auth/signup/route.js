const { NextResponse } = require('next/server')
import db from '@/libs/prisma'
import bcrypt from 'bcrypt'

export async function POST(req) {
  try {
    const data = await req.json()

    const usernameUser = await db.user.findUnique({
      where: {
        username: data.username,
      },
    })

    const emailUser = await db.user.findUnique({
      where: {
        email: data.email,
      },
    })

    if (usernameUser)
      return NextResponse.json(
        {
          message: 'El nombre de usuario ya existe',
        },
        { status: 400 }
      )
    if (emailUser)
      return NextResponse.json(
        {
          message: 'El correo ya fue usado aneriormente',
        },
        { status: 400 }
      )

    const password = await hashPassword(data.password)
    const user = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: password,
      },
    })
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

async function hashPassword(password) {
  return await bcrypt.hash(password, 10)
}
