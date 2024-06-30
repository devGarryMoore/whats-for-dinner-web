"use client";

import Categories from "./components/categories";
import Location from "./components/location";
import React, { useState } from "react";

export default function HomePage() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState(false);
  //In the process of saving the category in state
  const [category, setCategory] = useState(null);

  const handleLocationUpdate = (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);
    setLocation(true);
  };

  return (
    <>
      {!location && <Location onLocationUpdate={handleLocationUpdate} />}
      {location && (
        <>
          <p>
            Latitude: {latitude}, Longitude: {longitude}
          </p>
          <Categories />
        </>
      )}
    </>
  );
}

//Todo
//Have the categories component be hidden until the user gets their location
//Hide the lcation component after the user gets their location
