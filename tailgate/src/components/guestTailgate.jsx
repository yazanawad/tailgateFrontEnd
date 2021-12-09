import "./componentStyle/guestTailgate.css";

export default function GuestTailgate(props) {
  //  const { time, location, spots, message } = props.tailgateInfo;
  const {
    TailgateName,
    time,
    Location,
    capacity,
    TailgateDescription,
    TailgateId,
  } = props.tailgateInfo;
  return (
    <div className="box">
      <h2>{TailgateName}</h2>
      <h3>
        {Location}, {time}
      </h3>
      <h3>{capacity} spots available!</h3>
      <h3>{TailgateDescription}</h3>
    </div>
  );
}
