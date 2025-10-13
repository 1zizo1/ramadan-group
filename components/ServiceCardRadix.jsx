"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import Image from "next/image";

export function ServiceCardRadix({
  title,
  image,
}) {
  return (
    <HoverCard.Root>
      {/* Trigger */}
      <HoverCard.Trigger asChild>
        <div className="group cursor-pointer rounded-xl overflow-hidden shadow-lg">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </HoverCard.Trigger>

      {/* Content */}
      <HoverCard.Portal>
        <HoverCard.Content
          className="bg-black/90 text-white p-4 rounded-xl w-64 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out"
          sideOffset={12}
        >
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-gray-300">
            High-quality service with professional expertise.
          </p>
          <button className="mt-3 bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-400 transition">
            Order Now
          </button>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
