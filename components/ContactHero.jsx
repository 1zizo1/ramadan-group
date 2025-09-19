"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export default function ContactHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Globe / Trade Imagery */}
      <div className="absolute inset-0">
        <CldImage
          src="image55_evnhiy" // <-- replace with your Cloudinary public ID
          alt="Global Trade Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-white"
        >
          Get in Touch with <span className="text-yellow-400">Ramadan Group</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          Connecting businesses worldwide through trusted import & export solutions.
        </motion.p>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact-form"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Contact Us
          </a>
          <a
            href="mailto:info@ramadangroup.com"
            className="px-6 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold rounded-lg shadow-md transition"
          >
            Email Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
