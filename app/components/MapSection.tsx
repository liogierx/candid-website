"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import Image from "next/image";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamic imports (important for Next.js)
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
);

const countries = [
  {
    name: "USA",
    flag: "/flags/USA.png",
    sites: 8,
    position: [37.0902, -95.7129] as [number, number],
    zoom: 5,
    cities: [
      "UCLA Mattel Children's Hospital, Dr Rajaraman",
      "Children's Hospital Colorado, Dr Demarest",
      "Boston Children's Hospital, Dr Olson",
      "New York University, Dr Price",
      "Cincinnati Children's Hospital Medical Center, Dr Standridge",
      "The Cleveland Clinic, Dr Pestana-Knight",
      "Children's Hospital of Philadelphia, Dr Marsh",
      "Baylor College of Medicine, Dr Suter",
    ],
  },
  {
    name: "Italy",
    flag: "/flags/Italy.png",
    sites: 4,
    position: [41.8719, 12.5674] as [number, number],
    zoom: 5,
    cities: [
      "Azienda Ospedaliero-Universitaria Meyer, Dr Guerrini",
      "Fondazione Policlinico Universitario A Gemelli, Dr Battaglia",
      "Ospedale Pediatrico Bambino Gesù, Dr Specchio",
      "Azienda Ospedaliera Universitaria Integrata di Verona, Dr Darra",
    ],
  },
  {
    name: "Canada",
    flag: "/flags/Canada.png",
    sites: 2,
    position: [56.1304, -106.3468] as [number, number],
    zoom: 3,
    cities: [
      "Alberta Children's Hospital, Dr Appendino",
      "The Hospital for Sick Children, Dr Donner",
    ],
  },
  {
    name: "Spain",
    flag: "/flags/Spain.png",
    sites: 3,
    position: [40.4637, -3.7492] as [number, number],
    zoom: 5,
    cities: [
      "Hospital Infantil Universitario Niño Jesús, Dr Alguacil",
      "Ruber Internacional Hospital, Dr Gil-Nagel",
      "Hospital Universitario Vithas Madrid, Dr Aledo-Serrano",
    ],
  },
  {
    name: "France",
    flag: "/flags/France.png",
    sites: 1,
    position: [46.2276, 2.2137] as [number, number],
    zoom: 5,
    cities: ["Hôpital Necker-Enfants Malades, Dr Bahi-Buisson"],
  },
  {
    name: "UAE",
    flag: "/flags/UAE.png",
    sites: 1,
    position: [23.4241, 53.8478] as [number, number],
    zoom: 6,
    cities: ["Mediclinic / High Hopes, Dr Philip"],
  },
  {
    name: "Germany",
    flag: "/flags/Germany.png",
    sites: 2,
    position: [51.1657, 10.4515] as [number, number],
    zoom: 5,
    cities: [
      "DRK Berlin - Epilepsiezentrum, Dr Panzer",
      "Schön Klinik Vogtareuth, Dr Kluger",
    ],
  },
];

export default function MapSection() {
  const [activeCountry, setActiveCountry] = useState<
    (typeof countries)[number] | null
  >(null);

  const mapRef = useRef<LeafletMap | null>(null);

  // Fix Leaflet default marker icons
  useEffect(() => {
    (async () => {
      const L = await import("leaflet");

      // @ts-ignore
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
      });
    })();
  }, []);

  // FlyTo animation
  useEffect(() => {
    if (!mapRef.current || !activeCountry) return;

    mapRef.current.flyTo(
      activeCountry.position,
      activeCountry.zoom,
      { duration: 1.2 }
    );
  }, [activeCountry]);

  const mapKey = useMemo(() => "candid-map", []);

  return (
    <section id="location" className="px-20 py-28 bg-white scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] bg-clip-text text-transparent">
          Where are our study sites located?
        </h2>

        <p className="mt-3 text-gray-500">
          Overall, CANDID involves 21 clinical centers from 7 countries
        </p>

        {/* COUNTRY BUTTONS */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {countries.map((country) => (
            <button
              key={country.name}
              onClick={() =>
                setActiveCountry(
                  activeCountry?.name === country.name ? null : country
                )
              }
              className={`p-5 rounded-2xl transition-all duration-300 border ${
                activeCountry?.name === country.name
                  ? "border-transparent bg-gradient-to-r from-[#f95bf610] via-[#532cf910] to-[#03f7eb10] shadow-md"
                  : "border-gray-200 hover:shadow-sm hover:border-[#532cf9]"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src={country.flag}
                    alt={`${country.name} flag`}
                    width={40}
                    height={28}
                    className="rounded-sm object-contain"
                  />
                  <span className="font-semibold text-gray-800">
                    {country.name}
                  </span>
                </div>
                <span className="text-gray-500">
                  {country.sites} sites
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* MAP */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-gray-200 shadow-md relative">
          <MapContainer
            key={mapKey}
            center={[50, -25]}
            zoom={3}
            scrollWheelZoom={false}
            className="h-[400px] w-full"
            ref={mapRef}
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

            {countries.map((country) => (
              <Marker
                key={country.name}
                position={country.position}
                eventHandlers={{
                  click: () =>
                    setActiveCountry(
                      activeCountry?.name === country.name ? null : country
                    ),
                }}
              />
            ))}
          </MapContainer>

          {/* FLOATING INFO CARD */}
          {activeCountry && (
            <div className="absolute top-6 right-6 z-[1000]">
              <div className="bg-white rounded-2xl shadow-2xl p-5 w-[380px] border border-gray-100">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-gray-800">
                    {activeCountry.name}
                  </h4>
                  <button
                    onClick={() => setActiveCountry(null)}
                    className="text-gray-400 hover:text-black text-sm"
                  >
                    ✕
                  </button>
                </div>

                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  {activeCountry.cities.map((city) => (
                    <li key={city}>• {city}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}