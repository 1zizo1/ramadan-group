"use client";

import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

export default function ContactChannels() {
  const t = useTranslations("Channels");
  const contactChannels = Object.values(t.raw("contactChannels"));

  const iconMap = {
    EnvelopeIcon,
    PhoneIcon,
    ChatBubbleLeftRightIcon,
  };

  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800"
        >
         {t("title")}
        </motion.h2>
        <p className="mt-4 text-center text-gray-600">
         {t("desc")}
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactChannels.map((channel, i) => {
            const Icon = iconMap[channel.icon]; // get the actual component
            return (
              <motion.div
                key={channel.title}
                className="flex flex-col items-center text-center bg-gray-50 rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Icon */}
                {Icon && <Icon className="w-12 h-12 text-yellow-600 mb-4" />}

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {channel.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600">{channel.description}</p>

                {/* Action */}
                <a
                  href={channel.link}
                  className="mt-6 px-5 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition font-medium"
                >
                  {channel.action}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
