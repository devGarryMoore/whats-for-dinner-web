const getDinnerUrl = (latitude, longitude, category) => {
  return `http://localhost:3000/api?latitude=${latitude}&longitude=${longitude}&category=${category}`;
};
export const fetchDinnerPlaces = async (latitude, longitude, category) => {
  const url = getDinnerUrl(latitude, longitude, category);
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
