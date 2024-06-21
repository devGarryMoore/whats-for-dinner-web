import Image from "next/image";
import map from "@/assets/map.png";

export default function HomePage() {
  const heading = "What's For Dinner";
  return (
    <div className="container">
      <div className="search-box">
        <h1>{heading}</h1>
        <form action="">
          <label htmlFor="adsress">Enter your location...</label>
          <input type="text" name="address" id="address" />
          <span className="loc-link">
            <Image src={map} width={25} alt="map icon" />
            <a href="/categories">Use Current Location</a>
          </span>
        </form>
      </div>
    </div>
  );
}
