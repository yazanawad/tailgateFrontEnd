import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

export default function SignIn(props) {
  let navigate = useNavigate();
  const { setLogin } = props;
  const handleLogin = () => {
    setLogin(true);
  };
  return (
    <div className="contain">
      <h1>Welcome to the USC Football Tailgaiting Reservation System!</h1>
      <label for="username">Username</label><br/>
      <input type="text" name="username" id="username" /><br/>
      <label for="password">Password</label><br/>
      <input type="text" name="password" id="password" /><br/>
      <input type="button" value="Sign In" onClick={() => handleLogin()} /><br/>
      <input type="button" value="Create Account" onClick={() => navigate("/createAccount")} /><br/>
      <input type="button" value="Continue as Guest" onClick={() => handleLogin()} />
    </div>
  );
}