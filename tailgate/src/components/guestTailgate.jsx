import "./componentStyle/guestTailgate.css";

export default function GuestTailgate(props) {
  const { time, location, spots, message } = props.tailgateInfo;
  return (
    <div className="box">
      <h3>
        {location}, {time}
      </h3>
      <h3>{spots} spots available!</h3>
      <h3>{message}</h3>
    </div>
  );
}
