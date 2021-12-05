import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useRef, useState } from 'react';
import GuestTailgate from "../../components/guestTailgate";


export default function ViewGuestTailgate(props) {
    const [tailgate, setTailgate] = useState({
        tailgateName: "CASA",
        time: "1pm-3pm",
        location: "Mccarthy Quad",
        spots: 3,
        message:
          "Fun tailgate fsakfjhsalkfjklahklsafdkslahjsklafhsldkflsdsfkjsjlksjlk",
      });
    let navigate = useNavigate();
    const { setLogin } = props;
    const handleCreate = (e) => {
      e.preventDefault();
      navigate("/");
    };
    
    return (
      <div className="contain">
        <h1>{tailgate.tailgateName}</h1>
        <GuestTailgate tailgateInfo={tailgate}/><br/>
      </div>
    );
  }