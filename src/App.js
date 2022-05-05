import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import styleGray from "./mapStyles";

import { formatRelative } from "date-fns";

// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";

// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";

import "@reach/combobox/styles.css";


const libraries = ["places"]

const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
}

const center = {
  lat: 43.653225,
  lng: -79.383186
}

const options = {
  styles: styleGray,
  disableDefaultUI: true,
  zoomControl: true
}
const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries
  });

  const [markers, setMarkers] = useState([])

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div>
      <h1>Practicing Maps
        <span role="img" aria-label="StarTreck Spock handsign"> 🖖 </span>
      </h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={(event) => {
          setMarkers((current) => [
            ...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date()
            }])
        }}
      >
        {markers.map((marker) => {
          return (
            <Marker
              key={marker.time}
              position={{

                lat: marker.lat,
                lng: marker.lng
              }}
              icon={{
                url: "/avatar-boy-male-5-svgrepo-com.svg",
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15)
              }}
            />
          )
        })}

      </GoogleMap>
    </div>
  )
}
export default App
