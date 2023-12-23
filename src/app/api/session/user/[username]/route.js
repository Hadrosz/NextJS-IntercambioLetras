const { NextResponse } = require('next/server')
import db from '@/libs/prisma'

export async function GET(req, { params }) {
  try {
    const data = await db.user.findUnique({
      where: { username: params.username },
      select: {
        username: true,
        country: true,
        city: true,
        firstName: true,
        lastName: true,
        number: true,
      },
    })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
