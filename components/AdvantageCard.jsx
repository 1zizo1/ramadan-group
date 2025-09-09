import React from "react";
import AdvantageSection from "./Advantage";
import { useTranslations } from "next-intl";
import AdvantageVideo from "./AdvantageVideo";
export default function AdvantageCard() {
  const t = useTranslations("Advantage");
  const img = "advantage_ojbs9o";
  return (
    <section>
      <AdvantageSection t={t} img={img} />
    </section>
  );
}
