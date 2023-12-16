'use client'

import { sofia, playfair } from '@/app/fonts'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { usernamePUT, passwordPUT } from '@/services/auth/dashboard'
import bcrypt from 'bcryptjs'

function Privacy({ user }) {
  const router = useRouter()

  return (
    <section
      className={`w-full h-full bg-blueFort rounded-2xl p-8 ${sofia.className}`}
    >
      <UserInfoForm user={user} />
      <PasswordForm user={user} />
    </section>
  )
}

const PasswordForm = ({ user }) => {
  const router = useRouter()
  const [passwordError, setPasswordError] = useState(true)
  const [disable, setDisable] = useState(false)

  const handleChange = async (e) => {
    const match = await bcrypt.compare(e.target.value, user.password)
    if (match) {
      setDisable(true)
    }
  }

  useEffect(() => {}, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data.newPassword)
    const { res, resJSON } = await passwordPUT(user.username, data.newPassword)
    if (res.ok) {
      setDisable(false)

      router.refresh('/')
    } else {
      alert(resJSON.message)
    }
  })
  return (
    <form className="flex flex-col w-full gap-5 mt-16" onSubmit={onSubmit}>
      <section className="grid grid-flow-col gap-8 w-full">
        <article className="w- flex flex-col gap-3">
          <label className="text-xl">Password</label>
          <input
            disabled={disable}
            type="password"
            className={`${sofia.className} ${
              disable ? 'text-zinc' : 'text-white'
            } p-3 rounded-2xl  mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
            onChange={handleChange}
          />
          {passwordError && (
            <span className="mb-3 text-red">{passwordError}</span>
          )}
        </article>
        <article className="flex flex-col gap-3">
          <label className="text-xl">New Password</label>
          <input
            disabled={!disable}
            type="password"
            className={`${sofia.className} ${
              !disable ? 'text-zinc' : 'text-white'
            } p-3 rounded-2xl  mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
            {...register('newPassword', {
              required: { value: true, message: 'Password is required' },
            })}
          />
          {errors.newPassword && (
            <span className="mb-3 text-red">{errors.newPassword.message}</span>
          )}
        </article>
      </section>
      <button
        disabled={!disable}
        id="submit"
        className={`py-4 px-16  rounded-[32px]  text-xl font-semibold ${
          playfair.className
        } ${!disable ? 'bg-[#d3d3d3]  text-white' : 'bg-green  text-blueFort'}`}
      >
        Save
      </button>
    </form>
  )
}

const UserInfoForm = ({ user }) => {
  const oldUsername = user.username
  const router = useRouter()

  const [data, setData] = useState({})
  const [disable, setDisable] = useState(true)
  useEffect(() => {
    setData(user)
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user.username,
      email: user.email,
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    data.oldUsername = oldUsername
    console.log(data)
    const { res, resJSON } = await usernamePUT(data)
    if (res.ok) {
      setDisable(true)
    } else {
      router.refresh()
      alert(resJSON.message)
    }
  })

  return (
    <form className="flex flex-col w-full gap-5" onSubmit={onSubmit}>
      <section className="grid grid-flow-col gap-8 w-full">
        <article className="w- flex flex-col gap-3">
          <label className="text-xl">Username</label>
          <input
            disabled={true}
            placeholder="Username"
            autoComplete="username"
            type="text"
            className={`${sofia.className} ${
              disable ? 'text-zinc' : 'text-white'
            } p-3 rounded-2xl  mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
            {...register('username', {
              required: { value: true, message: 'Username is required' },
            })}
          />
          {errors.username && (
            <span className=" text-red">{errors.username.message}</span>
          )}
        </article>
        <article className="flex flex-col gap-3">
          <label className="text-xl">Email</label>
          <input
            disabled={disable}
            //value={data.email}
            autoComplete="Email"
            type="email"
            placeholder="Email"
            className={`${sofia.className} ${
              disable ? 'text-zinc' : 'text-white'
            } p-3 rounded-2xl  mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
            {...register('email', {
              required: { value: true, message: 'Email is required' },
            })}
          />
          {errors.email && (
            <span className=" text-red">{errors.email.message}</span>
          )}
        </article>
      </section>
      <button
        disabled={disable}
        id="submit"
        className={`py-3 px-16  rounded-[32px]  text-lg font-semibold ${
          playfair.className
        } ${disable ? 'bg-[#d3d3d3]  text-white' : 'bg-green  text-blueFort'}`}
      >
        Save
      </button>
    </form>
  )
}

export default Privacy
