'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

function LoginPage() {
  return (
    <section className="flex justify-center flex-col items-center h-[calc(100vh-7rem)] w-full ">
      <h1 className="font-bold text-5xl mb-7">Inicio de Sesion</h1>
      <LoginForm />
    </section>
  )
}

const LoginForm = () => {
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
    } else {
      console.log(res)
      setError(res.error)
    }
  })
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-1/3">
      <label className="text-slate-500">Usuario</label>
      <input
        autoComplete="username"
        type="text"
        placeholder="Username"
        className="p-3 rounded-md mb-2 bg-gray-900 "
        {...register('username', {
          required: { value: true, message: 'El usuario es requerido' },
        })}
      />
      {errors.username && (
        <span className="mb-3 text-red-600">{errors.username.message}</span>
      )}

      <label className="text-slate-500">Contraseña</label>
      <input
        autoComplete="new-password"
        type="password"
        className="p-3 rounded-md mb-2 bg-gray-900"
        {...register('password', {
          required: { value: true, message: 'La contrasena es requerida' },
        })}
      />
      {errors.password && (
        <span className="mb-3 text-red-600">{errors.password.message}</span>
      )}
      <button className="bg-blue-600 p-3 rounded-md mt-5">
        Iniciar Sesion
      </button>
      {error && <span className="mt-3 text-red-600">{error}</span>}
    </form>
  )
}

export default LoginPage
