import "./CreateTailgate.css";
import { useRef } from "react";

export default function CreateTailgate(props) {
  const { setLogin } = props;

  const signOut = () => {
    setLogin(false);
  };
  const tailgate_name = useRef(null);
  const tailgate_loc = useRef(null);
  const start_time = useRef(null);
  const end_time = useRef(null);
  const num_guests = useRef(null);
  const short_desc = useRef(null);
  const more_info = useRef(null);
  const handleCreate = (event) => {
    event.preventDefault();
    console.log(tailgate_name.current.value);
    console.log(tailgate_loc.current.value);
    console.log(start_time.current.value);
    console.log(end_time.current.value);
    console.log(num_guests.current.value);
    console.log(short_desc.current.value);
    console.log(more_info.current.value);
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
          <option value="temp_loc1">temp_loc1</option>
          <option value="temp_loc2">temp_loc2</option>
          <option value="temp_loc3">temp_loc3</option>
          <option value="temp_loc4">temp_loc4</option>
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
              <option value="stime1">10:00am</option>
              <option value="stime2">temp_time</option>
              <option value="stime3">temp_time</option>
              <option value="stime4">temp_time</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Tailgate End Time</h4>
            <select ref={end_time} name="end_time" id="end_time">
              <option value="etime1">3:00pm</option>
              <option value="etime2">temp_time</option>
              <option value="etime3">temp_time</option>
              <option value="etime4">temp_time</option>
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
        <h4>More Info</h4>
        <input
          ref={more_info}
          type="text"
          style={{ width: 500, height: 175 }}
          name="more_info"
          id="more_info"
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
