'use client'

// ⚠️ VÉRIFIER : API react-leaflet v5 — confirme la syntaxe dans la doc officielle
// Ce composant est chargé dynamiquement (ssr: false) depuis ContactSection
// pour éviter l'erreur "window is not defined" de Leaflet côté serveur.
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { siteConfig } from '@/config/site.config'

// Coordonnées GPS de Lille
const LILLE_COORDS = [50.6292, 3.0573]

/**
 * MapEmbed — Carte OpenStreetMap centrée sur Lille
 * Chargé uniquement côté client via next/dynamic.
 */
export default function MapEmbed() {
  return (
    <MapContainer
      center={LILLE_COORDS}
      zoom={13}
      scrollWheelZoom={false}
      className="h-full w-full"
      aria-label={`Carte de localisation de ${siteConfig.name} à ${siteConfig.city}`}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CircleMarker
        center={LILLE_COORDS}
        radius={12}
        pathOptions={{
          color:       '#c45c3a',
          fillColor:   '#c45c3a',
          fillOpacity: 0.85,
          weight:      2,
        }}
      >
        <Popup>
          <strong>{siteConfig.name}</strong><br />
          {siteConfig.city} ({siteConfig.zip})
        </Popup>
      </CircleMarker>
    </MapContainer>
  )
}
