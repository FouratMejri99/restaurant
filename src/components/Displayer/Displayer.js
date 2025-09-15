import Planning from "../Planing/planing";
import Dates from "./dates/dates";
import "./Displayer.css";
import Guests from "./Guets/guest";
import Times from "./Times/Times";

export default function Displayer({
  guests,
  setGuests,
  time,
  setTime,
  date,
  setDate,
  setPage,
}) {
  return (
    <div className="displayer-card">
      <div className="displayer-row">
        <Guests guests={guests} setGuests={setGuests} />
        <Times time={time} setTime={setTime} />
        <Dates date={date} setDate={setDate} />
      </div>

      <div className="displayer-planning">
        <Planning
          selectedTime={time}
          setSelectedTime={setTime}
          setPage={setPage} // tells Booking when to switch to booktable
        />
      </div>
    </div>
  );
}
