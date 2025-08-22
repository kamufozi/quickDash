
import { useEffect, useState } from "react";
import { IoPin } from "react-icons/io5";
import { CiCloud } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { ImSpinner6 } from "react-icons/im";

export default function Weather() {
    const [isLoading,setIsLoading]=useState(true);
    const [location,setLocation]= useState(null)
    useEffect(
        ()=>{
            setIsLoading(true)
            if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((pos)=>{
                const lat = pos.coords.latitude
                const long = pos.coords.longitude
                const key= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9fad13332f362e8543c0186cbb831864`
                 fetch(key)
                .then(res=>res.json())
                .then(data=>{
                  setLocation(data)
                  setIsLoading(false)
                })
            }
        )}
           
        },[]
    )
    const Loading=()=>{
      return (
        <div>
            <ImSpinner6  className="animate-spin text-4xl"/>
        </div>
      )
    }
  return (
    <>

   <div className="w-[450px] mt-10 ml-10 p-5 border-2 border-y-gray-400 border-x-gray-100 rounded-2xl">
   {isLoading?<Loading />: <div>
   <p className="flex  gap-2 text-xl "><CiCloud /> weather </p>  
       <p className="text-3xl">{Math.floor(location?.main?.temp-273.15)} °C</p>
       <p>{location?.weather[0]?.description}</p>
       <p className="flex  gap-2 text-xl mt-3"><IoPin /> {location?.name}, {location?.sys?.country}</p>
       <div className="flex justify-between">
        <p className="mt-3 flex gap-2"><WiHumidity /> {location?.main?.humidity} %</p>
        <p ><FaWind/> {location?.wind?.speed}mph</p>
       </div></div>}
    </div>
    </>

  )
}
   