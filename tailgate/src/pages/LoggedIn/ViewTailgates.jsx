import { useEffect, useState } from "react";
import IndividualTailgate from "../../components/individualTailgate";

export default function ViewTailgates(props) {
  const { setLogin } = props;
  const [tailgates, setTailgates] = useState([
    {
      tailgateName: "CASA",
      time: "1pm-3pm",
      location: "Mccarthy Quad",
      spots: 3,
      message: "Fun tailgate",
    },
  ]);
  useEffect(() => {
    setTailgates([
      {
        tailgateName: "CASA",
        time: "1pm-3pm",
        location: "Mccarthy Quad",
        spots: 3,
        message: "Fun tailgate",
      },
    ]);
  }, []);
  const signOut = () => {
    setLogin(false);
  };
  const renderTailgates = () => {
    return (
      <div>
        {tailgates.map((tailgate) => (
          <IndividualTailgate tailgateInfo={tailgate} />
        ))}
      </div>
    );
  };

  return (
    <div className="contain">
      <h1>View Tailgates</h1>
      {renderTailgates()}
      <input type="button" value="Sign Out" onClick={signOut} />
    </div>
  );
}
