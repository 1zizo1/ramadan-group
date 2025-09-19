"use client";

import { motion } from "framer-motion";

export default function TradeRoutes() {
  const routes = [
    { path: "M850,500 Q800,200 1300,250", color: "gold", duration: 6 },
    { path: "M850,500 Q750,500 900,600", color: "gold", duration: 7 },
    { path: "M850,500 Q600,600 500,700", color: "gold", duration: 5 },
    { path: "M850,500 Q900,650 1300,700", color: "gold", duration: 8 },
    { path: "M850,500 Q500,300 300,400", color: "gold", duration: 6.5 }, //amrica
    { path: "M850,500 Q750,350 800,300", color: "gold", duration: 5.5 },//amrica
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid meet"
    >
      {routes.map((route, i) => (
        <g key={i}>
          {/* Route line */}
          <motion.path
            d={route.path}
            stroke={route.color}
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2 + i * 0.3,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        </g>
      ))}
    </svg>
  );
}
