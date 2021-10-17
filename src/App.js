import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/NoBasil12/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourse code{" "}
          </a>
          , by Francesca Carai
        </footer>
      </div>
    </div>
  );
}

export default App;
