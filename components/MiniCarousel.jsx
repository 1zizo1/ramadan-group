"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
export default function MiniCarousel() {
  const partners = [
    { name: "EU", logo: "815405b6-0c14-4ef4-9991-bc1927d5a9c0" },
    { name: "China", logo: "815405b6-0c14-4ef4-9991-bc1927d5a9c0" },
    { name: "USA", logo: "815405b6-0c14-4ef4-9991-bc1927d5a9c0" },
    { name: "Saudi Arabia", logo: "815405b6-0c14-4ef4-9991-bc1927d5a9c0" },
    { name: "India", logo: "815405b6-0c14-4ef4-9991-bc1927d5a9c0" },
    { name: "UAE", logo: "815405b6-0c14-4ef4-9991-bc1927d5a9c0" },
    { name: "Turkey", logo: "815405b6-0c14-4ef4-9991-bc1927d5a9c0" },
    { name: "Brazil", logo: "815405b6-0c14-4ef4-9991-bc1927d5a9c0" },
  ];

  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-sm text-yellow-600 font-semibold uppercase">
          Trade Partnerships
        </h3>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
          Global Trade Connections
        </h2>
        <p className="mt-2 text-gray-600">
          Egypt partners with leading markets worldwide, strengthening
          international trade access.
        </p>

        {/* Carousel container */}
        <div className="relative overflow-hidden mt-8">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {/* Duplicate for infinite loop */}
            {[...partners, ...partners].map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-28 h-20 md:w-32 md:h-24 flex items-center justify-center bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <CldImage
                  src={p.logo}
                  alt={p.name}
                  width={80}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
