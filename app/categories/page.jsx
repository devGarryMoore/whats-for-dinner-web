import Image from "next/image";

export default function Categories() {
  return (
    <section className="container">
      <h1>Pick a Category...</h1>
      <a href="/results">
        <div className="cards">
          <Image></Image>
          <h2>Beef</h2>
        </div>
      </a>
    </section>
  );
}
