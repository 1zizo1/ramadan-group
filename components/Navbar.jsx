"use client";
import Link from 'next/link'
import Image from "next/image";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "/assets/assets";
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 bg-white">
<div className="">
          <Image
            className="cursor-pointer w-28 md:w-32"
            onClick={() => router.push("/")}
            src={assets.logo}
            alt="logo"
          />


</div>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-yellow-500">Home</Link>
          <Link href="/about" className="hover:text-yellow-500">About</Link>
          <Link href="/services" className="hover:text-yellow-500">Services</Link>
          <Link href="/contact" className="hover:text-yellow-500">Contact</Link>
        </div>
      </div>

      <LanguageSwitcher/>
    </nav>
  )
}
