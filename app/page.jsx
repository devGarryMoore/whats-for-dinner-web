export default function HomePage() {
  const heading = "What's For Dinner";
  return (
    <main>
      <div className="search-box">
        <h1>{heading}</h1>
        <form action="">
          <label htmlFor="adsress">Enter your location...</label>
          <input type="text" name="address" id="address" />
          <a href="/categories">Use Current Location</a>
        </form>
      </div>
    </main>
  );
}
