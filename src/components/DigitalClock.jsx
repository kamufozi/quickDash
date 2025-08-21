import { useEffect, useState } from "react";
import { BsClock } from "react-icons/bs";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [format, setFormat] = useState("US");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date()); //updating the time state each second
    }, 1000);

    return () => clearInterval(intervalId); // in Case the clock is unmounted, for clean up.
  }, [time]);

  function timeFormat() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const meridiem = hours >= 12 ? "PM" : "AM";
    if (format === "US") {
      hours = hours % 12;
    }
    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(
        seconds
      )} ${format === "US" ? meridiem : c}`;
  }

  function dateFormat() {
    const dayOfWeek = time.getDay();
    const dayOfMonth = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();

    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${dayNames[dayOfWeek]}, ${monthNames[month]} ${dayOfMonth}, ${year}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <div className="w-[450px] mt-10 ml-10 p-5 border-2 border-y-gray-400 border-x-gray-100 rounded-2xl">
        <div className="flex items-center">
          <BsClock className="mx-3" />
          {/* <span className="mx-3 text-sm border border-gray-400 rounded-2xl p-0.5 px-1 ">10:01</span> */}
          <span className="text-2xl">Current time</span>
        </div>
        <div className="m-5 flex flex-col items-center">
          <button
            onClick={() =>
              setFormat((prev) => (prev === "US" ? "International" : "US"))
            }
            className="text-4xl"
          >
            {timeFormat()}
          </button>
          <p className="text-md mt-2 text-gray-900">{dateFormat()}</p>
        </div>
      </div>
    </>
  );
}
