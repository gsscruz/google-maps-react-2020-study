import React from "react";
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
      >
        <Marker
          position={center}
        />
      </GoogleMap>
    </div>)
}
export default App
