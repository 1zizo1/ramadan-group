"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, BadgeCheck } from "lucide-react"; // optional icon set

const governanceItems = [
  {
    title: "Risk Management",
    description:
      "Proactive monitoring and mitigation strategies to safeguard trade operations and financial stability.",
    icon: ShieldCheck,
  },
  {
    title: "Contracts & Legal",
    description:
      "Comprehensive oversight of contracts, licensing, and regulatory compliance across global markets.",
    icon: FileText,
  },
  {
    title: "Quality Assurance",
    description:
      "Adherence to international standards, certifications, and inspection processes to ensure excellence.",
    icon: BadgeCheck,
  },
];

export default function GovernanceCompliance() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Governance & Compliance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {governanceItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <item.icon className="w-14 h-14 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
