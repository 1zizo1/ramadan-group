"use client";
import { motion } from "framer-motion";
export default function Heading({ t }) {
  return (
    <div className="container mx-auto px-6 my-3">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-2 text-center text-blue-500"
      >
          {t("Title")}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 max-w-3xl mx-auto text-center text-gray-600"
      >
        <p>
          {t("Desc")}
        </p>
      </motion.div>
    </div>
  );
}
