"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CldImage } from "next-cloudinary";

export default function ProductsSection({
  titleKey = "title",
  data = [],
  baseUrl = "/products",
  textColor = "text-blue-700",
}) {
  const t = useTranslations("mainProducts");

  return (
    <main>
      <div className="container mx-auto py-12 px-6">
     
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold text-center mb-10 ${textColor}`}
        >
          {t(titleKey)}
        </motion.h1>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Link
                href={`${baseUrl}/${product.slug}`}
                className={`group  rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition `}
              >
                <div className="relative h-56 w-full">
                  <CldImage
                    src={product.image}
                    alt={t(`${product.slug}.name`)}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-5">
                  <h2 className={`text-2xl font-semibold mb-2 ${textColor}`}>
                    {t(`${product.slug}.name`)}
                  </h2>
                  <p className="text-gray-700">{t(`${product.slug}.short`)}</p>
                </div>

                <div className="flex justify-center">
                  <motion.a
                    href={`${baseUrl}/${product.slug}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block mt-4 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition"
                  >
                    {t("btn")}
                  </motion.a>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
