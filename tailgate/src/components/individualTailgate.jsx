import "./componentStyle/individualTailgate.css";

export default function IndividualTailgate(props) {
  const {
    TailgateName,
    time,
    Location,
    capacity,
    TailgateDescription,
    TailgateId,
  } = props.tailgateInfo;
  const { navigate } = props;
  return (
    <div
      onClick={() => {
        console.log(TailgateId);
        if (navigate != null) navigate(`${TailgateId}`);
      }}
      className="wrapper"
    >
      {TailgateName ? <h1>{TailgateName}</h1> : <></>}
      {Location ? (
        <h3>
          {Location}, {time}
        </h3>
      ) : (
        <></>
      )}
      {capacity != null ? <h3>{capacity} spots available!</h3> : <></>}
      {TailgateDescription ? <h3>{TailgateDescription}</h3> : <></>}
    </div>
  );
}
