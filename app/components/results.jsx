export default function Results({ place, handleTryAgain }) {
  const pref = place.photos[0]?.prefix;
  const suff = place.photos[0]?.suffix;
  const imgURL = `${pref}200x200${suff}`;

  return (
    <div className="search-box">
      <div className="details">
        <p>{place.name}</p>
        <img src={imgURL} alt={place.name} />
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
          <button className="btn" onClick={handleTryAgain}>
            Try Again
          </button>
          <button className="btn">Directions</button>
        </div>
      </div>
    </div>
  );
}
