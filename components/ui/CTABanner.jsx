"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CTABanner() {
    const t = useTranslations("CTABannerContact")

  return (
    <section className="relative w-full bg-gradient-to-r from-yellow-500 to-yellow-600 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-extrabold text-white"
        >
          {t("title")}
        </motion.h2>

        {/* Button */}
        <motion.a
          href="mailto:info@ramadangroup.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          {t("buttonText")}
        </motion.a>
      </div>
    </section>
  );
}
