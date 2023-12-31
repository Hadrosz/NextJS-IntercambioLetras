'use client'
import { useForm } from 'react-hook-form'
import { playfair, sofia } from '@/app/fonts'
import { useState } from 'react'
import { userDataUpdate } from '@/services/auth/dashboard'

function Settings({ user }) {
  const [disable, setDisable] = useState(false)
  const [data, setData] = useState(user)

  const { register, handleSubmit } = useForm()

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onSubmit = handleSubmit(async (data) => {
    data.username = user.username
    const { res, resJSON } = await userDataUpdate(data)
    if (res.ok) {
      setDisable(true)
    } else {
      alert(resJSON.message)
    }
  })

  return (
    <section
      className={`w-full h-full bg-blueFort rounded-2xl p-8 ${sofia.className}`}
    >
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full gap-5"
        disabled={disable}
      >
        <section className="grid grid-flow-col gap-8 w-full">
          <article className="w- flex flex-col gap-3">
            <label className="text-xl">Firstname</label>
            <input
              name="firstName"
              disabled={disable}
              value={data?.firstName}
              placeholder="First name"
              autoComplete="given-name"
              type="text"
              className={`${sofia.className} ${
                disable ? 'text-zinc' : 'text-white'
              } p-3 rounded-2xl mb-8 mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
              {...register('firstName')}
              onChange={onChange}
            />
          </article>
          <article className="flex flex-col gap-3">
            <label className="text-xl">Last name</label>
            <input
              name="lastName"
              disabled={disable}
              value={data?.lastName}
              autoComplete="family-name"
              type="text"
              placeholder="Last name"
              className={`${sofia.className} ${
                disable ? 'text-zinc' : 'text-white'
              } p-3 rounded-2xl mb-8 mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
              {...register('lastName')}
              onChange={onChange}
            />
          </article>
        </section>
        <section className="grid grid-flow-col gap-8 w-full">
          <article className="w- flex flex-col gap-3">
            <label className="text-xl">Country</label>
            <input
              name="country"
              disabled={disable}
              value={data?.country}
              autoComplete="country-name"
              type="text"
              placeholder="Country"
              className={`${sofia.className} ${
                disable ? 'text-zinc' : 'text-white'
              } p-3 rounded-2xl mb-8 mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
              {...register('country')}
              onChange={onChange}
            />
          </article>
          <article className="flex flex-col gap-3">
            <label className="text-xl">City</label>
            <input
              name="city"
              disabled={disable}
              value={data?.city}
              autoComplete="address-level2"
              type="text"
              placeholder="City"
              className={`${sofia.className} ${
                disable ? 'text-zinc' : 'text-white'
              } p-3 rounded-2xl mb-8 mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
              {...register('city')}
              onChange={onChange}
            />
          </article>
        </section>
        <section className="grid grid-cols-form-name  gap-8 w-full">
          <article className=" flex flex-col gap-3">
            <label className="text-xl">Number</label>
            <input
              name="number"
              disabled={disable}
              value={data?.number}
              autoComplete="tel"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              inputMode="number"
              placeholder="123-45-678"
              className={`${sofia.className} ${
                disable ? 'text-zinc' : 'text-white'
              } p-3 rounded-2xl mb-8 mt-3 bg-gradient-to-t from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl`}
              {...register('number')}
              onChange={onChange}
            />
          </article>
          <article className="flex flex-col  gap-3">
            <label className="text-xl">Select Image</label>
            <input
              disabled={disable}
              class={`${
                disable ? 'text-zinc' : 'text-white'
              } cursor-pointer file:cursor-pointer block rounded-2xl mb-8 mt-3 file:mr-8 p file:px-8 file:rounded-xl file:bg-green file:p-3 file:border-0 bg-gradient-to-t  from-[#3E606F] from-0% via-[#3E606F]/90 via-50% to-[#3E606F] to-100% backdrop-blur-xl ${
                sofia.className
              } `}
              type="file"
            />
          </article>
        </section>
        <button
          disabled={disable}
          id="submit"
          className={`py-4 px-16  rounded-[32px]  text-xl font-semibold ${
            playfair.className
          } ${
            disable ? 'bg-[#d3d3d3]  text-white' : 'bg-green  text-blueFort'
          }`}
        >
          Save
        </button>
      </form>
    </section>
  )
}

export default Settings
