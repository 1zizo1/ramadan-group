"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

export default function CEOCard() {
  const t = useTranslations("CEOCard");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition mt-4"
    >
      {/* Header Section */}
      <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-700 flex items-center justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4">
          {t("name")}
        </h3>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col md:flex-row gap-8">
        {/* Portrait via Cloudinary */}
        <div className="relative w-40 h-40 rounded-xl overflow-hidden shadow-md mx-auto md:mx-0">
          <CldImage
            src="Picsart_25-09-19_19-50-43-713_eqe1hg" // <-- your Cloudinary public ID here
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
            {t("desc0")}
            <span className="font-semibold">{t("highdecs")}</span>{t("decs")}
          </p>

          {/* Achievements List */}
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-8 h-6 flex items-center justify-center rounded-full bg-blue-700 text-white font-bold">
                ✓
              </span>
              <p>
                <span className="font-semibold">{t("highspan")}</span> {t("span")}
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-10 h-6 flex items-center justify-center rounded-full bg-blue-700 text-white font-bold">
                ✓
              </span>
              <p>
                <span className="font-semibold">{t("span2")}</span> {t("highspan2")}
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-10 h-6 flex items-center justify-center rounded-full bg-blue-700 text-white font-bold">
                ✓
              </span>
              <p>
                <span className="font-semibold">{t("highspan3")}</span>{t("span3")}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
