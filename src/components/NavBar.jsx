import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

async function NavBar() {
  const session = await getServerSession(authOptions)

  return (
    <header className="w-auto m-4 px-16 flex justify-center bg-pigeon-post-950 rounded-xl h-16">
      <nav className="w-[1440px] flex justify-between  items-center ">
        <h1>
          <Link href="/">Intercambio de Letras</Link>
        </h1>
        <ul className="flex gap-5">
          {session?.user ? (
            <>
              <li className="py-2 px-4 bg-zinc rounded-md border border-pigeon-post-300 semi-bold hover:bg-pigeon-post-950 active:bg-pigeon-post-900">
                <Link href="/">Inicio</Link>
              </li>
              <li className="py-2 px-4 bg-zinc rounded-md border border-pigeon-post-300 semi-bold hover:bg-pigeon-post-950 active:bg-pigeon-post-900">
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li className="py-2 px-4 bg-zinc rounded-md border border-pigeon-post-300 semi-bold hover:bg-pigeon-post-950 active:bg-pigeon-post-900">
                <Link href="/api/auth/signout">Cerrar Sesion</Link>
              </li>
            </>
          ) : (
            <>
              <li className="py-2 px-4 bg-zinc rounded-md border border-pigeon-post-300 semi-bold hover:bg-pigeon-post-950 active:bg-pigeon-post-900">
                <Link href="/auth/login">Inicio de Sesion</Link>
              </li>
              <li className="py-2 px-4 bg-zinc rounded-md border border-pigeon-post-300 semi-bold hover:bg-pigeon-post-950 active:bg-pigeon-post-900">
                <Link href="/auth/signup">Registrarse</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
