import "./CreateTailgate.css";
import IndividualTailgate from "../../components/individualTailgate";
import { useState } from "react";

export default function TailgateInfo(props) {
  const { setLogin } = props;

  const [tailgates, setTailgates] = useState({
    tailgateName: "CASA Tailgate",
    time: "1pm-3pm",
    location: "Mccarthy Quad",
    spots: 3,
    message: "Fun tailgate",
  });

  const [tailgateDetails, setTailgateDetails] = useState({
    time: tailgates.time,
    location: tailgates.location,
    spots: tailgates.spots,
  });

  const signOut = () => {
    setLogin(false);
  };

  return (
    <div className="contain">
      <h3>{tailgates.tailgateName}</h3>
      <br></br>
      <h4>{tailgates.message}</h4>
      <IndividualTailgate tailgateInfo={tailgateDetails}></IndividualTailgate>
      {/* Box that Aidan is making */}
    </div>
  );
}
