import React from "react";

function TimeAndLocation({ weather: { dt, name, timezone, country } }) {
  var day = new Date(dt * 1000);
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {day.toUTCString()}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {name}, {country}
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
