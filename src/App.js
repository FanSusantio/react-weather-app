import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/fan-susantio-62227919/"
            target="_blank"
            rel="noreferrer"
          >
            Fan Susantio{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/FanSusantio/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
