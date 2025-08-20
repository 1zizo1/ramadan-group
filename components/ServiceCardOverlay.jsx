"use client";

import Image from "next/image";

export function ServiceCardOverlay({
  title,
  image,
  className,
}) {
  return (
    <div 
    
    // className="overflow-hidden relative group cursor-pointer rounded-xl  shadow-lg ${}"
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-200 mt-2">
          High-quality service with professional expertise.
        </p>
        <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
          Order Now
        </button>
      </div>
    </div>
  );
}
