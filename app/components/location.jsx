"use client";
import Image from "next/image";
import map from "@/assets/map.png";
import { useState } from "react";

export default function Location(location) {
  const heading = "What's For Dinner";

  //saving the location in state
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // Function to fetch the current location
  const fetchCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Success callback
  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    location.onLocationUpdate(position.coords.latitude, position.coords.longitude);
  };

  // Error callback
  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  };

  return (
    <div className="container">
      <div className="search-box">
        <h1>{heading}</h1>
        <p>Where you at?</p>
        <button className="btn2" onClick={fetchCurrentLocation}>
          Use Current Location &nbsp;
          <Image src={map} width={24} alt="map icon" />
        </button>
      </div>
    </div>
  );
}

//TODO
//Autocomplete search bar for location:
{
  /* <label htmlFor="adsress">Enter your location...</label>
<input type="text" name="address" id="address" /> */
}
