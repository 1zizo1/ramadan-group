"use client";

import { Card, Text, Flex } from "@radix-ui/themes";
import { motion } from "framer-motion";

export default function Cards({ t, icons = [] }) {
  const members = Object.values(t.raw("members")) || [];

  // Animation presets
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-blue-700 text-sm font-semibold tracking-wide uppercase">
          {t("Title")}
        </p>
        <h1 className="text-2xl md:text-4xl font-extrabold mt-2 text-gray-900">
          {t("Subtitle")}
        </h1>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {members.map((member, index) => {
          const Icon = icons[index] || null;

          return (
            <motion.div key={index} variants={item}>
              <Card className="h-full bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
                <Flex
                  align="center"
                  direction="column"
                  gap="4"
                  className="h-full p-8 text-center"
                >
                  {/* Icon */}
                  <div className="rounded-full p-4 bg-blue-700/20 flex justify-center items-center transition-transform duration-300 group-hover:scale-105">
                    {Icon && <Icon className="w-7 h-7 text-blue-700" />}
                  </div>

                  {/* Text */}
                  <Flex direction="column" className="mt-4 space-y-2">
                    <Text
                      className="text-md font-bold text-gray-900"
                      as="div"
                    >
                      {member.title}
                    </Text>
                    <Text
                      className="text-gray-600 text-sm"
                      as="div"
                    >
                      {member.data}
                    </Text>
                    {member?.subData && (
                      <Text
                        className="text-gray-500 text-sm"
                        as="div"
                      >
                        {member.subData}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
