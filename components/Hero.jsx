"use client";
import { assets } from "@/assets/assets";
import { Button, Quote, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TrueFocus from "@/components/TrueFocus";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="h-[100vh] flex flex-col justify-center items-center text-center  text-white ">
      <Image src={assets.heroImg} className="absolute -z-10 top-0 h-[100vh]" />
      <div className="">
        <div className="flex items-center flex-col">
          <div className="min-w-1/2 p-18 m-2 ">
            <Text className="text-yellow-500 capitalize text-5xl">
              <TrueFocus
                text={t("slogan")}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </Text>
          </div>

          <div className="flex">
            <div className="z-10 text-white px-6 w-2/3 bg-gray-500/20 rounded-md m-2 p-2">
              <p className="text-sm text-yellow-400 font-semibold capitalize">
                ramadan group
              </p>

              <h1 className="text-3xl md:text-4xl font-bold leading-snug mt-2">
                {t("title")}
              </h1>

              <p className="text-gray-300 italic mt-3 text-base">
                {t("subtitle")}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <Button
                  size="3"
                  style={{
                    backgroundColor: "#facc15",
                    color: "black",
                    fontWeight: 700,
                  }}
                >
                  START NOW
                </Button>

                <Button
                  size="3"
                  variant="soft"
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid white",
                    color: "white",
                  }}
                >
                  Learn more
                </Button>
              </div>
            </div>

            <div className=" w-1/3 rounded-2xl flex items-center justify-center m-2">
              <Image
                src={assets.dLogo}
                className="w-1/2 opacity-80 hover:opacity-100 hover:scale-110 transition "
              />
            </div>
          </div>

          {/* <div className="absolute inset-0 bg-black/60" /> */}
        </div>
      </div>
      {/* <a href="/contact" className="px-6 py-3 bg-white text-blue-900 font-semibold rounded shadow hover:bg-gray-200">
         {t?.hero?.cta}
      </a> */}
    </section>
  );
}
