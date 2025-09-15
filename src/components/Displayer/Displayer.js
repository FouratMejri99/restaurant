import Dates from "./dates/dates";
import "./Displayer.css";
import Guests from "./Guets/guest";
import Times from "./Times/Times";

export default function Displayer() {
  return (
    <div className="displayer-card">
      <div className="displayer-row">
        <Guests />
        <Times />
        <Dates />
      </div>
    </div>
  );
}
