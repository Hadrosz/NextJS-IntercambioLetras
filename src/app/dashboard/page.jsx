'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

function DashboardPage() {
  return (
    <section className="flex justify-center flex-col items-center h-[calc(100vh-7rem)] w-full ">
      <h1 className="font-bold text-5xl mb-7">Dashboard</h1>
      <button
        className="text-zinc bg-white rounded-md py-2 px-4 semi-bold"
        onClick={() => signOut()}
      >
        Cerrar Sesion
      </button>
    </section>
  )
}

export default DashboardPage
