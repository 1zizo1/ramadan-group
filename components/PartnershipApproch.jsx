"use client";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { Quote } from "lucide-react";

export default function PartnershipApproch({t,img}) {
  return (
    <section className="relative py-16 px-6 md:px-12 bg-gradient-to-br from-yellow-50 via-white to-gray-50 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-30 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-20 blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Testimonial + Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <div className="flex items-center gap-2 text-yellow-600">
            <Quote className="w-8 h-8" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
             {t("Title")}
            </h2>
          </div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
           {t("at")}<span className="font-semibold text-gray-800">{t("highRG")}</span>{t("info")}
            <span className="text-yellow-600 font-medium">{t("high")}</span>{t("Desc")}
          </p>

          {/* Animated Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mt-4 px-4 py-2 bg-yellow-500 text-black text-sm font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
          >
            {t("Button")}
          </motion.div>
        </motion.div>

        {/* Right: Handshake Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <CldImage
              src="advantage_ojbs9o" //  Cloudinary public ID
              alt="Partnership handshake"
              width="500"
              height="400"
              className="rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-yellow-400 opacity-0 group-hover:opacity-10 transition" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
