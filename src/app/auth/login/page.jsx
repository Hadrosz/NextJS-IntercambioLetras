export const metadata = {
  title:
    'Iniciar Sesion - Intercambio de Palabras: ¡Conecta palabras, intercambia letras, crea historias infinitas!',
  description:
    'Intercambio de letras, tu destino principal para libros electrónicos. Descubre una amplia gama de géneros literarios, desde bestsellers hasta joyas literarias poco conocidas. Navega, compra y disfruta de la lectura en cualquier lugar con nuestra colección de ebooks. Envíos instantáneos, sin esperas ni costos de envío. ¡Sumérgete en historias cautivadoras con Intercambio de letras hoy mismo!',
}

import LogInForm from '@/components/LogInForm'

function LoginPage() {
  return (
    <section className="flex justify-center flex-col items-center h-[calc(100vh-7rem)] w-full mt-5 rounded-3xl bg-gradient-to-b from-[#599CC0]/30 from-0% via-[#3E606F] via-85% to-[#3E606F]/40 to-100% backdrop-blur-xl ">
      <h1 className="font-bold text-5xl mb-7 text-green ">Log In</h1>
      <LogInForm />
    </section>
  )
}

export default LoginPage
