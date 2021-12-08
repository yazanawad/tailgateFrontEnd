import { useState } from "react";
import "./ViewIndividualTailgate.css";
import IndividualTailgate from "../../components/individualTailgate";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"

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
  let navigate = useNavigate();
  const [guests, setGuests] = useState([
    "Felix Chen",
    "Aidan Chueh",
    "Yazan Awad",
    "Jake Kandell",
  ]);
  const [tailgate, setTailgate] = useState({
    tailgateName: "CASA",
    time: "1pm-3pm",
    location: "Mccarthy Quad",
    spots: 3,
    message:
      "Fun tailgate fsakfjhsalkfjklahklsafdkslahjsklafhsldkflsdsfkjsjlksjlk",
  });
  useEffect(() => {
    // setTailgate({
    //   tailgateName: "New",
    //   time: "1pm-3pm",
    //   location: "Mccarthy Quad",
    //   spots: 3,
    //   message:
    //     "Fun tailgate fsakfjhsalkfjklahklsafdkslahjsklafhsldkflsdsfkjsjlksjlk",
    // });
  }, []);
  const handleDelete = (index) => {
    console.log(index);
    const newGuests = guests;

    newGuests.splice(index, 1);
    console.log(newGuests);
    setGuests([...newGuests]);
  };

  const renderNames = () => {
    return (
      <div>
        {guests.map((name, index) => (
          <>
            <NameTag
              key={name}
              fullName={name}
              handleDelete={handleDelete}
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
        <h2 className="white">{tailgate.tailgateName}</h2>
        <h4 color="white">{tailgate.message}</h4>
        <IndividualTailgate
          tailgateInfo={{ location: tailgate.location, time: tailgate.time }}
          navigate={() => {}}
        />
        <Button variant="primary" onClick={() => navigate("/EditTailgateInfo")}>Edit</Button>{" "}
        <Button variant="primary">Delete</Button>{" "}
      </div>
      <div id="narrow">
        <h1>Guest List</h1>
        {renderNames()}
      </div>
    </div>
  );
}

export default ViewIndividualTailgate;
