"use client";

// 1. React
import { useState, useEffect } from "react";
// 3. Libs tierces
// ⚠️ VÉRIFIER : API react-leaflet v5 — syntaxe validée pour ^5.x
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// 5. Config
import { siteConfig } from "@/config/site.config";

// Coordonnées GPS de Dunkerque centre
const DUNKERQUE_COORDS = [51.0343, 2.3773];

/**
 * MapEmbed — Carte OpenStreetMap centrée sur Dunkerque
 * Chargé uniquement côté client via next/dynamic (ssr: false dans ContactSection).
 * Le garde isMounted évite l'erreur "getPane() is undefined" de Leaflet
 * lors de la double invocation React en mode développement.
 */
export default function MapEmbed() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div
        className="h-full w-full bg-neutral-100 animate-pulse rounded-xl"
        aria-hidden="true"
      />
    );
  }

  return (
    // Leaflet exige une hauteur explicite sur son conteneur — className seul
    // ne suffit pas à cause du rendu interne de react-leaflet.
    <div className="h-full w-full" style={{ minHeight: "16rem" }}>
      <MapContainer
        center={DUNKERQUE_COORDS}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        aria-label={`Carte de localisation de ${siteConfig.name} à ${siteConfig.city}`}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <CircleMarker
          center={DUNKERQUE_COORDS}
          radius={12}
          pathOptions={{
            color: "#c45c3a",
            fillColor: "#c45c3a",
            fillOpacity: 0.85,
            weight: 2,
          }}
        >
          <Popup>
            <strong>{siteConfig.name}</strong>
            <br />
            {siteConfig.city} ({siteConfig.zip})
          </Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}
