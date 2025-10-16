"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

export default function ExpansionVision() {
  const t = useTranslations("ExpansionVision");
  const markets = [
    { name: "Europe", x: 820, y: 330, color: "blue" },
    { name: "Asia", x: 1050, y: 330, color: "red" },
    { name: "Africa", x: 820, y: 480, color: "green" },
    { name: "North America", x: 500, y: 320, color: "orange" },
    { name: "South America", x: 600, y: 520, color: "purple" },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm text-blue-700 font-semibold uppercase tracking-widest"
        >
          {t("title")}
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          {t("head")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-600 max-w-2xl mx-auto"
        >
          {t("we")}
          <span className="font-semibold text-gray-800">{t("high")}</span>
          {t("desc")}
        </motion.p>
      </div>

      {/* Map container */}
      <div className="relative w-full h-[500px] md:h-[600px]">
        {/* Background Map from Cloudinary */}
        <CldImage
          src="61772_ofucox" // 🔹 replace with your Cloudinary image ID
          alt="World Map"
          fill
          className="object-contain"
          priority
        />

        {/* Animated overlay */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 800"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Target Markets */}
          {markets.map((m, i) => (
            <g key={i}>
              {/* Pulse Effect */}
              <motion.circle
                cx={m.x}
                cy={m.y}
                r="12"
                fill={m.color}
                opacity="0.3"
                animate={{ r: [12, 30, 12], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Main Dot */}
              <circle cx={m.x} cy={m.y} r="8" fill={m.color} />
              {/* Label */}
              <text
                x={m.x + 15}
                y={m.y - 10}
                fontSize="14"
                fill="gray"
                className="font-semibold"
              >
                {m.name}
              </text>
            </g>
          ))}

          {/* Animated Trade Routes */}
          {markets.map((m, i) => (
            <motion.path
              key={`route-${i}`}
              d={`M800,400 Q${(800 + m.x) / 2},${(400 + m.y) / 2 - 100} ${
                m.x
              },${m.y}`}
              stroke={m.color}
              strokeWidth="2"
              fill="transparent"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.3 }}
              viewport={{ once: true }}
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
