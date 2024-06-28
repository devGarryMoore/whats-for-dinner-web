import Categories from "./components/categories";
import Location from "./components/location";

export default function HomePage() {
  return (
    <>
      <Location />
      <Categories />
    </>
  );
}

//Todo
//Have the categories component be hidden until the user gets their location
//Hide the lcation component after the user gets their location
