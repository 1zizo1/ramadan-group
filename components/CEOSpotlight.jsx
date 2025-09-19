"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export default function CEOSpotlight() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-yellow-50 via-white to-yellow-50">
      {/* Background overlay */}
      <div className="absolute inset-0">
        <CldImage
          src="blurred-silhouette-business-man_l3i1nq" // replace with a professional/abstract bg
          alt="CEO Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        {/* CEO Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-500"
        >
          <CldImage
            src="Picsart_25-09-19_19-50-43-713_eqe1hg" // replace with Atef Ramadan's photo
            alt="Atef Ramadan - CEO"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* CEO Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
            CEO Spotlight
          </h2>
          <p className="mt-2 text-xl text-yellow-600 font-semibold">
            Atef Ramadan – Visionary Leader of Ramadan Group
          </p>
          <p className="mt-6 text-gray-700 leading-relaxed">
            With decades of experience in <span className="font-semibold">trade</span> 
            and <span className="font-semibold">logistics</span>, Atef Ramadan has guided 
            Ramadan Group towards becoming a trusted global import and export partner. 
            His leadership emphasizes <span className="font-semibold">innovation</span>, 
            <span className="font-semibold">reliability</span>, and 
            <span className="font-semibold"> sustainable growth</span> in international markets.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
