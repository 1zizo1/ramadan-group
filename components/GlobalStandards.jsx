"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export default function GlobalStandards() {
  const certificates = [
    {
      title: "ISO 9001",
      desc: "International Quality Management Standards.",
      img: "iso_9001_certificate_example", // replace with Cloudinary public ID
    },
    {
      title: "ISO 22000",
      desc: "Food Safety Management Certification.",
      img: "iso_22000_certificate_example",
    },
    {
      title: "HACCP",
      desc: "Hazard Analysis & Critical Control Points.",
      img: "haccp_certificate_example",
    },
    {
      title: "GMP",
      desc: "Good Manufacturing Practices Compliance.",
      img: "gmp_certificate_example",
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
          <h3 className="text-sm text-yellow-600 font-semibold uppercase tracking-widest">
            Global Standards
          </h3>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            Certified Quality & Compliance
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We strictly follow international standards to guarantee{" "}
            <span className="font-semibold text-gray-800">quality, safety, and trust</span>{" "}
            in every product we export.
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
                className="w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-50 to-yellow-100"
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
              <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-400 transition-all duration-500"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
