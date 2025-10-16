"use client";

import { motion } from "framer-motion";
import { GlobeAltIcon, ShieldCheckIcon, UsersIcon } from "@heroicons/react/24/outline";
import { TruckIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

// Icons array
const servicesIcons = [GlobeAltIcon, TruckIcon, ShieldCheckIcon, UsersIcon];

// Service Card Component
const ServiceCard = ({ service }) => {
  const Icon = service.icon; // ✅ Capitalized for React
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="group bg-white rounded-2xl shadow-md p-8 border border-gray-100 
                 hover:border-blue-400 hover:shadow-blue-200/50 
                 transition cursor-pointer relative overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 mb-6 group-hover:bg-blue-700 transition">
        <Icon className="w-8 h-8 text-blue-700 group-hover:text-white transition" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">{service.description}</p>

      {/* Decorative hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-blue-400 to-blue-200 transition" />
    </motion.div>
  );
};

// Main Component
export default function WhatWeDo() {
  const t = useTranslations("WhatWeDo");

  // Get translations from i18n JSON
  const bullets = Object.values(t.raw("services"));

  // Combine icons with translations
  const localizedServices = servicesIcons.map((Icon, i) => ({
    icon: Icon,
    title: bullets[i]?.title || "",
    description: bullets[i]?.description || "",
  }));

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          {t("Title")}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          {t("desc")}
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {localizedServices.map((service, i) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
