"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { motion, AnimatePresence } from "framer-motion";
import LocaleSwitcher from "./LocaleSwitcher";
import ServicesMenu from "./ServicesMenu";
import { useTranslations } from "next-intl";
export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/products", label: t("Products") },
    { href: "/global", label: t("Global") },
    { href: "/team", label: t("Team") },
    { href: "/about", label: t("About") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 text-gray-700">
        {/* Logo */}
        <CldImage
          className="cursor-pointer w-28 md:w-32"
          onClick={() => router.push("/")}
          src="logo_klv1mn"
          width="200"
          height="80"
          alt="Ramadan Group Logo"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className="relative font-medium hover:text-yellow-500 transition"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          {/* Dropdown Service Menu */}
          <ServicesMenu />
        </div>

        {/* Locale Switcher */}
        <div className="hidden md:flex">
          <LocaleSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-[4px] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[2px] bg-gray-700"></span>
          <span className="w-6 h-[2px] bg-gray-700"></span>
          <span className="w-6 h-[2px] bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-inner"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 font-medium hover:text-yellow-500 transition"
                >
                  {link.label}
                </Link>
              ))}
              <ServicesMenu />
              <LocaleSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
