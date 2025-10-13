"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import {
  ScaleIcon,        // ⚖️ Legal
  GlobeAltIcon,     // 🌍 Global
  TruckIcon,        // ⚓ Logistics
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

export default function COOCard() {
  const t = useTranslations("COOCard")
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition relative my-4"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <CldImage
          src="Picture4_cjuewq" // <-- replace with Cloudinary public ID
          alt="Shipping Docks Background"
          width="1600"
          height="600"
          crop="fill"
          gravity="center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" /> {/* dark overlay */}
      </div>

      {/* Content */}
      <div className="relative p-8 flex flex-col md:flex-row gap-8 z-10">
        {/* Portrait */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative w-40 h-40 rounded-xl overflow-hidden shadow-md mx-auto md:mx-0 border-4 border-white"
        >
          <CldImage
            src="IMG_20250919_200848_kox1y2" // <-- replace with Cloudinary public ID
            alt="Salah Allam"
            width="300"
            height="300"
            crop="fill"
            gravity="face"
            className="rounded-xl object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 text-white">
          <h3 className="text-2xl md:text-3xl font-bold">
            {t("name")}
          </h3>
          <p className="mt-4 leading-relaxed">
            {t("as")} <span className="font-semibold">{t("span")}</span> {t("and")}
            <span className="font-semibold">
              {t("span2")}
              </span>

          </p>

          {/* Key Contributions */}
          <ul className="mt-6 space-y-4">
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-3"
            >
              <div className="w-10 h-8 flex items-center justify-center rounded-full bg-blue-700">
                <TruckIcon className="w-6 h-6 text-white" />
              </div>
              <p>
                <span className="font-semibold">{t("point")}</span> {t("pointdesc")}
              </p>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-3"
            >
              <div className="w-10 h-8 flex items-center justify-center rounded-full bg-blue-700">
                <ScaleIcon className="w-6 h-6 text-white" />
              </div>
              <p>
                <span className="font-semibold">{t("point2")}</span> 
                {t("pointdesc2")}
              </p>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700">
                <GlobeAltIcon className="w-6 h-6 text-white" />
              </div>
              <p>
                <span className="font-semibold">{t("point3")}</span> {t("pointdesc3")}
              </p>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
