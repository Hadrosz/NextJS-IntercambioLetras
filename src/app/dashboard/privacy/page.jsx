import Privacy from '@/components/dashboard/Privacy'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'
import db from '@/libs/prisma'

async function privacyPage() {
  const session = await getServerSession()
  const user = await fetchUserData(session.user.name)
  return (
    <section className="flex  flex-col items-center h-[calc(100vh-7rem)] w-full rounded-3xl bg-gradient-to-b from-[#599CC0]/30 from-0% via-[#3E606F] via-85% to-[#3E606F]/40 to-100% backdrop-blur-xl p-11 gap-10">
      <div className="flex flex-row gap-7  items-center w-full">
        <Image
          src="/material-symbols_privacy-tip-rounded.png"
          width="50"
          height="50"
          alt="decoration"
        />
        <h1 className="font-bold text-5xl">Privacy</h1>
      </div>
      <Privacy user={user} />
    </section>
  )
}

const fetchUserData = async (session) => {
  const data = await db.user.findUnique({ where: { username: session } })
  return data
}

export default privacyPage
