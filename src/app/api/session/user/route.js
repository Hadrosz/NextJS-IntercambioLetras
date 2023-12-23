const { NextResponse } = require('next/server')
import db from '@/libs/prisma'

export async function PUT(req) {
  try {
    const data = await req.json()

    const updatedUser = await db.user.update({
      where: {
        username: data.username,
      },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        city: data.city,
        number: data.number,
      },
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
