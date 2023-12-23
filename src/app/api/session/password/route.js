const { NextResponse } = require('next/server')
import db from '@/libs/prisma'
import bcrypt from 'bcryptjs'

export async function PUT(req) {
  try {
    const data = await req.json()

    const password = await hashPassword(data.password)
    const user = await db.user.update({
      where: {
        username: data.username,
      },
      data: {
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
