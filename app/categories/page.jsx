import Image from "next/image";
import hamburger from "@/assets/hamburger.png";

export default function Categories() {
  return (
    <section className="container">
      <h1>Pick a Category...</h1>
      <div className="search-box">
        <a href="/results">
          <div className="cards">
            <Image src={hamburger} width={100} alt="hamburger" />
            <h2>Burgers</h2>
          </div>
        </a>
      </div>
    </section>
  );
}
