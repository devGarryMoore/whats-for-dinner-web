const options = {
  headers: {
    accept: "application/json",
    Authorization: `${process.env.NEXT_PUBLIC_FSQR_KEY}`
  }
};

const getDinnerUrl = (latitude, longitude, category) => {
  return `https://api.foursquare.com/v3/places/search?ll=${latitude}%2C${longitude}&radius=10000&categories=${category}&fields=name%2Clocation%2Ctel%2Cwebsite%2Chours%2Crating%2Cprice%2Cphotos&open_now=true&sort=DISTANCE&limit=10`;
};

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const url = getDinnerUrl(
    searchParams.get("latitude"), 
    searchParams.get("longitude"), 
    searchParams.get("category")
  );
  try{
    const apiResponse = await fetch(url, options);
    const data = await apiResponse.json()
    return Response.json(data)
  } catch(error) {
    return Response.json([]);
  }
}
