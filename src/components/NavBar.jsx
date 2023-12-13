import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Image from 'next/image'

async function NavBar() {
  const session = await getServerSession(authOptions)

  return (
    <header className=" backdrop-blur-sm w-auto px-16 flex justify-center bg-gradient-to-b from-gradientFrom/60 to-gradientTo/20 rounded-b-3xl h-[80px]">
      <nav className=" 	w-[1440px] flex justify-between  items-center text-white text-lg">
        <ul className="flex gap-8 text-xl">
          <li>
            <Link href="/" className="flex gap-3">
              <Image src="MainLogo.svg" width="25" height="25" alt="logo" />
            </Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Books</Link>
          </li>
          <li>
            <Link href="/">Series</Link>
          </li>
          <li>
            <Link href="/">News</Link>
          </li>
        </ul>
        <ul className="flex gap-8">
          {session?.user ? (
            <>
              <li className="text-white ">
                <Link href="/dashboard" className="flex gap-4">
                  <Image
                    src="/account.png"
                    width="25"
                    height="25"
                    alt="account-logo"
                  />
                  <span>Account</span>
                </Link>
              </li>
              <li className="text-white">
                <Link href="/" className="flex gap-4">
                  <Image
                    src="/library.png"
                    width="25"
                    height="25"
                    alt="Favorites-logo"
                  />
                  <span>Favorites</span>
                </Link>
              </li>
              <li className="text-white">
                <Link href="/" className="flex gap-4">
                  <Image
                    src="/shopping.png"
                    width="30"
                    height="30"
                    alt="Shopping-logo"
                  />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/auth/login"
                  className="py-2 px-12 bg-green rounded-[32px]  text-blueFort font-semibold "
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/signup"
                  className="py-2 px-12 bg-blueLight rounded-[32px]  text-blueFort font-semibold "
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
