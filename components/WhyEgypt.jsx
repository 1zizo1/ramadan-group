"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

export default function WhyEgypt() {
  const t = useTranslations("WhyEgypt")
  const stats = [
    { label: "Strategic Location", value: "Suez Canal" },
    { label: "Market Access", value: "Africa / Middle East / Europe" },
    { label: "Ports", value: "Alexandria, Damietta" },
    { label: "Logistics Hubs", value: "Cairo, Port Said" },
  ];

  return (
    <section className="py-12 px-4 md:px-12 lg:px-20 bg-white relative overflow-hidden" id="why">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Map visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100"
        >
          <CldImage
            src="pacific-centered-world-map-with-magnified-egypt-flag-map-egypt_292608-195_godsmw" // 👉 replace with your own map image
            alt="World map with Egypt trade access"
            width="1536"
            height="1024"
            className="object-cover w-full h-80 md:h-[420px] lg:h-[500px]"
          />

          {/* Animated arcs + hubs */}

        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-sm text-blue-700 font-semibold">{t("title")}</h3>

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
           {t("desc")}
          </h2>

          <p className="text-gray-600">
            {t("info")}
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                whileHover={{ y: -4 }}
              >
                <p className="text-xs text-gray-500">{s.label}</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {s.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-blue-700" />
              <p className="text-sm text-gray-600">
                {t("point")}
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-cyan-500" />
              <p className="text-sm text-gray-600">
                {t("point2")}
                
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              <p className="text-sm text-gray-600">
                {t("point3")}
                
              </p>
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-700 text-white rounded-md font-semibold shadow"
            >
             {t("btn")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
