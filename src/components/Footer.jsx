'use client'
import Image from 'next/image'
import React from 'react'
import { sofia, playfair } from '@/app/fonts'
import Link from 'next/link'

function Footer() {
  return (
    <footer
      className={` flex justify-center w-auto py-8 mb-6 px-16 backdrop-blur-xl rounded-xl mt-16 ${sofia.className}`}
    >
      <section className="text-green rounded-b-3xl	w-[1440px]">
        <article className=" flex justify-between  items-start text-lg  ">
          <address className="flex flex-col justify-center items-center gap-3">
            <Image src="/MainLogo.png" width={50} height={50} alt="logo" />
            <span className="mt-3">+1 (7635) 547-12-97</span>
            <span>support@book.heaven</span>
          </address>
          <div className="flex flex-col ">
            <h3 className={`text-xl ${playfair.className}`}>Quick Links</h3>
            <ul className={`grid grid-cols-2 gap-5 mt-6 `}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Book</Link>
              </li>
              <li>
                <Link href="/">Series</Link>
              </li>
              <li>
                <Link href="/">News</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h3 className={`text-xl ${playfair.className}`}>Subscribe</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
              className={`mt-6 ${sofia.className} flex flex-row`}
            >
              <input
                type="email"
                placeholder="Get products update"
                className={`bg-transparent h-11 rounded-s-md text-sm p-2 border border-green/20 placeholder-green/40 `}
              />
              <button className="h-11 w-11 bg-green rounded-e-md flex items-center justify-center">
                <Image width={15} height={15} alt="arrow" src="/row.svg" />
              </button>
            </form>
            <div className="flex flex-row gap-5 mt-9">
              <Link href="https://linkedin.com/" target="_blank">
                <Image width={50} height={50} alt="arrow" src="/Linkedin.svg" />
              </Link>
              <Link href="https://facebook.com/" target="_blank">
                <Image width={50} height={50} alt="arrow" src="/facebook.svg" />
              </Link>
              <Link href="https://twitter.com/" target="_blank">
                <Image width={50} height={50} alt="arrow" src="/Twitter.svg" />
              </Link>
            </div>
          </div>
        </article>
        <article className="mt-9">
          <div className="w-full h-[1px]  bg-green/10"></div>
        </article>
        <article
          className={`flex justify-between mt-5 ${playfair.className} text-base`}
        >
          <small className="text-base">A product of Heaven`s Book</small>
          <small className="text-base">
            © 2023 Heaven`s Book. All rights reserved
          </small>
        </article>
      </section>
    </footer>
  )
}

export default Footer
