import { useState } from "react";
import { getWeather } from "../weatherService";
import icon from "../src/assets/magnifying-glass-solid.svg"

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (error) {
      console.error("Failed to fetch weather:", error);
    }
  };

  return (
    <div className="< flex items-center justify-center bg-stone-900 min-h-screen ">
      <div className="bg-linear-60 from-cyan-400 to-blue-950 w-[35%] place-self-center mx-[25%] h-[400px] border-none py-7 px-5 flex flex-col rounded-4xl gap-10">
        <div className=" flex flex-row w-full rounded-full  gap-2">
          <input className="bg-white border-none outline-none rounded-full h-10 text-lg px-3 py-4 text-slate-700 flex-grow w-full" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
          <button className="flex-grow bg-white border-none rounded-full text-lg h-10 px-3 py-1 flex flex-row items-center gap-2 text-slate-700" onClick={handleSearch}> 
            <img src={icon} alt=""className=" h-4 px-1 " />
          </button>
        </div>

        {weather && (
          <div className="border-none flex flex-col items-center text-white text-2xl ">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt="" className="h-30" />
            <p className="text-4xl">{weather.main.temp}°C</p>
            <h2 className="text-4xl">{weather.name}</h2>
            <p className="text-3xl">{weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
