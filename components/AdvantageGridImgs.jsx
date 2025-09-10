"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export default function AdvantageGridImgs({ t, images }) {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-yellow-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-68 h-68 bg-yellow-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-4xl mx-auto text-center md:text-left">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
        >
          {t("Title")}
        </motion.h2>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-md text-gray-700 leading-relaxed mb-6">
              {t("Desc")}
            </p>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition"
            >
              {t("Button")}
            </motion.a>
          </motion.div>

          {/* Right image grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                whileHover={{ scale: 1.05 }}
              >
                <CldImage
                  src={img}
                  alt={`Light product ${i + 1}`}
                  width="800"
                  height="500"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
