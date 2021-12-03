import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useRef } from 'react';

export default function CreateAccount(props) {
    console.log('Hello');
    let navigate = useNavigate();
    const user = useRef(null);
    const { setLogin } = props;
    return (
      <div className="contain">
        <h1>Create Account</h1>
        <label for="username">Username</label><br/>
        <input onChange={(e)=>{user.current=e.target.value; console.log(user.current)}} type="text" name="username" id="username" /><br/>
        <label for="username">Password</label><br/>
        <input type="text" name="password" id="password" /><br/>
        <label for="name">Name</label><br/>
        <input type="text" name="name" id="name" /><br/>
        <label for="designation">Designation</label><br/>
        <input type="text" name="designation" id="designation" /><br/>
        <input type="button" value="Create Account" onClick={() => navigate("/")}/>
      </div>
    );
  }