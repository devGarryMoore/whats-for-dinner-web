export default async function fetchHandler(req, res) {
  const { latitude, longitude, category } = req.body;

  const url = `https://api.foursquare.com/v3/places/search?ll=${latitude}%2C${longitude}&radius=10000&categories=${category}&fields=name%2Clocation%2Ctel%2Cwebsite%2Chours%2Crating%2Cprice%2Cphotos&open_now=true&sort=DISTANCE&limit=10`;

  console.log(url);

  try {
    const apiResponse = await fetch(url, {
      headers: { Authorization: `${process.env.NEXT_PUBLIC_FSQR_KEY}` },
    });
    const data = await apiResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Could not fetch the data from foursquare...", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
