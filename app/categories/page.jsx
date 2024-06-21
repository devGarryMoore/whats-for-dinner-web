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
        <div className="card-row">
          <a href="/results">
            <div className="cards">
              <Image src={hamburger} width={100} alt="hamburger" />
              <h2>Burgers</h2>
            </div>
          </a>
          <a href="/results">
            <div className="cards">
              <Image src={chicken} width={100} alt="chicken" />
              <h2>Chicken</h2>
            </div>
          </a>
          <a href="/results">
            <div className="cards">
              <Image src={pizza} width={100} alt="pizza" />
              <h2>Pizza</h2>
            </div>
          </a>
          <a href="/results">
            <div className="cards">
              <Image src={chinese} width={100} alt="chinese" />
              <h2>Chinese</h2>
            </div>
          </a>
        </div>
        <div className="card-row">
          <a href="/results">
            <div className="cards">
              <Image src={pub} width={100} alt="pubs" />
              <h2>Pubs</h2>
            </div>
          </a>
          <a href="/results">
            <div className="cards">
              <Image src={sushi} width={100} alt="sushi" />
              <h2>Sushi</h2>
            </div>
          </a>
          <a href="/results">
            <div className="cards">
              <Image src={korean} width={100} alt="korean" />
              <h2>Korean</h2>
            </div>
          </a>
          <a href="/results">
            <div className="cards">
              <Image src={random} width={100} alt="random" />
              <h2>Random</h2>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

// TODO
// 1.Burgers 2.Chicker 3.Pizza 4.Chinese
// 5.Pubs 6.Sushi 7.Korean 8.Random
