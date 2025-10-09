import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import type { LatLngTuple } from "leaflet"

import "leaflet/dist/leaflet.css"

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
//   iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
//   shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
// })
const customIcon = new L.Icon({
  iconUrl: "/marker-icon.png",
  iconSize: [64, 64],
  iconAnchor: [32, 64],
})

const supplyCenters: { name: string; position: LatLngTuple }[] = [
  { name: "Київ", position: [50.45, 30.52] },
  { name: "Дніпро", position: [48.45, 34.98] },
  { name: "Львів", position: [49.84, 24.03] },
]

export const SupplyMap = () => {
  return (
    <div style={{ height: "500px", width: "100%", maxWidth: "900px", margin: "0 auto" }}>
      <MapContainer center={[49.0, 32.0]} zoom={6} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {supplyCenters.map((center, idx) => (
          <Marker key={idx} position={center.position} icon={customIcon}>
            <Popup>{center.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
