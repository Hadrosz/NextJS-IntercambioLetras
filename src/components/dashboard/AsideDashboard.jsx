'use client'
import { sofia, playfair } from '@/app/fonts'
import { getSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Link from 'next/link'

function AsideDashboard() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    const data = async () => {
      const { user } = await getSession(authOptions)
      setSession(user)
    }
    data()
  }, [])

  return (
    <aside
      className={`flex flex-col justify-around items-center  rounded-3xl bg-gradient-to-b from-[#599CC0]/30 from-0% via-[#3E606F] via-85% to-[#3E606F]/40 to-100% backdrop-blur-xl ${sofia.className}`}
    >
      <div className="text-2xl flex flex-col items-center gap-3">
        <Image
          src="/1312588.jpeg"
          width="200"
          height="200"
          alt="logo"
          className="rounded-full"
        />
        <h2 className="capitalize">{session?.name}</h2>
      </div>
      <section className="w-full flex flex-col items-center text-xl gap-8">
        <article className="w-full flex justify-center items-center">
          <Link
            href="/dashboard/settings"
            className="flex w-2/4 items-center justify-between"
          >
            <Image
              src="/material-symbols_settings-applications-rounded.png"
              width="40"
              height="40"
              alt="decoration"
            />
            <h3>Settings</h3>
          </Link>
        </article>
        <article className="w-full flex justify-center items-center">
          <Link
            href="/dashboard/privacy"
            className="flex w-2/4 items-center justify-between"
          >
            <Image
              src="/material-symbols_privacy-tip-rounded.png"
              width="40"
              height="40"
              alt="decoration"
            />
            <h3>Privacy</h3>
          </Link>
        </article>
        <article className="w-full flex justify-center items-center">
          <Link
            href="/dashboard/shopping"
            className="flex w-2/4 items-center justify-between"
          >
            <Image
              src="/solar_shop-2-bold.png"
              width="40"
              height="40"
              alt="decoration"
            />
            <h3>Shopping</h3>
          </Link>
        </article>
      </section>
      <button
        onClick={() => {
          signOut()
        }}
        className={`py-4 px-16 bg-green rounded-[32px]  text-blueFort font-semibold ${playfair.className}`}
      >
        Log Out
      </button>
    </aside>
  )
}

export default AsideDashboard
