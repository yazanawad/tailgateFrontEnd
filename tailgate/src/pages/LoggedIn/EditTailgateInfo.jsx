import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CreateTailgate from "./CreateTailgate";

export default function EditTailgate(props) {
    const navigate = useNavigate();
    const tailgateInfo = useState({
        tailgate_name: "CASA Works",
        tailgate_loc:  "Leavey",
        start_time: "10:00am",
        end_time: "3:00pm",
        num_guests: "30",
        short_desc: "Fun tailgate you should come",
    });
    return (
        <div className="contain" style={{ margin: "auto" }}>
          <h1>Edit Tailgates</h1>
          <CreateTailgate tailgateInfo={tailgateInfo}/>
        </div>
      );
}