"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
    siteLocations: [
      {
        name: "UCLA Mattel Children's Hospital, Dr Rajaraman",
        position: [34.0668, -118.4452] as [number, number],
      },
      {
        name: "Children's Hospital Colorado, Dr Demarest",
        position: [39.7424, -104.8375] as [number, number],
      },
      {
        name: "Boston Children's Hospital, Dr Olson",
        position: [42.3368, -71.1053] as [number, number],
      },
      {
        name: "New York University, Dr Price",
        position: [40.7420, -73.9748] as [number, number],
      },
      {
        name: "Cincinnati Children's Hospital Medical Center, Dr Standridge",
        position: [39.1413, -84.5018] as [number, number],
      },
      {
        name: "The Cleveland Clinic, Dr Pestana-Knight",
        position: [41.5036, -81.6200] as [number, number],
      },
      {
        name: "Children's Hospital of Philadelphia, Dr Marsh",
        position: [39.9496, -75.1936] as [number, number],
      },
      {
        name: "Baylor College of Medicine, Dr Suter",
        position: [29.7092, -95.3982] as [number, number],
      },
    ],
  },
  {
    name: "Italy",
    flag: "/flags/Italy.png",
    sites: 4,
    position: [41.8719, 12.5674] as [number, number],
    zoom: 5,
    siteLocations: [
      {
        name: "Azienda Ospedaliero-Universitaria Meyer, Dr Guerrini",
        position: [43.7970, 11.2532] as [number, number],
      },
      {
        name: "Fondazione Policlinico Universitario A Gemelli, Dr Battaglia",
        position: [41.9334, 12.4292] as [number, number],
      },
      {
        name: "Ospedale Pediatrico Bambino Gesù, Dr Specchio",
        position: [41.9002, 12.4665] as [number, number],
      },
      {
        name: "Azienda Ospedaliera Universitaria Integrata di Verona, Dr Darra",
        position: [45.4036, 10.9990] as [number, number],
      },
    ],
  },
  {
    name: "Canada",
    flag: "/flags/Canada.png",
    sites: 2,
    position: [56.1304, -106.3468] as [number, number],
    zoom: 3,
    siteLocations: [
      {
        name: "Alberta Children's Hospital, Dr Appendino",
        position: [51.0756, -114.1466] as [number, number],
      },
      {
        name: "The Hospital for Sick Children, Dr Donner",
        position: [43.6575, -79.3888] as [number, number],
      },
    ],
  },
  {
    name: "Spain",
    flag: "/flags/Spain.png",
    sites: 3,
    position: [40.4637, -3.7492] as [number, number],
    zoom: 5,
    siteLocations: [
      {
        name: "Hospital Infantil Universitario Niño Jesús, Dr Alguacil",
        position: [40.4213, -3.6779] as [number, number],
      },
      {
        name: "Ruber Internacional Hospital, Dr Gil-Nagel",
        position: [40.4583, -3.6852] as [number, number],
      },
      {
        name: "Hospital Universitario Vithas Madrid, Dr Aledo-Serrano",
        position: [40.4399, -3.6944] as [number, number],
      },
    ],
  },
  {
    name: "France",
    flag: "/flags/France.png",
    sites: 1,
    position: [46.2276, 2.2137] as [number, number],
    zoom: 5,
    siteLocations: [
      {
        name: "Hôpital Necker-Enfants Malades, Dr Bahi-Buisson",
        position: [48.8425, 2.3150] as [number, number],
      },
    ],
  },
  {
    name: "UAE",
    flag: "/flags/UAE.png",
    sites: 1,
    position: [23.4241, 53.8478] as [number, number],
    zoom: 6,
    siteLocations: [
      {
        name: "Mediclinic / High Hopes, Dr Philip",
        position: [25.2285, 55.3273] as [number, number],
      },
    ],
  },
  {
    name: "Germany",
    flag: "/flags/Germany.png",
    sites: 2,
    position: [51.1657, 10.4515] as [number, number],
    zoom: 5,
    siteLocations: [
      {
        name: "DRK Berlin - Epilepsiezentrum, Dr Panzer",
        position: [52.5034, 13.3311] as [number, number],
      },
      {
        name: "Schön Klinik Vogtareuth, Dr Kluger",
        position: [47.9465, 12.1811] as [number, number],
      },
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

      // @ts-expect-error Leaflet exposes this on the prototype at runtime.
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
      });
    })();
  }, []);

  // Fit the map to all sites for the selected country.
  useEffect(() => {
    if (!mapRef.current || !activeCountry) return;

    const sitePositions = activeCountry.siteLocations.map((site) => site.position);

    if (sitePositions.length === 1) {
      mapRef.current.flyTo(sitePositions[0], Math.max(activeCountry.zoom, 8), {
        duration: 1.2,
      });
      return;
    }

    mapRef.current.fitBounds(sitePositions, {
      padding: [40, 40],
      maxZoom: 8,
      animate: true,
      duration: 1.2,
    });
  }, [activeCountry]);

  const mapKey = useMemo(() => "candid-map", []);

  return (
    <section id="location" className="px-6 md:px-20 py-16 md:py-28 bg-white scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f95bf6] via-[#532cf9] to-[#03f7eb] bg-clip-text text-transparent">
          Where are our study sites located?
        </h2>

        <p className="mt-3 text-gray-500">
          Overall, CANDID involves 21 clinical centers from 7 countries
        </p>

        {/* COUNTRY BUTTONS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
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
            className="h-[300px] sm:h-[350px] md:h-[400px] w-full"
            ref={mapRef}
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

            {activeCountry
              ? activeCountry.siteLocations.map((site) => (
                  <Marker key={site.name} position={site.position} />
                ))
              : countries.map((country) => (
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:top-6 md:right-6 md:left-auto md:translate-x-0 z-[1000]">
              <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-5 w-[90vw] max-w-[420px] border border-gray-100 max-h-[60vh] overflow-y-auto">
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
                  {activeCountry.siteLocations.map((site) => (
                    <li key={site.name}>• {site.name}</li>
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
