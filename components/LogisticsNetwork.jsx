"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

export default function LogisticsNetwork() {
  const t =useTranslations("LogisticsNetwork")
  const logistics = [
    {
      title: "Shipping",
      img: "IMG-20250919-WA0054_ritnej", // replace with your Cloudinary public ID
      delay: 0,
    },
    {
      title: "Trucking",
      img: "IMG-20250921-WA0010_rx8o3i",
      delay: 0.2,
    },
    {
      title: "Air Freight",
      img: "place-flying-sunset-sky_jqjnrx",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-sm text-blue-700 font-semibold uppercase tracking-widest">
            {t("title")}
          </h3>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            {t("head")}
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
           {t("we")}
            <span className="font-semibold text-gray-800">
              {t("high")}
              </span>
            {t("desc")}
          </p>
        </motion.div>

        {/* Grid wrapper with relative positioning */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 z-10">
          {logistics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-lg group bg-white"
            >
              {/* Cloudinary Image */}
              <CldImage
                src={item.img}
                alt={item.title}
                width="500"
                height="350"
                crop="fill"
                gravity="auto"
                quality="auto"
                fetchFormat="auto"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated SVG lines (placed above the grid) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 800"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Shipping → Trucking */}
          <motion.path
            d="M400,400 Q800,200 1200,400"
            stroke="gold"
            strokeWidth="3"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />

          {/* Trucking → Air Freight */}
          <motion.path
            d="M1200,400 Q1000,600 800,600"
            stroke="deepskyblue"
            strokeWidth="3"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
          />

          {/* Air Freight → Shipping (closing the loop) */}
          <motion.path
            d="M800,600 Q500,500 400,400"
            stroke="tomato"
            strokeWidth="3"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 3, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
}
