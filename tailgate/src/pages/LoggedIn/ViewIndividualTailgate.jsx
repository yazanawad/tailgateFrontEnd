import { useState } from "react";
import "./ViewIndividualTailgate.css";
import IndividualTailgate from "../../components/individualTailgate";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSingleTailgate,
  getAttendees,
  deleteTailgate,
  deleteFromTailgate,
} from "../../api";

function NameTag({ fullName, handleDelete, index }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "lightblue",
          padding: "10px",
          margin: "10px",
          // width: "80%",
          borderRadius: "10px",
          display: "inline",
        }}
      >
        <h3>{fullName}</h3>
      </div>
      <svg
        onClick={() => handleDelete(index)}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        cursor="pointer"
        fill="currentColor"
        className="bi bi-trash"
        viewBox="0 0 16 16"
        display="inline"
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
      </svg>
    </div>
  );
}

function ViewIndividualTailgate() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [guests, setGuests] = useState([]);
  const [tailgate, setTailgate] = useState({});
  useEffect(() => {
    const f = async () => {
      const res = await getSingleTailgate(id);
      const attendees = await getAttendees(id);

      setGuests(attendees);
      setTailgate(res);
      console.log(res);
    };
    f();
  }, []);
  const handleDelete = async (obj, index) => {
    console.log("DEK");
    console.log(index);
    console.log(obj.UserId);
    console.log(id);
    const newGuests = guests;

    await deleteFromTailgate(obj.UserId, id);
    newGuests.splice(index, 1);
    console.log(newGuests);
    setGuests([...newGuests]);
  };
  const buttonDelete = async () => {
    alert("Tailgate Deleted");
    await deleteTailgate(id);
    navigate("/ViewAllTailgates");
  };
  const renderNames = () => {
    console.log("guests");
    return (
      <div>
        {guests.map((g, index) => (
          <>
            <NameTag
              key={g.UserId}
              fullName={g.FirstName}
              handleDelete={() => handleDelete(g, index)}
              index={index}
            />
            <br></br>
          </>
        ))}
      </div>
    );
  };
  return (
    <div id="parent">
      <div id="wide">
        <IndividualTailgate
          // tailgateInfo={{ location: tailgate?.Location, time: "1:30" }}
          tailgateInfo={tailgate}
          navigate={() => {}}
        />
        <Button variant="primary" onClick={() => navigate("/EditTailgateInfo")}>
          Edit
        </Button>{" "}
        <Button variant="primary" onClick={() => buttonDelete()}>
          Delete
        </Button>{" "}
      </div>
      <div id="narrow">
        <h1>Guest List</h1>
        {renderNames()}
      </div>
    </div>
  );
}

export default ViewIndividualTailgate;
