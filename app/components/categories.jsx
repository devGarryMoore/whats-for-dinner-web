import Image from "next/image";
import hamburger from "@/assets/hamburger.png";
import chicken from "@/assets/chicken.png";
import pizza from "@/assets/pizza.png";
import chinese from "@/assets/chinese.png";
import pub from "@/assets/pub.png";
import sushi from "@/assets/sushi.png";
import korean from "@/assets/korean.png";
import random from "@/assets/random.png";
import React, { useState } from "react";

export default function Categories() {
  const [categoryCode, setCategoryCode] = useState("");

  const handleCategoryClick = (code) => {
    setCategoryCode(code);
    alert("Category code: " + code);
    //TODO
    //Later we will use this code to fetch the data from the API and display the results
  };

  return (
    <div>
      <h1 className="heading">Pick a category</h1>
      <section className="container">
        <div className="cards" onClick={() => handleCategoryClick("13031")}>
          <Image src={hamburger} width={100} alt="hamburger" />
          <h2>Burgers</h2>
        </div>
        <div className="cards" onClick={() => handleCategoryClick("13055")}>
          <Image src={chicken} width={100} alt="chicken" />
          <h2>Chicken</h2>
        </div>
        <div className="cards" onClick={() => handleCategoryClick("13064")}>
          <Image src={pizza} width={100} alt="pizza" />
          <h2>Pizza</h2>
        </div>
        <div className="cards" onClick={() => handleCategoryClick("13099")}>
          <Image src={chinese} width={100} alt="chinese" />
          <h2>Chinese</h2>
        </div>
        <div className="cards" onClick={() => handleCategoryClick("13018")}>
          <Image src={pub} width={100} alt="pubs" />
          <h2>Pubs</h2>
        </div>
        <div className="cards" onClick={() => handleCategoryClick("13276")}>
          <Image src={sushi} width={100} alt="sushi" />
          <h2>Sushi</h2>
        </div>
        <div className="cards" onClick={() => handleCategoryClick("13289")}>
          <Image src={korean} width={100} alt="korean" />
          <h2>Korean</h2>
        </div>
        <div className="cards" onClick={() => handleCategoryClick("")}>
          <Image src={random} width={100} alt="random" />
          <h2>Random</h2>
        </div>
      </section>
    </div>
  );
}
