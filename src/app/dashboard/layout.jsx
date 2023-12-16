import AsideDashboard from '@/components/AsideDashboard'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export const metadata = {
  title:
    'Dashboard - Intercambio de Palabras: ¡Conecta palabras, intercambia letras, crea historias infinitas!',
  description:
    'Intercambio de letras, tu destino principal para libros electrónicos. Descubre una amplia gama de géneros literarios, desde bestsellers hasta joyas literarias poco conocidas. Navega, compra y disfruta de la lectura en cualquier lugar con nuestra colección de ebooks. Envíos instantáneos, sin esperas ni costos de envío. ¡Sumérgete en historias cautivadoras con Intercambio de letras hoy mismo!',
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
