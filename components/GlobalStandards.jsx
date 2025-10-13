"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

export default function GlobalStandards() {
  const t =useTranslations("GlobalStandards")
  const certificates = [
    {
      title: "ISO 9001",
      desc: "International Quality Management Standards.",
      img: "815405b6-0c14-4ef4-9991-bc1927d5a9c0", // replace with Cloudinary public ID
    },
    {
      title: "ISO 22000",
      desc: "Food Safety Management Certification.",
      img: "kiwa-logo-1_pfqyrc",
    },
    {
      title: "HACCP",
      desc: "Hazard Analysis & Critical Control Points.",
      img: "files-56f90a24-c839-4b25-ae89-2eca327d29d9_chlyd4",
    },
    {
      title: "GMP",
      desc: "Good Manufacturing Practices Compliance.",
      img: "92d1f6ec-d9c2-42b3-8de1-a2ce84a84e25",
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {certificates.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center bg-white rounded-xl shadow-md hover:shadow-lg p-6 border border-gray-100 group"
            >
              {/* Certificate Image */}
              <motion.div
                className="w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-50 to-blue-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <CldImage
                  src={item.img}
                  alt={item.title}
                  width="96"
                  height="96"
                  crop="fit"
                  quality="auto"
                  fetchFormat="auto"
                  className="w-16 h-16 object-contain"
                />
              </motion.div>

              {/* Text */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>

              {/* Glow animation */}
              <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-500"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
