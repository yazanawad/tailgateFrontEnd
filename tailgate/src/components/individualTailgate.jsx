import "./componentStyle/individualTailgate.css";

export default function IndividualTailgate(props) {
  const { tailgateName, time, location, spots, message } = props.tailgateInfo;
  const { navigate } = props;
  return (
    <div onClick={() => navigate(tailgateName)} className="wrapper">
      <h1>{tailgateName}</h1>
      <h3>
        {location}, {time}
      </h3>
      <h3>{spots} spots available!</h3>
      <h3>{message}</h3>
    </div>
  );
}
