"use client";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
export default function Quality() {
  const t = useTranslations("QualtiyAsure")

  return (
    <section className="relative py-16 px-6 md:px-12 bg-gray-50 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-2xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3">
            <ShieldCheckIcon className="w-10 h-10 text-blue-700" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t("Title")}
            </h2>
          </div>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            {t("Desc")}
            <span className="font-semibold text-gray-800">{t("info")}</span>
            {t("high")}
          </p>

          {/* Badge effect */}
          <motion.div
            className="mt-6 inline-block px-4 py-2 bg-blue-700 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            {t("Button")}
          </motion.div>
        </motion.div>

        {/* Visuals Section */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Certificate 1 */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <CldImage
              src="815405b6-0c14-4ef4-9991-bc1927d5a9c0" // upload your certificate image to Cloudinary
              alt="ISO Certificate"
              width="400"
              height="500"
              className="rounded-md"
            />
            <p className="mt-2 text-xs text-center text-gray-500">
              ISO Certified
            </p>
          </motion.div>

          {/* Certificate 2 */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white p-4 rounded-lg shadow-md flex-col justify-between flex"
          >
            <CldImage
              src="b0214e7d-dedd-43d2-bec5-a7da812f2e64"
              alt="Quality Seal"
              width="400"
              height="500"
              className="rounded-md my-auto"
            />
            <p className="mt-2 text-xs text-center text-gray-500">
              Quality Seal
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
