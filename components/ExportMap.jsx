"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { pins } from "@/assets/assets"; // your data
import { useTranslations } from "next-intl";

// Fix Leaflet's default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function FitBounds({ pins = [] }) {
  const map = useMap();
  useEffect(() => {
    if (!map || pins.length === 0) return;
    const group = L.featureGroup(pins.map((p) => L.marker([p.lat, p.lng])));
    map.fitBounds(group.getBounds().pad(0.2), { maxZoom: 5, animate: true });
  }, [map, pins]);
  return null;
}

export default function ExportMap({ center = [26.8206, 30.8025], zoom = 3 }) {
  const memoPins = useMemo(() => pins || [], []);
const t = useTranslations("ExportMap")
  if (!Array.isArray(memoPins) || memoPins.length === 0) {
    return (
      <div className="w-full text-center py-10">
        <p className="text-gray-500">{t("error")}</p>
      </div>
    );
  }

  return (
    <section className="max-w-3/4 mx-auto h-[70vh] my-4">
      <h1 className="text-3xl font-bold text-center my-8">
        {t("header")}
      </h1>

      <div className="mapwrap rounded-xl shadow-lg overflow-hidden h-full">
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />

          <FitBounds pins={memoPins} />

          {memoPins.map((p, i) => (
            <Marker key={i} position={[p.lat, p.lng]}>
              <Popup>
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm">{p.desc}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
