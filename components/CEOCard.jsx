"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export default function CEOCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition mt-4"
    >
      {/* Header Section */}
      <div className="relative h-48 bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4">
          Atef Ramadan – Story & Achievements
        </h3>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col md:flex-row gap-8">
        {/* Portrait via Cloudinary */}
        <div className="relative w-40 h-40 rounded-xl overflow-hidden shadow-md mx-auto md:mx-0">
          <CldImage
            src="atef_ramadan_portrait" // <-- your Cloudinary public ID here
            alt="Atef Ramadan"
            width="300"
            height="300"
            crop="fill"
            gravity="face"
            className="rounded-xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <p className="text-gray-700 leading-relaxed">
            Atef Ramadan, CEO of <span className="font-semibold">Ramadan Group</span>,
            has played a pivotal role in expanding the company’s footprint across
            Europe and the Gulf. His strategic leadership bridges cultural and
            commercial divides, strengthening Egypt’s position in international
            trade.
          </p>

          {/* Achievements List */}
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-8 h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold">
                ✓
              </span>
              <p>
                <span className="font-semibold">Poland:</span> Established strong
                partnerships in Eastern Europe, opening trade channels for
                high-demand commodities.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-10 h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold">
                ✓
              </span>
              <p>
                <span className="font-semibold">United Kingdom:</span> Expanded
                operations with trusted logistics and compliance expertise,
                building a reliable presence in the UK market.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-10 h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold">
                ✓
              </span>
              <p>
                <span className="font-semibold">Gulf Region:</span> Developed
                import/export networks in Saudi Arabia, UAE, and Qatar, ensuring
                a steady pipeline of goods and services.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
