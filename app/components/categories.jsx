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

export default function Categories({ onCategoryUpdate }) {
  const [categoryCode, setCategoryCode] = useState("");

  const handleCategoryClick = (code) => {
    setCategoryCode(code);
    onCategoryUpdate(code);
  };

  //Garry fixed Git

  const categoryCards = [
    {
      name: "Burgers",
      className: "cards",
      code: "13031",
      src: hamburger,
      width: 100,
      alt: "hamburger",
    },
    {
      name: "Chicken",
      className: "cards",
      code: "13055",
      src: chicken,
      width: 100,
      alt: "chicken",
    },
    {
      name: "Pizza",
      className: "cards",
      code: "13064",
      src: pizza,
      width: 100,
      alt: "pizza",
    },
    {
      name: "Chinese",
      className: "cards",
      code: "13099",
      src: chinese,
      width: 100,
      alt: "chinese",
    },
    {
      name: "Pubs",
      className: "cards",
      code: "13018",
      src: pub,
      width: 100,
      alt: "pubs",
    },
    {
      name: "Sushi",
      className: "cards",
      code: "13276",
      src: sushi,
      width: 100,
      alt: "sushi",
    },
    {
      name: "Korean",
      className: "cards",
      code: "13289",
      src: korean,
      width: 100,
      alt: "korean",
    },
    {
      name: "Random",
      className: "cards",
      code: "13134",
      src: random,
      width: 100,
      alt: "random",
    },
  ];

  return (
    <div>
      <h1 className="heading">Pick a category</h1>
      <section className="container">
        {categoryCards.map((option) => (
          <div
            key={option.name}
            className={option.className}
            onClick={() => handleCategoryClick(option.code)}
          >
            <Image src={option.src} width={option.width} alt={option.alt} />
            <h2>{option.name}</h2>
          </div>
        ))}
      </section>
    </div>
  );
}
