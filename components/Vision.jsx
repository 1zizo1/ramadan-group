"use client";

import { Blockquote, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Vision() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  const t = useTranslations("Vision");
  const missionPoints = t.raw("MissionPoints");
  const visionPoints = t.raw("VisionPoints");
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-500"
      >
        {t("Title")}
      </motion.h2>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 max-w-3xl mx-auto text-center text-gray-600"
      >
        <p>{t("Intro")}</p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {/* Mission Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-6 w-full bg-gray-100 rounded-2xl hover:scale-105 shadow-md transition-all duration-400"
        >
          <Flex direction="column">
            <h3 className="font-bold mb-4 text-xl text-blue-500">
              {t("MissionTitle")}
            </h3>
            <ul className="space-y-4">
              {missionPoints.map((point, idx) => (
                <li key={idx} className="my-2">
                  <Blockquote>{point}</Blockquote>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-6 bg-blue-700 text-white px-5 py-2 rounded-md font-medium self-start hover:bg-blue-400 transition"
            >
              {t("Button")}
            </Link>
          </Flex>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="p-6 w-full bg-gray-100 rounded-2xl hover:scale-105 shadow-md transition-all duration-400"
        >
          <Flex direction="column">
            <h3 className="font-bold mb-4 text-xl text-blue-500">
              {t("VisionTitle")}
              
            </h3>
            <ul className="space-y-4">
              {visionPoints.map((point, idx) => (
                <li key={idx} className="my-2">
                  <Blockquote>{point}</Blockquote>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="mt-6 bg-blue-700 text-white px-5 py-2 rounded-md font-medium self-start hover:bg-blue-400 transition"
            >
              {t("Button")}
            </Link>
          </Flex>
        </motion.div>
      </div>
    </section>
  );
}
