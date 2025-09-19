"use client";

import { motion } from "framer-motion";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

export default function BusinessInquiries() {
  return (
    <section className="relative py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl shadow-lg p-8 md:p-10 text-center"
        >
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <BriefcaseIcon className="w-12 h-12 text-white drop-shadow-md" />
          </div>

          {/* Text */}
          <h3 className="text-2xl md:text-3xl font-bold">
            Business Inquiries
          </h3>
          <p className="mt-3 text-lg md:text-xl font-medium">
            We reply to all inquiries within{" "}
            <span className="font-extrabold">24 hours</span>.
          </p>

          {/* CTA */}
          <a
            href="mailto:info@ramadangroup.com"
            className="inline-block mt-6 px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Send Inquiry
          </a>
        </motion.div>
      </div>
    </section>
  );
}
