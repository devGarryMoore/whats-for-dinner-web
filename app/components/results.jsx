export default function Results() {
  return (
    //TODO
    //Last step is to make api call to fetch the data and display it here.
    //Try again button should take you back to the location component
    //Directions button should take the address and open it in google maps
    <>
      <h1 className="heading">Results</h1>
      <div className="container">
        <div className="search-box">
          <div className="details">
            <div>
              <h2>Place name</h2>
            </div>
            <div>
              <ul>
                <li>Detail 1</li>
                <li>Detail 2 etc</li>
              </ul>
            </div>
          </div>

          <div>
            <button className="btn">Try Again</button>
            <button className="btn">Directions</button>
          </div>
        </div>
      </div>
    </>
  );
}
