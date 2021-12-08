import "./CreateTailgate.css";
import IndividualTailgate from "../../components/individualTailgate";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTailgate, joinTailgate } from "../../api";
export default function TailgateInfo(props) {
  const { setLogin, userID } = props;

  const { tailgateName } = useParams();

  const [tailgates, setTailgates] = useState({
    tailgateName: "CASA Tailgate",
    time: "1pm-3pm",
    location: "Mccarthy Quad",
    spots: 3,
    message: "Fun tailgdfsfjdksfkjate",
  });

  const [tailgateDetails, setTailgateDetails] = useState({
    time: tailgates.time,
    location: tailgates.location,
    spots: tailgates.spots,
  });

  useEffect(() => {
    const fun = async () => {
      const res = await getSingleTailgate(tailgateName);
      console.log(res);

      setTailgateDetails(res);
    };

    fun();
  }, []);

  const handleJoin = async (e) => {
    alert("Tailgate Joined");
    try {
      await joinTailgate(userID.current, tailgateName);
      console.log("WORKED");
    } catch (e) {
      console.log(e);
    }
    e.preventDefault();
    console.log("Button clicked!");
  };

  const signOut = () => {
    setLogin(false);
  };

  return (
    <div className="contain">
      <h3>{tailgates.tailgateName}</h3>
      <br></br>
      <h4>{tailgates.message}</h4>
      <IndividualTailgate tailgateInfo={tailgateDetails}></IndividualTailgate>
      <input
        className="buttonStyle"
        type="button"
        value="Join"
        onClick={(e) => handleJoin(e)}
      />
      <br />
    </div>
  );
}
