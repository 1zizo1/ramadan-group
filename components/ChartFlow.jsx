"use client";

import LogisticsFlow from "@/components/ui/chart";
import {
  TruckIcon,
  ClipboardIcon,
  CubeIcon,
  DocumentIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

export default function LogisticsSection() {
  const steps = [
    {
      title: "Sourcing & Procurement",
      desc: "Identify reliable suppliers and align specs to market demand.",
      Icon: ClipboardIcon,
    },
    {
      title: "Quality Control & Packaging",
      desc: "Inspect, grade, and package to meet international standards.",
      Icon: CubeIcon,
    },
    {
      title: "Documentation",
      desc: "Prepare invoices, certificates, and compliance paperwork.",
      Icon: DocumentIcon,
    },
    {
      title: "Shipping & Customs",
      desc: "Book freight, clear customs, and track shipments end-to-end.",
      Icon: TruckIcon,
    },
    {
      title: "Delivery & Support",
      desc: "On-time delivery with post-delivery support and feedback loop.",
      Icon: CheckCircleIcon,
    },
  ];
  const t = useTranslations("Logistics")
  const icons = [
    TruckIcon, ClipboardIcon, CubeIcon, DocumentIcon, CheckCircleIcon,
  ];

  return <LogisticsFlow  t={t} icons={icons} dir="ltr" />;
}
