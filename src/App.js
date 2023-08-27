import React, { useEffect, useState } from "react";
import "./App.css";
import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempAndDetails from "./Components/TempAndDetails";
import getFormattedWeatherdata from "./Services/WeatherService";

function App() {
  const [query, setQuery] = useState({ q: "new york" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherdata({ ...query}).then(
        (data) => {
          setWeather(data);
          console.log(data)
        }
      );
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      {weather && (
        <>
          <TimeAndLocation weather={weather}/>
          <TempAndDetails weather={weather}/>
        </>
      )}
      {/* <Forecast title="hourly forecast" /> */}
      {/* <Forecast title="daily forecast" /> */}
    </div>
  );
}

export default App;
