// import React from "react";
import "./App.css";
import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempAndDetails from "./Components/TempAndDetails";
import Forecast from "./Components/Forecast";
import getWeatherData from "./Services/WeatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getWeatherData("weather", { q: "london" });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;
