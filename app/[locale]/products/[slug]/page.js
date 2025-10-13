"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { products } from "@/assets/assets";
import FreshGrid from "@/components/ui/FreshGrid";
import ProductCard from "@/components/ProductCard";
export default function ProductDetailPage() {
  const { slug } = useParams();
  const t = useTranslations("mainProducts");

  const product = products.find((p) => p.slug === slug);
  if (!product) return <p className="text-center py-20">Product not found</p>;

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main>
      <div className="container mx-auto py-12 px-6">
        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold text-center mb-10 text-blue-700"
        >
          {t(`${slug}.name`)}
        </motion.h1>

        {/* Main content section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Image with zoom-in effect */}
          <motion.div
            variants={zoomIn}
            className="relative w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg"
          >
            <CldImage
              src={product.image}
              alt={t(`${slug}.name`)}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            />
          </motion.div>

          {/* Description fade-up */}
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-lg text-gray-700 leading-relaxed text-center md:text-left"
          >
            {t(`${slug}.description`)}
          </motion.p>
        </motion.div>
      </div>
      <FreshGrid />
      <ProductCard
        t={{
          title: t(`${slug}.item.Title`),
          description: t(`${slug}.item.Desc`),
          btn: t(`${slug}.item.Button`)
        }}
        image={product.image}
      />

    </main>
  );
}
