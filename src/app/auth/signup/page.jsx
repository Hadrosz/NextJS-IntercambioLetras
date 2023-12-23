import SignUpForm from '@/components/forms/SignUpForm'

export const metadata = {
  title: 'SignUp - Heaven`s Books:  every page is a gateway to enlightenment',
  description:
    'Explore the boundless realms of knowledge at Heaven`s Books: Where every page is a gateway to enlightenment!',
}

function SignUpPage() {
  return (
    <section className="flex justify-center flex-col items-center h-[calc(100vh-7rem)] w-full mt-5 rounded-3xl bg-gradient-to-b from-[#599CC0]/30 from-0% via-[#3E606F] via-85% to-[#3E606F]/40 to-100% backdrop-blur-xl ">
      <h1 className="font-bold text-5xl mb-7 text-green ">Sign In</h1>
      <SignUpForm />
    </section>
  )
}

export default SignUpPage
