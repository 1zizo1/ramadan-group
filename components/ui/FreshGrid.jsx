"use client";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

const vegetables = [
  {
    id: 1,
    name: "frozen corps",
    img: "top-view-arrangement-frozen-food_hwieb6",
  },
  {
    id: 2,
    name: "Vegetables",
    img: "red-fresh-tomatoes-gathered-into-cardboaard-boxes-purchasing_fv787q",
  },
  { id: 3, name: "furits", img: "dbe79f27-59d9-4adb-af04-9ea210f2c303_fvmeig" },
  { id: 4, name: "lights", img: "IMG_5965.HEIC_1_vtsuzv" },
  { id: 5, name: "grains & legumes", img: "2150170250_d0bdvx" },
  { id: 6, name: "Dates", img: "85_bczduo" },
];

export default function FreshGrid() {
    const t = useTranslations("FreshGrid")

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-500">
         {t("title")}
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
         {t("desc")}
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        }}
      >
        {vegetables.map((veg) => (
          <motion.div
            key={veg.id}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden cursor-pointer"
          >
            <CldImage
              src={veg.img}
              alt={veg.name}
              width="300"
              height="300"
              className="w-full h-32 sm:h-40 md:h-48 object-cover"
            />
            <div className="p-3 text-center">
              <p className="text-sm md:text-base font-medium text-gray-800">
                {veg.name}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
