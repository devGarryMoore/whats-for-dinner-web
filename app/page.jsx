"use client";

import Categories from "./components/categories";
import Location from "./components/location";
import React, { useState, useEffect } from "react";
import { fetchDinnerPlaces } from "@/lib/dinner-places";
import Results from "./components/results";
import End from "./components/end";

export default function HomePage() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState(false);
  const [category, setCategory] = useState(null);
  const [dinnerPlaces, setDinnerPlaces] = useState([]);
  const [index, setIndex] = useState(0);
  const [viewedAll, setViewedAll] = useState(false);

  useEffect(() => {
    if (latitude && longitude && category) {
      fetchDinnerPlaces(latitude, longitude, category).then((data) => {
        setDinnerPlaces(data);
        setViewedAll(false);
      });
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

  const handleTryAgain = () => {
    setIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % dinnerPlaces.length;
      if (nextIndex === 0) {
        setViewedAll(true);
      }
      return nextIndex;
    });
  };

  return (
    <>
      {!location && <Location onLocationUpdate={handleLocationUpdate} />}
      {location && !category && (
        <>
          <Categories onCategoryUpdate={handleCategoryUpdate} />
        </>
      )}
      {category && (
        <div className="container">
          {dinnerPlaces.length > 0 && !viewedAll ? (
            <Results
              place={dinnerPlaces[index]}
              handleTryAgain={handleTryAgain}
            />
          ) : (
            <End />
          )}
        </div>
      )}
    </>
  );
}

//TODO
// 1. Create attribute page for images used from other sources.
// 2. Clean up application
// 3. Deploy application.
