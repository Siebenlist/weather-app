import React, { useState } from "react";
import axios from "axios";

function App() {
   const [data, setData] = useState({});
   const [location, setLocation] = useState("");

   const url = API_KEY;

   const searchingLocation = (e) => {
      if (e.key === "Enter") {
         axios.get(url).then((response) => {
            setData(response.data);
            console.log(response.data);
         });
      }
   };

   return (
      <div className="App font-bold">
         {/*search bar*/}
         <div className="w-full my-10 text-center">
            <input
               onChange={(e) => setLocation(e.target.value)}
               onKeyPress={searchingLocation}
               type="text"
               placeholder="Enter a city"
               className="text-black w-[80%] max-w-[500px] p-3 rounded-full bg-[#a9b6de] bg-opacity-30 border-2 border-white placeholder:italic"
            />
         </div>
         <div className="flex flex-col w-[95%] max-w-[800px] h-auto mx-auto bg-slate-100 bg-opacity-30 rounded-xl">
            {/*Top of the container */}
            <div className="flex flex-col my-5">
               <div>
                  {data.weather ? (
                     <p className="text-2xl text-left ml-[5%]">{data.name}</p>
                  ) : (
                     <p className="text-2xl">No city selected</p>
                  )}
               </div>
               <div className="flex flex-col">
                  <div className="flex  items-center justify-evenly">
                     <div>
                        {data.main ? (
                           <p className="text-6xl">
                              {(data.main.temp - 273.15).toFixed(1)}°C
                           </p>
                        ) : (
                           <p className="text-7xl">-</p>
                        )}
                     </div>
                     <div>
                        <div>
                           {data.weather ? (
                              <div className="flex justify-center">
                                 <img
                                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                    alt=""
                                    className=""
                                 />
                              </div>
                           ) : null}
                        </div>
                        <div>
                           {data.weather ? (
                              <p className="text-center">
                                 {data.weather[0].description}
                              </p>
                           ) : (
                              <p>-</p>
                           )}
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-evenly pl-5 gap-5 mt-10">
                     <div className="">
                        {data.main ? (
                           <p>{(data.main.temp_min - 273.15).toFixed(1)}°C</p>
                        ) : (
                           <p>-</p>
                        )}
                        <p>Min - Temp.</p>
                     </div>
                     <div>
                        {data.main ? (
                           <p>{(data.main.temp_max - 273.15).toFixed(1)}°C</p>
                        ) : (
                           <p>-</p>
                        )}
                        <p>Max - Temp.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/*Bottom of the container */}
         <div className="flex justify-evenly items-center w-[95%] max-w-[800px] h-[100px] my-5 mx-auto bg-slate-100 bg-opacity-30 rounded-xl text-center">
            <div>
               {data.main ? (
                  <p className="text-2xl">{data.main.humidity}%</p>
               ) : (
                  <p className="text-2xl">-</p>
               )}
               <p>Humidity</p>
            </div>
            <div>
               {data.main ? (
                  <p className="text-2xl">
                     {(data.main.feels_like - 273.15).toFixed(1)}°C
                  </p>
               ) : (
                  <p className="text-2xl">-</p>
               )}
               <p>Feels Like</p>
            </div>
            <div>
               {data.main ? (
                  <p className="text-2xl">{data.wind.speed}</p>
               ) : (
                  <p className="text-2xl">-</p>
               )}
               <p>Wind Speed</p>
            </div>
         </div>
      </div>
   );
}

export default App;
