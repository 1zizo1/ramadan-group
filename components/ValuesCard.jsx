import { useTranslations } from "next-intl";
import ValuesGrid from "./Values";
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
        <p className="text-blue-700 my-2">{t("Title")}</p>
      <h1 className="capitalize mb-6">{t("Subtitle")}</h1>

      <ValuesGrid t={t} icons={icons} />
    </section>
  );
}
