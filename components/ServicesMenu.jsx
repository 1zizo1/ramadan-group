"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import * as Dialog from "@radix-ui/react-dialog";
import { Briefcase, Building2, Package, Users, X } from "lucide-react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { CldImage } from "next-cloudinary";


const services = [
  {
    title: "Customs clearance",
    description:
      "Fast and efficient customs clearance to facilitate the import and export of your goods.",
    icon: <Package className="w-5 h-5 text-yellow-600" />,
  },
  {
    title: "Public cleaning services",
    description:
      "Professional corporate cleaning services to ensure a clean and healthy work environment.",
    icon: <Users className="w-5 h-5 text-yellow-600" />,
  },
  {
    title: "Public tenders and private",
    description:
      "Efficiently manage and implement public and private tenders to ensure the best offers and results.",
    icon: <Briefcase className="w-5 h-5 text-yellow-600" />,
  },
  {
    title: "Import and export",
    description:
      "Import and export to facilitate business transactions efficiently and at the best prices.",
    icon: <Building2 className="w-5 h-5 text-yellow-600" />,
  },
  {
    title: "General Trade and Distribution",
    description:
      "Expand your business efficiently and provide products at the best prices.",
    icon: <Package className="w-5 h-5 text-yellow-600" />,
  },
  {
    title: "Business services",
    description:
      "Customized services to support growth, achieve goals, and expand.",
    icon: <Briefcase className="w-5 h-5 text-yellow-600" />,
  },
  {
    title: "Commercial agencies",
    description:
      "Obtain corporate agency rights to expand in local and international markets.",
    icon: <Users className="w-5 h-5 text-yellow-600" />,
  },
  {
    title: "General and specialized contracting",
    description:
      "Implementing public and private contracting projects and supplies with high quality and speed.",
    icon: <Building2 className="w-5 h-5 text-yellow-600" />,
  },
];

export default function ServicesMenu() {
  return (
    <div className="flex justify-center items-center">
      {/* Desktop HoverCard */}
      <div className="hidden md:block z-50 ">
        <HoverCard.Root openDelay={200}>
          <HoverCard.Trigger asChild>
           <Link href="/services" className="hover:text-yellow-500 flex items-center">
            Services <ChevronDownIcon/>
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
      <div className="md:hidden">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">
              Services
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed inset-0 bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <Dialog.Title className="text-xl font-bold">
                  Our Services
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
  return (
    <div className="grid md:grid-cols-3">
      {/* Left side (services grid) */}
      <div className="grid grid-cols-2 col-span-2 gap-6 p-6">
        {services.map((service, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="p-2 bg-yellow-100 rounded-full">{service.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
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
          <h2 className="text-lg font-bold">
            All the Services You Need in One Place.
          </h2>
          <button className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg">
            Get Your Service
          </button>
        </div>
      </div>
    </div>
  );
}


