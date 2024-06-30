const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${process.env.NEXT_PUBLIC_FSQR_KEY}`,
  },
};

fetch(
  "https://api.foursquare.com/v3/places/search?ll=-34.07%2C150.73&radius=10000&categories=13031&fields=name%2Clocation%2Ctel%2Cwebsite%2Chours%2Crating%2Cprice%2Cphotos&open_now=true&sort=DISTANCE&limit=10",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
