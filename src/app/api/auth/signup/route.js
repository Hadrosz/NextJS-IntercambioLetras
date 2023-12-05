const { NextResponse } = require('next/server')

export async function POST(req) {
  return NextResponse.json('creating')
}
