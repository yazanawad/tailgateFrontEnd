import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useRef } from 'react';

export default function CreateAccount(props) {
  
    let navigate = useNavigate();
    const username = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const designation = useRef(null);

    const { setLogin } = props;
    const handleCreate = (e) => {
      e.preventDefault();
      console.log(username.current.value);
      console.log(password.current.value);
      console.log(name.current.value);
      console.log(designation.current.value);
      navigate("/");
    };
    return (
      <div className="contain">
        <h1>Create Account</h1>
        <label for="username">Username</label><br/>
        <input ref={username} type="text" name="username" id="username" /><br/>
        <label for="password">Password</label><br/>
        <input ref={password} type="text" name="password" id="password" /><br/>
        <label for="name">Name</label><br/>
        <input ref={name} type="text" name="name" id="name" /><br/>
        <label for="designation">Designation</label><br/>
        <select ref={designation} name="designation" id="designation">
              <option value="Student">Student</option>
              <option value="Alumni">Alumni</option>
              <option value="Faculty">Faculty</option>
        </select><br/>
        <input type="button" value="Create Account" onClick={(e) => handleCreate(e)}/>
      </div>
    );
  }