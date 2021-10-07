import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <p class="author">
        <a
          href="https://github.com/NoBasil12/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourse code{" "}
        </a>
        , by Francesca Carai
      </p>
    </div>
  );
}

export default App;
