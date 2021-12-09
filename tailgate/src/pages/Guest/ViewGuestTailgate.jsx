import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import GuestTailgate from "../../components/guestTailgate";
import { getAllTailgates } from "../../api";
import IndividualTailgate from "../../components/individualTailgate";
export default function ViewGuestTailgate(props) {
  const [tailgate, setTailgate] = useState({
    tailgateName: "CASA",
    time: "1pm-3pm",
    location: "Mccarthy Quad",
    spots: 3,
    message: "Fun tailgate",
  });
  const navigate = () => {
    alert("Please create an account to join the tailgate");
  };
  useEffect(() => {
    const getData = async () => {
      const data = await getAllTailgates();
      console.log(data);
      setTailgate(data);
    };
    getData();
  }, []);
  const renderTailgates = () => {
    if (tailgate.length) {
      return (
        <div>
          {tailgate.map((t) => (
            <IndividualTailgate
              navigate={navigate}
              key={t.tailgateName}
              tailgateInfo={t}
            />
          ))}
        </div>
      );
    } else {
      return <h1>No Tailgates Found</h1>;
    }
  };
  return (
    <div className="contain">
      <h1>{tailgate.tailgateName}</h1>

      {renderTailgates()}
      <br />
    </div>
  );
}
