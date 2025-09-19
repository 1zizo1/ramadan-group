"use client";

import { motion } from "framer-motion";

export default function Message() {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      {/* Background image (can replace with cldimg) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold italic leading-relaxed"
        >
          “At Ramadan Group, we believe that trust, innovation, and global
          partnerships are the foundation for lasting success.”
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-lg text-gray-300"
        >
          — The Ramadan Group Team
        </motion.p>
      </div>
    </section>
  );
}
