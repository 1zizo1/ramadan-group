"use client";

import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  TruckIcon,          // ✅ Available in @heroicons/react/24/solid, not outline
  ShieldCheckIcon,
  UsersIcon,          // 👈 Use this instead of HandshakeIcon
} from "@heroicons/react/24/outline";


const services = [
  {
    title: "Import & Export",
    desc: "Seamless global trade routes connecting Egypt to worldwide markets.",
    icon: GlobeAltIcon,
  },
  {
    title: "Logistics",
    desc: "Efficient, reliable transport solutions across land, sea, and air.",
    icon: TruckIcon, // ✅ from solid
  },
  {
    title: "Quality Assurance",
    desc: "Strict compliance and verification to meet global standards.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Partnerships",
    desc: "Building lasting collaborations with trusted international partners.",
    icon: UsersIcon, // ✅ instead of Handshake
  },
];


// Reusable Card Component
const ServiceCard = ({ service, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="group bg-white rounded-2xl shadow-md p-8 border border-gray-100 
                 hover:border-yellow-400 hover:shadow-yellow-200/50 
                 transition cursor-pointer relative overflow-hidden"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-yellow-100 mb-6 group-hover:bg-yellow-500 transition">
        <service.icon className="w-8 h-8 text-yellow-600 group-hover:text-white transition" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
        {service.desc}
      </p>

      {/* Decorative hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-yellow-400 to-yellow-200 transition" />
    </motion.div>
  );
};

export default function WhatWeDo() {
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
          What We Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Simplifying global trade with trusted, transparent, and world-class
          solutions.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
