"use client";

import { Card, Inset, Text, Box } from "@radix-ui/themes";
import { CldImage } from "next-cloudinary";
import { BackpackIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Services() {
 const t = useTranslations("homeService")
  const bullets = Object.values(t.raw("services"));

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-14">
        <p className="text-amber-500 uppercase tracking-wide text-sm font-semibold">
          {t("title")}

        </p>
        <h2 className="text-4xl font-extrabold text-gray-900">
          {t("high")}
        </h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          {t("desc")}
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {bullets.map((s, i) => (
          <Card
            key={i}
            className="overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-500 hover:-translate-y-2 bg-white"
          >
            {/* Image */}
            <Inset clip="padding-box" side="top" pb="current">
              <CldImage
                src={s.image}
                alt={s.title}
                width={s.imgW}
                height={s.imgH}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: 180,
                }}
                className="rounded-t-xl"
              />
            </Inset>

            {/* Content */}
            <Box p="2" className="flex flex-col flex-grow">
              <Text
                as="h3"
                size="5"
                className="font-semibold mb-2 text-gray-900"
              >
                {s.title}
              </Text>
              <Text as="p" size="3" color="gray" className="mb-6">
                {s.desc}
              </Text>

              {/* Motion Button */}
            </Box>
          </Card>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
        >
          <BackpackIcon />
          {t("btn")}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
        >
          <PaperPlaneIcon />
          {t("btn2")}
        </motion.button>
      </div>
    </section>
  );
}
