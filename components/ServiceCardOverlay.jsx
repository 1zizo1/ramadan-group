"use client";

import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";

export function ServiceCardOverlay({ title, image, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`relative overflow-hidden group rounded-2xl shadow-lg cursor-pointer ${className}`}
    >
      {/* Image */}
      <CldImage
        src={image}
        alt={title}
        width={800}
        height={600}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
        <motion.h3
          className="text-white font-extrabold text-xl md:text-2xl drop-shadow-md"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm md:text-base text-gray-200 mt-3 max-w-xs"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          High-quality service with professional expertise.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-400 transition"
        >
          Order Now
        </motion.button>
      </div>
    </motion.div>
  );
}
