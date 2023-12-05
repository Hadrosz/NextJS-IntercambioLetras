'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

function SignUpPage() {
  const [error, setError] = useState('')
  const [match, setMatch] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      setMatch('Las contrasenas no coinciden')
      return null
    }
    setMatch('')
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resJSON = await res.json()
    if (res.ok) {
      setError('')
      router.push('/auth/login')
    } else {
      setError(resJSON.message)
    }
  })

  return (
    <section className="flex justify-center flex-col items-center h-[calc(100vh-7rem)] w-full ">
      <h1 className="font-bold text-5xl mb-7">Registro</h1>

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

        <label className="text-slate-500">Correo</label>
        <input
          placeholder="ejemplo@direccion.com"
          autoComplete="email"
          type="email"
          className="p-3 rounded-md mb-4 bg-gray-900"
          {...register('email', {
            required: { value: true, message: 'El correo es requerido' },
          })}
        />
        {errors.email && (
          <span className="mb-3 text-red-600">{errors.email.message}</span>
        )}

        <label className="text-slate-500">Contraseña</label>
        <input
          autoComplete="new-password"
          type="password"
          className="p-3 rounded-md mb-2 bg-gray-900"
          {...register('password', {
            required: { value: true, message: 'La contraseña es requerido' },
          })}
        />
        {errors.password && (
          <span className="mb-3 text-red-600">{errors.password.message}</span>
        )}

        <label className="text-slate-500">Confirmar contraseña</label>
        <input
          type="password"
          className="p-3 rounded-md mb-2 bg-gray-900"
          {...register('confirmPassword', {
            required: {
              value: true,
              message: 'La confirmacion de contraseña es requerido',
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="mb-3 text-red-600">
            {errors.confirmPassword.message}
          </span>
        )}
        {match && <span className="mb-3 text-red-600">{match}</span>}
        <button className="bg-blue-600 p-3 rounded-md mt-5">Registrarse</button>
        <span className="mb-3 text-red-600">{error}</span>
      </form>
    </section>
  )
}

export default SignUpPage
