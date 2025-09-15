import * as React from "react";
import Planning from "../Planing/planing";
import Dates from "./dates/dates";
import "./Displayer.css";
import Guests from "./Guets/guest";
import Times from "./Times/Times";

export default function Displayer({ setSelectedTime }) {
  const [guests, setGuests] = React.useState("");
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState(null);

  console.log("Selected values:", { guests, time, date });

  return (
    <div className="displayer-card">
      {/* Row for inputs */}
      <div className="displayer-row">
        <Guests guests={guests} setGuests={setGuests} />
        <Times time={time} setTime={setTime} />
        <Dates date={date} setDate={setDate} />
      </div>

      {/* Planning grid under the inputs */}
      <div className="displayer-planning">
        <Planning selectedTime={time} setSelectedTime={setSelectedTime} />
      </div>
    </div>
  );
}
