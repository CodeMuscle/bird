'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Link as ScrollLink, Element } from 'react-scroll'
import {AnimatedShinyTextDemo} from '@/components/demos/animated-shiny-text-demo';
import { CoverDemo } from '@/components/demos/cover-demo';

export default function Home() {
  return (
    <div className="overflow-clip inset-0 -z-10 h-screen w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={`/`}>
          <Image
            src={`/logo/logo.webp`}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link className="hover:text-blue-500" href={`/showcase`}>
              Showcase
            </Link>
            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500"
            >
              Process
            </ScrollLink>
            <ScrollLink
              to="guarantees"
              smooth={true}
              className="hover:text-blue-500"
            >
              Guarantees
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <a href="tel:+24519400200" className="hidden xl:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              (+24)-519-400-200
            </button>
          </a>
          <Link
            href={`/meeting`}
            className="px-6 py-3 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Book a call
          </Link>
        </div>
      </Element>

      <main className="md:pb-10"> 
        <div className="md:px-10 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />
        </div>
        <h1>
          <CoverDemo />
        </h1>
      </main>
    </div>
  )
}
