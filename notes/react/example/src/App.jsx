import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [weather, setWeather] = useState(null);
  // can be read as: let [weather, setWeather] = ["weather", (newWeather) => setState(newWeather)]
  // same as:
  // let weather = state[0];
  // let setWeather = state[1];

  useEffect(() => fetchWeather(), []);

  async function fetchWeather() {
    let res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Birmingham,US-AL&units=imperial&appid=a5a839a780c1d61b9710aca75a4e11fa"
    );
    let data = await res.json();
    setWeather(data);
  }

  return (
    <main>
      <h1>{weather?.main.temp}°F</h1>
    </main>
  );
}

export default App;
