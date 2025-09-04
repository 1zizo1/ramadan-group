import { assets } from "@/assets/assets";
import { ServiceCardOverlay } from "./ServiceCardOverlay";
// import { ServiceCardRadix } from "./ServiceCardRadix"; // optional


const services = [
  { title: "General & Private Contracting", image: assets.dock.id},
  { title: "Public Cleaning Services", image: assets.ships.id },
  { title: "Commercial Agencies", image:assets.logs.id },
];

export default function ServicesGrid() {
  return (
    <section className="w-full h-screen"> {/* Full section height */}
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-6 h-full">
        {/* Big Image on top - spans 2 cols but only 1 row */}
        <div className="lg:col-span-2">
          <ServiceCardOverlay {...services[0]} className="h-full rounded-xl" />
        </div>

        {/* Two small ones side by side - same row height */}
        <ServiceCardOverlay {...services[1]} className="h-full rounded-xl" />
        <ServiceCardOverlay {...services[2]} className="h-full rounded-xl" />
      </div>
    </section>
  );
}