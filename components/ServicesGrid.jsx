"use client";

import { assets } from "@/assets/assets";
import { ServiceCardOverlay } from "./ServiceCardOverlay";
import { motion } from "framer-motion";

const services = [
  { title: "General & Private Contracting", image: assets.dock.id },
  { title: "Public Cleaning Services", image: assets.ships.id },
  { title: "Commercial Agencies", image: assets.logs.id },
];

export default function ServicesGrid() {
  return (
    <section className="w-full h-screen px-4 md:px-8 lg:px-16">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 gap-6 h-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Big Image (left side, spans 2 rows) */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="lg:row-span-2"
        >
          <ServiceCardOverlay {...services[0]} className="h-full" />
        </motion.div>

        {/* Right side → two stacked cards */}
        {services.slice(1).map((service, idx) => (
          <motion.div
            key={idx}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="flex"
          >
            <ServiceCardOverlay {...service} className="h-full w-full" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
