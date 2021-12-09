import "./CreateTailgate.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createTailgates } from "../../api";
export default function CreateTailgate(props) {
  const { setLogin, userID, tailgateInfo } = props;

  const signOut = () => {
    setLogin(false);
  };
  const tailgate_name = useRef(null);
  const tailgate_loc = useRef(null);
  const start_time = useRef(null);
  const end_time = useRef(null);
  const num_guests = useRef(null);
  const short_desc = useRef(null);
  let navigate = useNavigate();

  const handleCreate = async (event) => {
    event.preventDefault();
    console.log(tailgate_name.current.value);
    const x = await createTailgates(
      userID.current,
      tailgate_name.current.value,
      num_guests.current.value,
      tailgate_loc.current.value,
      short_desc.current.value
    );
    if (x) console.log("SUCCESS");
    else console.log("FAILED");
    console.log(tailgate_name.current.value);
    console.log(tailgate_loc.current.value);
    console.log(start_time.current.value);
    console.log(end_time.current.value);
    console.log(num_guests.current.value);
    console.log(short_desc.current.value);
    navigate("/viewTailgates");
  };

  return (
    <div className="contain">
      <pre>
        {" "}
        <h3>Create Tailgates</h3>{" "}
      </pre>
      <div className="left">
        <h4>Tailgate Name</h4>
        <input
          type="text"
          ref={tailgate_name}
          placeholder="Tailgate Name"
          name="tailgate_name"
          id="tailgate_name"
        />
        <h4>Tailgate Location</h4>
        <select
          ref={tailgate_loc}
          name="tailgate_loc"
          value="Location"
          id="tailgate_loc"
        >
          {/* <option value="" selected disabled hidden>Available Locations</option>  */}
          <option value="Leavey">Leavey</option>
          <option value="Mccarthy">temp_loc2</option>
          <option value="The Village">temp_loc3</option>
          <option value="Tommy Trojan">temp_loc4</option>
        </select>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Tailgate Start Time</h4>
            <select ref={start_time} name="start_time" id="start_time">
              <option value="8:00am">10:00am</option>
              <option value="9:00am">temp_time</option>
              <option value="10:00am">temp_time</option>
              <option value="11:00am">temp_time</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Tailgate End Time</h4>
            <select ref={end_time} name="end_time" id="end_time">
              <option value="3:00pm">3:00pm</option>
              <option value="2:00pm">temp_time</option>
              <option value="1:00pm">temp_time</option>
              <option value="12:00pm">temp_time</option>
            </select>
          </div>
        </div>
        <h4>Number of Guests</h4>
        <input
          ref={num_guests}
          style={{ width: "75px" }}
          type="number"
          name="num_guests"
          step="1"
          placeholder="20"
        ></input>
        <h4>Short Description</h4>
        <input
          ref={short_desc}
          type="text"
          style={{ width: 500, height: 175 }}
          name="short_desc"
          id="short_desc"
        />
      </div>
      <input
        type="button"
        class="button"
        value="Submit"
        onClick={(e) => handleCreate(e)}
      />{" "}
      {/* Do something to submit data */}
    </div>
  );
}
