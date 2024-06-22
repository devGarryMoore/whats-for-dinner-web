import Image from "next/image";
import hamburger from "@/assets/hamburger.png";

export default function ResultsPage() {
  return (
    <>
      <h1 className="heading">Results</h1>
      <div className="container">
        <div className="search-box">
          <div className="details">
            <div>
              <h2>Place name</h2>
              <Image src={hamburger} width={200} alt="placeholder" />
            </div>
            <div>
              <ul>
                <li>Detail 1</li>
                <li>Detail 2 etc</li>
              </ul>
            </div>
          </div>

          <div>
            <button className="btn">Try Again</button>
            <button className="btn">Directions</button>
          </div>
        </div>
      </div>
    </>
  );
}
