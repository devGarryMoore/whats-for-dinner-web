"use client";

import Categories from "./components/categories";
import Location from "./components/location";
import React, { useState } from "react";
import Results from "./components/results";

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

  const handleCategoryUpdate = (category) => {
    setCategory(category);
  };

  return (
    <>
      {!location && <Location onLocationUpdate={handleLocationUpdate} />}
      {location && !category && (
        <>
          <p>
            Latitude: {latitude}, Longitude: {longitude}
          </p>
          <Categories onCategoryUpdate={handleCategoryUpdate} />
        </>
      )}
      <p>
        Latitude: {latitude}, Longitude: {longitude}
      </p>
      <p>Category Code: {category}</p>
      {category && (
        <Results
          latitude={latitude}
          longitude={longitude}
          category={category}
        />
      )}
    </>
  );
}
