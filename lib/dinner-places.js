const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${process.env.NEXT_PUBLIC_FSQR_KEY}`,
  },
};

const getDinnerUrl = (latitude, longitude, category) => {
  return `https://api.foursquare.com/v3/places/search?ll=${latitude}%2C${longitude}&radius=10000&categories=${category}&fields=name%2Clocation%2Ctel%2Cwebsite%2Chours%2Crating%2Cprice%2Cphotos&open_now=true&sort=DISTANCE&limit=10`;
};

fetch(
  "https://api.foursquare.com/v3/places/search?ll=-34.07%2C150.73&radius=10000&categories=13031&fields=name%2Clocation%2Ctel%2Cwebsite%2Chours%2Crating%2Cprice%2Cphotos&open_now=true&sort=DISTANCE&limit=10",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//How do I export this function?
export const fetchDinnerPlaces = async (latitude, longitude, category) => {
  const url = getDinnerUrl(latitude, longitude, category);
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
//TODO
//Fix the API code to get the lat and long from the location component and the category from the categories component
//Make this request asynchrounous
