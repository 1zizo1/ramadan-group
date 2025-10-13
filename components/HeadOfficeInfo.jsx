"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

export default function HeadOfficeInfo() {
const t = useTranslations("HeadOfficeInfo")
  const offices = [
    {
      country: "Egypt",
      flag: "27140_bsuwip", // Cloudinary public ID
      address: "Cairo, Egypt",
      details: "123 Nile Street, Downtown, Cairo",
      phone: "+20 111 6946 096",
      email: "contact@ramadan-group.com",
    },
    {
      country: "England",
      flag: "18166_m3wqbl", // Cloudinary public ID
      address: "mu, UK",
      details: "Canary Wharf, London",
      phone: "+44 7448 124553",
      email: "info@ramadan-group.com",
    },
  ];

  return (
    <section className="relative py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800"
        >
          {t("title")}
        </motion.h2>
        <p className="mt-4 text-center text-gray-600">
                    {t("desc")}

        </p>

        {/* Office Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office, i) => (
            <motion.div
              key={office.country}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition"
            >
              {/* Flag */}
              <div className="flex items-center gap-3 mb-6">
                <CldImage
                  src={office.flag}
                  alt={`${office.country} Flag`}
                  width="50"
                  height="30"
                  crop="fill"
                  gravity="auto"
                  className="rounded shadow-md"
                />
                <h3 className="text-2xl font-semibold text-gray-800">{office.country}</h3>
              </div>

              {/* Info */}
              <p className="text-gray-600 mb-2">{office.details}</p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Phone:</span> {office.phone}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href={`mailto:${office.email}`}
                  className="text-blue-700 hover:underline"
                >
                  {office.email}
                </a>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
