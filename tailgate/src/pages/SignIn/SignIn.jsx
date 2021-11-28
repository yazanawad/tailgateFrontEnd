import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function SignIn(props) {
  const { setLogin } = props;
  const handleLogin = () => {
    setLogin(true);
  };
  return (
    <>
      <h1>Landing Page</h1>
      <label for="username">Username</label>
      <input type="text" name="username" id="username" />
      <label for="username">Password</label>
      <input type="text" name="password" id="password" />
      <input type="button" value="Submit" onClick={() => handleLogin()} />
    </>
  );
}
