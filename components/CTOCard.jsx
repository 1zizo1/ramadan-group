"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { CloudIcon, CpuChipIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const icons = [
  <CloudIcon className="w-8 h-6" />,
  <CpuChipIcon className="w-8 h-6" />,
  <UsersIcon className="w-8 h-6" />,
];

export default function CTOCard() {
  const t = useTranslations("CTOCard");
  const Members = Object.values(t.raw("members"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto mt-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition"
    >
      {/* Header */}
      <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-700 flex items-center justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4 drop-shadow-lg">
          {t("name")}
        </h3>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col md:flex-row gap-8">
        {/* Portrait */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-40 h-40 rounded-xl overflow-hidden shadow-md mx-auto md:mx-0 "
        >
          <CldImage
            src="IMG_20250919_200802_nnbllm" // <-- Cloudinary public ID
            alt="Ahmed Abdelaziz"
            width="300"
            height="300"
            crop="fill"
            gravity="face"
            className="rounded-xl object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <p className="text-gray-700 leading-relaxed text-lg">
            {t("at")}
            <span className="font-semibold">{t("span")}</span> {t("of")}
            <span className="font-semibold">{t("span2")}</span>
            {t("desc")}
          </p>

          {/* Key Contributions */}
          <ul className="mt-6 space-y-6">
            {Members.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-8 flex items-center justify-center rounded-full text-white shadow-md bg-blue-700"
                >
                  {icons[i]}
                </motion.div>
                <p>
                  <span className="font-semibold">{item.title}:</span>{" "}
                  {item.desc}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
