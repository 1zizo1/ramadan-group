"use client";

import { motion } from "framer-motion";

/**
 * Responsive Logistics Flow Component
 * - Mobile: vertical timeline
 * - Desktop: horizontal flow
 * - Animated with framer-motion
 */
export default function LogisticsFlow({
  t,
  icons = [],
  dir = "ltr",
}) {
  const isRTL = dir === "rtl";
  const steps = Object.values(t.raw("steps"));

  return (
    <section dir={dir} className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {t("Title")}
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{t("Desc")}</p>
        </div>

        {/* Desktop (horizontal) */}
        <div className="hidden md:flex justify-between items-start relative">
          {/* line */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 z-0" />

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => {
              const Icon = icons[i] || null;
              return (
                <motion.div
                  key={i}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  {/* circle */}
                  <div className="bg-yellow-500 w-12 h-16 rounded-full flex items-center justify-center shadow-lg ring-8 ring-yellow-100 z-20">
                    {Icon ? (
                      <Icon className="w-6 h-6 text-white" />
                    ) : (
                      <span className="text-white font-bold">{i + 1}</span>
                    )}
                  </div>

                  {/* card (equal height enforced) */}
                  <div className="mt-6 w-full h-full">
                    <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg hover:-translate-y-1 transition h-full flex flex-col justify-between">
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile (vertical) */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200" />
          <ol className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.Icon || null;
              return (
                <motion.li
                  key={i}
                  className="relative pl-12"
                  initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  {/* dot */}
                  <span className="absolute left-0 top-1 bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-yellow-100">
                    {Icon ? (
                      <Icon className="w-4 h-4 text-white" />
                    ) : (
                      <span className="text-xs text-white font-bold">
                        {i + 1}
                      </span>
                    )}
                  </span>

                  {/* content */}
                  <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
