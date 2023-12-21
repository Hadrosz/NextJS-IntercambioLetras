import AsideDashboard from '@/components/AsideDashboard'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export const metadata = {
  title:
    'Dashboard - Heaven`s Books:  every page is a gateway to enlightenment',
  description:
    'Explore the boundless realms of knowledge at Heaven`s Books: Where every page is a gateway to enlightenment!',
}

function layout({ children }) {
  return (
    <grid className="grid grid-cols-my-columns mt-6 gap-6 ">
      <AsideDashboard />
      {children}
    </grid>
  )
}

export default layout
