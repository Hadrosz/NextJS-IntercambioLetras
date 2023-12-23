'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { signupPOST } from '@/services/auth/signup'

function SignUpForms() {
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
    const { res, resJSON } = await signupPOST(data)
    if (res.ok) {
      setError('')
      router.push('/auth/login')
    } else {
      setError(resJSON.message)
    }
  })
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-1/3">
      <label className="text-xl">Username</label>
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
        <span className="mb-3 text-red">{errors.username.message}</span>
      )}

      <label className="text-xl">Email</label>
      <input
        placeholder="ejemplo@direccion.com"
        autoComplete="email"
        type="email"
        className="p-3 rounded-2xl mb-8 mt-3 bg-blueFort/40 border border-blueFort"
        {...register('email', {
          required: { value: true, message: 'El correo es requerido' },
        })}
      />
      {errors.email && (
        <span className="mb-3 text-red">{errors.email.message}</span>
      )}

      <label className="text-xl">Password</label>
      <input
        autoComplete="new-password"
        type="password"
        className="p-3 rounded-2xl mb-8 mt-3 bg-blueFort/40 border border-blueFort"
        {...register('password', {
          required: { value: true, message: 'La contraseña es requerido' },
        })}
      />
      {errors.password && (
        <span className="mb-3 text-red">{errors.password.message}</span>
      )}

      <label className="text-xl">Confirm password</label>
      <input
        type="password"
        className="p-3 rounded-2xl mb-8 mt-3 bg-blueFort/40 border border-blueFort"
        {...register('confirmPassword', {
          required: {
            value: true,
            message: 'La confirmacion de contraseña es requerido',
          },
        })}
      />
      {errors.confirmPassword && (
        <span className="mb-3 text-red">{errors.confirmPassword.message}</span>
      )}
      {match && <span className="mb-3 text-red-600">{match}</span>}
      <button className="bg-blueLight text-blueFort font-bold p-3 rounded-3xl mt-5 border border-pigeon-post-300 hover:bg-pigeon-post-900">
        Registrarse
      </button>
      <span className="mb-3 text-red">{error}</span>
    </form>
  )
}

export default SignUpForms
