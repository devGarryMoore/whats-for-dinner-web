"use client";

import Categories from "./components/categories";
import Location from "./components/location";
import React, { useState, useEffect, useMemo } from "react";
import Results from "./components/results";
import { fetchDinnerPlaces } from "@/lib/dinner-places";

export default function HomePage() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState(false);
  const [category, setCategory] = useState(null);
  const [dinnerPlaces, setDinnerPlaces] = useState([]);

  useEffect(() => {
    if (latitude && longitude && category) {
      fetchDinnerPlaces(latitude, longitude, category).then((data) =>
        setDinnerPlaces(data)
      );
    }
  }, [latitude, longitude, category]);

  const handleLocationUpdate = (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);
    setLocation({ latitude, longitude });
  };

  const handleCategoryUpdate = (category) => {
    setCategory(category);
  };

  return (
    <>
      <p>
        Latitude: {latitude} Longitude: {longitude}
      </p>
      <p>Category Code: {category}</p>
      {!location && <Location onLocationUpdate={handleLocationUpdate} />}
      {location && !category && (
        <>
          <Categories onCategoryUpdate={handleCategoryUpdate} />
        </>
      )}
      {/* {category && <Results dinnerPlaces={dinnerPlaces} />} */}
      {category && (
        <div>
          {dinnerPlaces.length > 0 ? (
            dinnerPlaces.map((place, index) => (
              <div key={index}>
                <p>{place.name}</p>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </>
  );
}

//Code that is broken at the moment but might be needed later.
// const destructuredDinnerPlaces = useMemo(
//   () =>
//     dinnerPlaces.map(({ name, tel, website }) => ({
//       name,
//       tel,
//       website,
//     })),
//   [dinnerPlaces]
// );
