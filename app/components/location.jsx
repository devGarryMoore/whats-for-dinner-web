"use client";
import Image from "next/image";
import map from "@/assets/map.png";

export default function Location() {
  const heading = "What's For Dinner";

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
    alert(
      "Latitude: " +
        position.coords.latitude +
        "\nLongitude: " +
        position.coords.longitude
    );
    // You can also set these values in state to use them in your component
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
