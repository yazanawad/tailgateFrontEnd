import { useEffect, useState } from "react";
import "./CreateTailgate.css";
import { getUser } from "../../api";

function ProfilePage(props) {
  const { setLogin, userID } = props;
  const [name, setName] = useState("Tommy Trojan");
  const [role, setRole] = useState("Student");
  const [username, setUsername] = useState("TommyTrojan");

  const signOut = () => {
    setLogin(false);
  };
  useEffect(() => {
    const x = async () => {
      console.log(userID.current);
      const u = await getUser(userID.current);

      setName(u.FirstName);
      setRole(u.UserType);
      setUsername(u.UserName);
    };
    x();
  }, []);
  const deleteAccount = () => {};

  return (
    <div class="contain">
      <h3>Username</h3>
      <p>{username}</p>
      <h3>Name</h3>
      <p>{name}</p>
      <h3>Designation</h3>
      <p>{role}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input type="button" value="Sign Out" onClick={signOut} />
      </div>
    </div>
  );
}

export default ProfilePage;
