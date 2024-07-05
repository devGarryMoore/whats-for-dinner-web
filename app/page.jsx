"use client";

import Categories from "./components/categories";
import Location from "./components/location";
import React, { useState, useEffect, useMemo } from "react";
import Results from "./components/results";
import { fetchDinnerPlaces } from "@/lib/dinner-places";
// import Image from "next/image";

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
        <div className="container">
          {dinnerPlaces.length > 0 ? (
            dinnerPlaces.map((place, index) => {
              const pref = place.photos[0]?.prefix;
              const suff = place.photos[0]?.suffix;
              const imgURL = `${pref}200x200${suff}`;
              return (
                <div key={index} className="search-box">
                  <div className="details">
                    <p>{place.name}</p>
                    <img src={imgURL} alt={place.name} />
                    <div>
                      <ul>
                        <li>{place.photos[0]?.prefix}</li>
                        <li>{place.location.formatted_address}</li>
                        <li>{place.hours.display}</li>
                        <li>{place.tel}</li>
                        <li>{place.website}</li>
                        <li>{place.rating}</li>
                        <li>{place.price}</li>
                      </ul>
                      <div>
                        <button className="btn">Try Again</button>
                        <button className="btn">Directions</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
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
