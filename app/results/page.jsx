import Image from "next/image";

export default function ResultsPage() {
  return (
    <div className="container">
      <h1>Results</h1>
      <div className="results-card">
        <div>
          <h2>Place name</h2>
          <Image></Image>
        </div>
        <div>
          <ul>
            <li>Detail 1</li>
            <li>Detail 2 etc</li>
          </ul>
        </div>
        <button>Try Again</button>
        <button>Directions</button>
      </div>
    </div>
  );
}
