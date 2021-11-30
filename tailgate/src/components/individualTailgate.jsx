export default function IndividualTailgate(props) {
  console.log("props");
  console.log(props);
  const { tailgateName, time, location, spots, message } = props.tailgateInfo;
  return (
    <div>
      <h3>{tailgateName}</h3>
      <h3>
        {location}, {time}
      </h3>
      <h3>{spots} spots available!</h3>

      <h3>{message}</h3>
    </div>
  );
}
