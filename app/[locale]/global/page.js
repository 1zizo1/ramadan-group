"use client";

import ExpansionVision from "@/components/ExpansionVision";
import GlobalStandards from "@/components/GlobalStandards";
import LogisticsNetwork from "@/components/LogisticsNetwork";
import MiniCarousel from "@/components/MiniCarousel";
import GlobalHero from "@/components/ui/GlobalHero";
import WhyEgypt from "@/components/WhyEgypt";
import dynamic from "next/dynamic";

// Dynamically import your map
const ExportMap = dynamic(() => import("@/components/ExportMap"), { ssr: false });

export default function Global() {

    return (
        <main>
            <GlobalHero />
            <WhyEgypt/>
            <ExportMap />
            <MiniCarousel />
            <LogisticsNetwork />
            <GlobalStandards />
            <ExpansionVision />
        </main>
    );
}
