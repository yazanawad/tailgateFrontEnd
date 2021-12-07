import "./CreateTailgate.css";

function ProfilePage(props) {

  const { setLogin } = props;

  const signOut = () => {
    setLogin(false);
  };

  const deleteAccount = () => {};

  return (
    <div class="contain">
      <h3>Username</h3>
      <p>Tommy Trojan</p>
      <h3>Name</h3>
      <p>Tommy Trojan</p>
      <h3>Designation</h3>
      <p>Student</p>
      <div style={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
        <input type="button" value="Sign Out" onClick={signOut} />
        <input type="button" value="Delete Account" onclick={deleteAccount}/>
      </div>
    </div>
  );
}

export default ProfilePage;
