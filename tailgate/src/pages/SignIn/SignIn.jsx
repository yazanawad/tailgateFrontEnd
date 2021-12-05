import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import { useRef } from 'react';

export default function SignIn(props) {
  const username = useRef(null);
  const password = useRef(null);
  let navigate = useNavigate();
  const { setLogin } = props;
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);
    setLogin(true);
  };
  const handleGuest = (e) => {
    e.preventDefault();
    setLogin(true);
  };
  return (
    <div className="contain">
      <h1>Welcome to the USC Football Tailgaiting Reservation System!</h1>
      <label for="username">Username</label><br/>
      <input ref={username} type="text" name="username" id="username" /><br/>
      <label for="password">Password</label><br/>
      <input ref={password} type="text" name="password" id="password" /><br/>
      <input type="button" value="Sign In" onClick={(e) => handleLogin(e)} /><br/>
      <input type="button" value="Create Account" onClick={() => navigate("/createAccount")} /><br/>
      <input type="button" value="Continue as Guest" onClick={(e) => handleGuest(e)} />
    </div>
  );
}