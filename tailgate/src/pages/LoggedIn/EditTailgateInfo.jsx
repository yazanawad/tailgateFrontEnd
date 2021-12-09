import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CreateTailgate from "./CreateTailgate";
import { getSingleTailgate } from "../../api";
export default function EditTailgate(props) {
  const { id } = useParams();

  console.log(props.location);
  console.log(props);
  const [tailgateInfo, setTailgateInfo] = useState({
    tailgate_name: "CASA Works",
    tailgate_loc: "Leavey",
    start_time: "10:00am",
    end_time: "3:00pm",
    num_guests: "30",
    short_desc: "Fun tailgate you should come",
  });
  useEffect(() => {
    const f = async () => {
      const res = await getSingleTailgate(id);
      setTailgateInfo(res);
    };
    f();
  }, []);

  return (
    <div className="contain" style={{ margin: "auto" }}>
      <h1>Edit Tailgates</h1>
      <CreateTailgate tailgateInfo={tailgateInfo} />
    </div>
  );
}
