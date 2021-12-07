import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useRef } from "react";
import image from "./drake.jpg";
import { login } from "../../api";
import "./SignIn.css";
export default function SignIn(props) {
  const username = useRef(null);
  const password = useRef(null);
  let navigate = useNavigate();
  const { setLogin } = props;
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);
    let isValid = await login(username.current.value, password.current.value);
    console.log("isValid: " + isValid);
    if (isValid) {
      console.log("loggin in");
      setLogin(true);
    } else alert("Invalid Login");
  };
  const handleGuest = (e) => {
    e.preventDefault();
    navigate("/viewGuestTailgate");
  };
  return (
    <div className="contain">
      <h1>Welcome to the USC Football Tailgaiting Reservation System!</h1>
      <label for="username">Username</label>
      <br />
      <input ref={username} type="text" name="username" id="username" />
      <br />
      <label for="password">Password</label>
      <br />
      <input ref={password} type="text" name="password" id="password" />
      <br />
      <input
        className="buttonStyle"
        type="button"
        value="Sign In"
        onClick={(e) => handleLogin(e)}
      />
      <br />
      <input
        className="buttonStyle"
        type="button"
        value="Create Account"
        onClick={() => navigate("/createAccount")}
      />
      <br />
      <input
        className="buttonStyle"
        type="button"
        value="Continue as Guest"
        onClick={(e) => handleGuest(e)}
      />
      <br />
      <img src={image} alt="Drake" />;
    </div>
  );
}
