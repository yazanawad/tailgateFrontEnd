import "./CreateTailgate.css"
export default function CreateTailgate(props) {
  const { setLogin } = props;

  const signOut = () => {
    setLogin(false);
  };

  return (
    <div className = "contain">
      <pre> <h3>Create Tailgates</h3> </pre>
      <div className = "left">
        <h4>Tailgate Name</h4>
        <input type="text" placeholder="Tailgate Name" name="tailgate_name" id="tailgate_name"/> 
        <h4>Tailgate Location</h4>
        <select name="tailgate_loc" value="Location" id="tailgate_loc">
          {/* <option value="" selected disabled hidden>Available Locations</option>  */}
          <option value="temp_loc1">temp_loc1</option>
          <option value="temp_loc2">temp_loc2</option>
          <option value="temp_loc3">temp_loc3</option>
          <option value="temp_loc4">temp_loc4</option>
        </select>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
          <div style={{display:"flex", flexDirection:"column"}}>
            <h4>Tailgate Start Time</h4>
            <select name="start_time" id="start_time">
              <option value="stime1">10:00am</option>
              <option value="stime2">temp_time</option>
              <option value="stime3">temp_time</option>
              <option value="stime4">temp_time</option>
            </select>
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <h4>Tailgate End Time</h4>
            <select name="end_time" id="end_time">
              <option value="etime1">3:00pm</option>
              <option value="etime2">temp_time</option>
              <option value="etime3">temp_time</option>
              <option value="etime4">temp_time</option>
            </select>
          </div>
        </div>
        <h4>Number of Guests</h4>
        <input style={{width:"75px"}}type="number" step="1" placeholder="20"></input>
        <h4>Short Description</h4>
        <input type="text" style={{width:500,height:175}} name="short_desc" id="short_desc"/> 
        <h4>More Info</h4>
        <input type="text" style={{width:500,height:175}} name="more_info" id="more_info"/> 
    </div>
    <input type="button" class="button" value="Submit" onClick={signOut} /> {/* Do something to submit data */}
    </div>
  );
}
