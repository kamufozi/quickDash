import { useEffect, useState } from "react";

export default function AnalogClock() {
  const hourStyle = "absolute font-700 text-xl text-gray-600";
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="mt-10 ml-10 h-[315px] w-[315px] flex justify-center items-center">
        <div className="w-[300px] h-[300px] rounded-[50%] border-2 border-gray-400 relative">
          <div className="w-[14px] h-[14px] bg-gray-400 rounded-[50%] absolute top-0 bottom-0 left-0 right-0 m-auto z-10"></div>
          <div className={`${hourStyle} top-[10px] left-[46%]`}>XII</div>
          <div className={`${hourStyle} top-[10%] right-[26%]`}>I</div>
          <div className={`${hourStyle} top-[25%] right-[10%]`}>II</div>
          <div className={`${hourStyle} top-[46%] right-[10px]`}>III</div>
          <div className={`${hourStyle} top-[67%] right-[30px]`}>VI</div>
          <div className={`${hourStyle} top-[80%] right-[78px]`}>V</div>
          <div className={`${hourStyle} bottom-[10px] left-[50%]`}>VI</div>
          <div className={`${hourStyle} top-[80%] left-[78px]`}>VII</div>
          <div className={`${hourStyle} top-[67%] left-[30px]`}>VIII</div>
          <div className={`${hourStyle} top-[46%] left-[10px]`}>IX</div>
          <div className={`${hourStyle} top-[25%] left-[10%]`}>X</div>
          <div className={`${hourStyle} top-[10%] left-[26%]`}>XI</div>
          {/*Hour hand*/}
          <div
            className="absolute z-5 w-[4px] h-[65px] bg-gray-800 top-[79px] left-[50%] origin-[50%_69px] -ml-[2px]"
            style={{
              transform: `rotateZ(${time.getHours() * 30}deg)`,
            }}
          ></div>
          {/*Minute hand */}
          <div
            className="absolute z-6 w-[3px] h-[100px] bg-blue-100 top-[46px] left-[50%] origin-[50%_100px] -ml-[2px]"
            style={{
              transform: `rotateZ(${time.getMinutes() * 6}deg)`,
            }}
          ></div>
          {/*Second hand*/}
          <div
            className="absolute z-7 w-[1px] h-[120px] bg-red-800 top-[26px] left-[50%] origin-[50%_124px] -ml-[1px]"
            style={{
              transform: `rotateZ(${time.getSeconds() * 6}deg)`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
