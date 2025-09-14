import Guests from "./Guets/guest";
import Times from "./Times/Times";
import Dates from "./dates/dates";

export default function Displayer() {
  return (
    <div style={{ display: "flex", gap: "0px", justifyContent: "center" }}>
      <Guests />
      <Times />
      <Dates />
    </div>
  );
}
