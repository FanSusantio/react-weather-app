import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/fan-susantio-62227919/"
            target="_blank"
            rel="noreferrer"
          >
            Fan Susantio
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
