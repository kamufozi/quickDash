
import { useEffect, useState } from "react";
import { IoPin } from "react-icons/io5";
import { CiCloud } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";

export default function Weather() {
    const [location,setLocation]= useState(null)
    useEffect(
        ()=>{
            if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((pos)=>{
                const lat = pos.coords.latitude
                const long = pos.coords.longitude
                const key= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9fad13332f362e8543c0186cbb831864`
                 fetch(key)
                .then(res=>res.json())
                .then(data=>setLocation(data))
            }
        )}
           
        },[]
    )
  return (
    <>
     {location ? <div className="rounded-lg w-1/2 mt-32 ml-12 flex flex-col border-1  p-12">
      <p className="flex  gap-2 text-2xl "><CiCloud /> weather </p>  
       <p className="text-4xl">{Math.floor(location?.main?.temp-273.15)} °C</p>
       <p>{location?.weather[0]?.description}</p>
       <p className="flex  gap-2 text-2xl mt-3"><IoPin /> {location?.name}, {location?.sys?.country}</p>
       <div className="flex justify-between">
        <p className="mt-3 flex gap-2"><WiHumidity /> {location?.main?.humidity} %</p>
        <p><FaWind/> {location?.wind?.speed}mph</p>
       </div>
    </div>:<p>LOADING</p>}
    </>

  )
}
   