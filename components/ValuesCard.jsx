import { useTranslations } from "next-intl";
import ValuesGrid from "./Values";
import { motion } from "framer-motion";

import {
  CheckIcon,
  CheckCircledIcon,
  PersonIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";

export default function ValuesCard() {
  const t = useTranslations("values");
  const icons = [CheckIcon, CheckCircledIcon, GlobeIcon, PersonIcon];
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
       {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-2 text-center text-blue-500"
      >
        {t("Title")}
      </motion.h2>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 max-w-3xl mx-auto text-center text-gray-600"
      >
        <p>{t("Subtitle")}</p>
      </motion.div>

        

      <ValuesGrid t={t} icons={icons} />
    </section>
  );
}
