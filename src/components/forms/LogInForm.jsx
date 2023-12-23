'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

export default function LogInForm() {
  const [error, setError] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false,
    })
    if (res.ok) {
      router.push('/')
      router.refresh()
    } else {
      setError(res.error)
    }
  })
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-1/3">
      <label className="text-xl">Usuario</label>
      <input
        autoComplete="username"
        type="text"
        placeholder="Username"
        className="p-3 rounded-2xl mb-8 mt-3 bg-blueFort/40 border border-blueFort"
        {...register('username', {
          required: { value: true, message: 'El usuario es requerido' },
        })}
      />
      {errors.username && (
        <span className="mb-3 text-red-600">{errors.username.message}</span>
      )}

      <label className="text-xl">Contraseña</label>
      <input
        autoComplete="new-password"
        type="password"
        className="p-3 rounded-2xl mb-8 mt-3 bg-blueFort/40 border border-blueFort"
        {...register('password', {
          required: { value: true, message: 'La contrasena es requerida' },
        })}
      />

      {errors.password && (
        <span className="mb-3 text-red-600">{errors.password.message}</span>
      )}
      <button className="bg-blueLight text-blueFort font-bold p-3 rounded-3xl mt-5 border border-pigeon-post-300 hover:bg-pigeon-post-900">
        Log In
      </button>
      {error && <span className="mt-3 text-red-600">{error}</span>}
    </form>
  )
}
