const { NextResponse } = require('next/server')
import db from '@/libs/prisma'

export async function PUT(req) {
  try {
    const data = await req.json()

    const updatedUser = await db.user.update({
      where: {
        username: data.oldUsername,
      },
      data: {
        username: data.username,
        email: data.email,
      },
    })

    /*const user = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: password,
      },
    })*/
    return NextResponse.json(updatedUser)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
