"use client";

import TradeRoutes from "@/components/ui/TradeRoutes";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

export default function GlobalHero() {
    const t = useTranslations("GlobalHero")
    return (
        <section className="relative h-[90vh] flex items-center justify-center  overflow-hidden">
            {/* Background World Map */}
            <div className="absolute inset-0 -z-10 opacity-80">
                <CldImage
                    src="61772_ofucox" // replace with Cloudinary map image
                    alt="World Trade Routes"
                    width="2000"
                    height="1000"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay trade routes (SVG) */}
            <TradeRoutes />
            {/* Hero Content */}
            <div className="relative text-center text-black px-6">
                <motion.h1
                    className="text-3xl md:text-5xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {t("title")}
                </motion.h1>

                <motion.p
                    className="text-sm md:text-lg max-w-xl mx-auto mb-6 text-black/80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                 {t("desc")}  
                </motion.p>

                <motion.a
                    href="#why"
                    className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                   {t("btn")}
                </motion.a>
            </div>
        </section>
    );
}
