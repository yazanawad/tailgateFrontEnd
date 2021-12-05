import "./componentStyle/individualTailgate.css";

export default function IndividualTailgate(props) {
  const { tailgateName, time, location, spots, message } = props.tailgateInfo;
  const { navigate } = props;
  return (
    <div
      onClick={() => {
        if (navigate) navigate(tailgateName);
      }}
      className="wrapper"
    >
      {tailgateName ? <h1>{tailgateName}</h1> : <></>}
      {location ? (
        <h3>
          {location}, {time}
        </h3>
      ) : (
        <></>
      )}
      {spots != null ? <h3>{spots} spots available!</h3> : <></>}
      {message ? <h3>{message}</h3> : <></>}
    </div>
  );
}
