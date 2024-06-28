import Image from "next/image";
import hamburger from "@/assets/hamburger.png";
import chicken from "@/assets/chicken.png";
import pizza from "@/assets/pizza.png";
import chinese from "@/assets/chinese.png";
import pub from "@/assets/pub.png";
import sushi from "@/assets/sushi.png";
import korean from "@/assets/korean.png";
import random from "@/assets/random.png";

export default function Categories() {
  return (
    <div>
      <h1 className="heading">Pick a category</h1>
      <section className="container">
        <div className="cards">
          <a href="/results">
            <Image src={hamburger} width={100} alt="hamburger" />
            <h2>Burgers</h2>
          </a>
        </div>
        <div className="cards">
          <a href="/results">
            <Image src={chicken} width={100} alt="chicken" />
            <h2>Chicken</h2>
          </a>
        </div>
        <div className="cards">
          <a href="/results">
            <Image src={pizza} width={100} alt="pizza" />
            <h2>Pizza</h2>
          </a>
        </div>
        <div className="cards">
          <a href="/results">
            <Image src={chinese} width={100} alt="chinese" />
            <h2>Chinese</h2>
          </a>
        </div>
        <div className="cards">
          <a href="/results">
            <Image src={pub} width={100} alt="pubs" />
            <h2>Pubs</h2>
          </a>
        </div>
        <div className="cards">
          <a href="/results">
            <Image src={sushi} width={100} alt="sushi" />
            <h2>Sushi</h2>
          </a>{" "}
        </div>
        <div className="cards">
          {" "}
          <a href="/results">
            <Image src={korean} width={100} alt="korean" />
            <h2>Korean</h2>
          </a>{" "}
        </div>
        <div className="cards">
          <a href="/results">
            <Image src={random} width={100} alt="random" />
            <h2>Random</h2>
          </a>
        </div>
      </section>
    </div>
  );
}
