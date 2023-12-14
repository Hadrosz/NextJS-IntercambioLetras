'use client'

import { sofia } from '@/app/fonts'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { userPUT } from '@/services/auth/settings'

function Privacy() {
  const [disable, setDisable] = useState(false)
  const [data, setData] = useState({})
  useEffect(() => {
    setData({})
    setDisable(false)
  }, [])

  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    /*data.username = user.username
    console.log(data)
    const { res, resJSON } = await userPUT(data)
    if (res.ok) {
      setDisable(true)
    } else {
      router.refresh()
      alert(resJSON.message)
    }*/
  })

  return (
    <section
      className={`w-full h-full bg-blueFort rounded-2xl p-8 ${sofia.className}`}
    >
      <form className="flex flex-col w-full gap-5" onSubmit={onSubmit}>
        <section className="grid grid-flow-col gap-8 w-full">
          <article className="w- flex flex-col gap-3">
            <label className="text-xl">Username</label>
            <input
              value={data.username}
              placeholder="Username"
              autoComplete="username"
              type="text"
              className={`${sofia.className} ${
                disable ? 'text-zinc' : 'text-white'
              } p-3 rounded-2xl  mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
              {...register('username', {
                required: { value: true, message: 'Username is required' },
              })}
              onChange={(e) => setData({ username: e.target.value })}
            />
            {errors.username && (
              <span className="mb-3 text-red">{errors.username.message}</span>
            )}
          </article>
          <article className="flex flex-col gap-3">
            <label className="text-xl">Email</label>
            <input
              disabled={disable}
              value={data.email}
              autoComplete="Email"
              type="text"
              placeholder="Email"
              className={`${sofia.className} ${
                disable ? 'text-zinc' : 'text-white'
              } p-3 rounded-2xl  mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
              {...register('email', {
                required: { value: true, message: 'Email is required' },
              })}
              onChange={(e) => setData({ email: e.target.value })}
            />
            {errors.email && (
              <span className="mb-3 text-red">{errors.email.message}</span>
            )}
          </article>
        </section>
        <section className="grid grid-flow-col gap-8 w-full">
          <article className="w- flex flex-col gap-3">
            <label className="text-xl">Password</label>
            <input
              value={data.password}
              type="password"
              className={`${sofia.className} ${
                disable ? 'text-zinc' : 'text-white'
              } p-3 rounded-2xl  mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
              {...register('password', {
                required: { value: true, message: 'Username is required' },
              })}
              onChange={(e) => setData({ password: e.target.value })}
            />
            {errors.password && (
              <span className="mb-3 text-red">{errors.password.message}</span>
            )}
          </article>
          <article className="flex flex-col gap-3">
            <label className="text-xl">New Password</label>
            <input
              disabled={disable}
              value={data.newPassword}
              type="password"
              placeholder="*****"
              className={`${sofia.className} ${
                disable ? 'text-zinc' : 'text-white'
              } p-3 rounded-2xl  mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
              {...register('newPassword', {
                required: { value: true, message: 'password is required' },
              })}
              onChange={(e) => setData({ newPassword: e.target.value })}
            />
            {errors.newPassword && (
              <span className="mb-3 text-red">
                {errors.newPassword.message}
              </span>
            )}
          </article>
        </section>
        <button className="bg-blueLight text-blueFort font-bold p-3 rounded-3xl mt-5 border border-pigeon-post-300 hover:bg-pigeon-post-900">
          do it
        </button>
      </form>
    </section>
  )
}

export default Privacy
