import DigitalClock from "./components/DigitalClock";
import AnalogClock from "./components/AnalogClock";
import { useState } from "react";

export default function App() {
  const [clockType, setClockType] = useState("analog");
  return (
    <>
      {clockType === "digital" ? (
        <DigitalClock setClockType={setClockType} />
      ) : (
        <AnalogClock setClockType={setClockType} />
      )}
    </>
  );
}
