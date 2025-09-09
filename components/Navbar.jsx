"use client";
import Link from "next/link";
// import LanguageSwitcher from './LanguageSwitcher';
import LocaleSwitcher from "./LocaleSwitcher";
import ServicesMenu from "./ServicesMenu";
import { CldImage } from "next-cloudinary";

export default function Navbar() {
  return (
    <nav className="flex items-center sticky justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 bg-white">
      <div className="">
        <CldImage
          className="cursor-pointer w-28 md:w-32"
          onClick={() => router.push("/")}
          src="logo_klv1mn"
          width="200"
          height="80"
          alt="Ramadan Group Logo"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-yellow-500">
            Home
          </Link>
          <ServicesMenu />
          <Link href="/products" className="hover:text-yellow-500">
            Products
          </Link>
          <Link href="/global" className="hover:text-yellow-500">
            Global
          </Link>
          <Link href="/team" className="hover:text-yellow-500">
            Team
          </Link>
          <Link href="/about" className="hover:text-yellow-500">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </div>
      </div>

      <LocaleSwitcher />
    </nav>
  );
}
