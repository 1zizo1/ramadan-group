"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export default function HeadOfficeInfo() {
  const offices = [
    {
      country: "Egypt",
      flag: "egypt_flag", // Cloudinary public ID
      address: "Cairo, Egypt",
      details: "123 Nile Street, Downtown, Cairo",
      phone: "+20 123 456 7890",
      email: "egypt@ramadangroup.com",
    },
    {
      country: "England",
      flag: "england_flag", // Cloudinary public ID
      address: "London, UK",
      details: "45 Thames Avenue, Canary Wharf, London",
      phone: "+44 20 7946 0123",
      email: "uk@ramadangroup.com",
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
          Head Offices
        </motion.h2>
        <p className="mt-4 text-center text-gray-600">
          Our global presence ensures seamless operations across regions.
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
                  className="text-yellow-600 hover:underline"
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
