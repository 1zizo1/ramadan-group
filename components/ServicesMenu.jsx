"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import * as Dialog from "@radix-ui/react-dialog";
import { Briefcase, Building2, Package, Users, X } from "lucide-react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

const services = [
  {
    icon: <Package className="w-5 h-5 text-yellow-600" />,
  },

  {
    icon: <Briefcase className="w-5 h-5 text-yellow-600" />,
  },
  {
    icon: <Building2 className="w-5 h-5 text-yellow-600" />,
  },
  {
    icon: <Package className="w-5 h-5 text-yellow-600" />,
  },
  {
    icon: <Briefcase className="w-5 h-5 text-yellow-600" />,
  },
  {
    icon: <Users className="w-5 h-5 text-yellow-600" />,
  },
  {
    icon: <Building2 className="w-5 h-5 text-yellow-600" />,
  },
];

export default function ServicesMenu() {
  const t = useTranslations("NavService");

  return (
    <div className="">
      {/* Desktop HoverCard */}
      <div className="hidden md:block z-50 ">
        <HoverCard.Root openDelay={200}>
          <HoverCard.Trigger asChild>
            <Link
              href="/services"
              className="flex justify-center items-center text-gray-700 font-medium hover:text-yellow-500 transition"
            >
              {t("services")} <ChevronDownIcon />
            </Link>
          </HoverCard.Trigger>

          <HoverCard.Content
            side="bottom"
            align="center"
            className="w-[900px] bg-white shadow-xl rounded-2xl overflow-hidden mt-3"
          >
            <ServicesContent />
          </HoverCard.Content>
        </HoverCard.Root>
      </div>

      {/* Mobile Dialog */}
      <div className="md:hidden flex items-start">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Link
              href="/services"
              className="self-start text-gray-700 font-medium hover:text-yellow-500 transition"
            >
              {t("services")}
            </Link>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed inset-0 bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <Dialog.Title className="text-xl font-bold">
                  {t("OurServices")}
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <X className="w-6 h-6" />
                  </button>
                </Dialog.Close>
              </div>
              <ServicesContent />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}

function ServicesContent() {
  const t = useTranslations("NavService");
  const bullets = Object.values(t.raw("members"));

  return (
    <div className="grid md:grid-cols-3">
      {/* Left side (services grid) */}
      <div className="grid grid-cols-2 col-span-2 gap-6 p-6">
        {bullets.map((bullet, i) => (
          <div key={i} className="flex items-start gap-3">
            {/* Pick an icon from services by index */}
            <div className="p-2 bg-yellow-100 rounded-full">
              {services[i % services.length].icon}
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">{bullet.title}</h3>
              <p className="text-sm text-gray-600">{bullet.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right side (image + CTA) */}
      <div className="relative hidden md:block">
        <CldImage
          src="Picture5_nqovvi"
          alt="cintainers"
          width="6600"
          height="3713"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-6 text-white">
          <h2 className="text-lg font-bold">{t("solgn")}</h2>
          <Link
            href="/services"
            className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg"
          >
            {t("btn")}
          </Link>
        </div>
      </div>
    </div>
  );
}
