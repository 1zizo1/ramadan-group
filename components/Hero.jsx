"use client";
import { Button } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import TrueFocus from "@/components/TrueFocus";
import { CldImage } from "next-cloudinary";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <CldImage
        src="Picture1_dnxzec"
        width="6600"
        height="3713"
        alt="Ramadan Group Hero"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-blue-400 font-semibold uppercase tracking-wide mb-3">
            {t("name")}
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
            <TrueFocus
              text={t("slogan")}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          <p className="mt-4 text-gray-200 text-lg italic">{t("subtitle")}</p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <Button
              size="3"
              style={{
                backgroundColor: "#BA3030",
                color: "white",
                fontWeight: 700,
              }}
              className="hover:scale-105 transition"
            >
              {t("button")}
            </Button>

            <Button
              size="3"
              variant="soft"
              style={{
                backgroundColor: "transparent",
                border: "2px solid white",
                color: "white",
              }}
              className="hover:bg-white/10 hover:scale-105 transition"
            >
              {t("button2")}
            </Button>
          </div>
        </div>

        {/* Right: Logo/Visual */}
        <div className="flex justify-center md:justify-end ">
          <CldImage
            src="logo_1_-0001_2_wztort"
            width="2294"
            height="2294"
            alt="Company Logo"
            className="w-2/3 md:w-1/2 opacity-90 hover:opacity-100 hover:scale-110 transition"
          />
        </div>
      </div>
    </section>
  );
}
