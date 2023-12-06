import SignUpForm from '@/components/SignUpForm'

export const metadata = {
  title:
    'Registrarse - Intercambio de Palabras ¡Conecta palabras, crea historias infinitas!',
  description:
    'Intercambio de letras, tu destino principal para libros electrónicos. Descubre una amplia gama de géneros literarios, desde bestsellers hasta joyas literarias poco conocidas. Navega, compra y disfruta de la lectura en cualquier lugar con nuestra colección de ebooks. Envíos instantáneos, sin esperas ni costos de envío. ¡Sumérgete en historias cautivadoras con Intercambio de letras hoy mismo!',
}

function SignUpPage() {
  return (
    <section className="flex justify-center flex-col items-center h-[calc(100vh-7rem)] w-full ">
      <h1 className="font-bold text-5xl mb-7 text-pigeon-post-200">Registro</h1>
      <SignUpForm />
    </section>
  )
}

export default SignUpPage
