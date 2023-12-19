import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [name, setName]= useState("")
  const [phoneno, setPhoneNo]= useState("")
  
  const handleName = (e) =>{
    setName(e.target.value)
  }

  const handlePhoneNo = (e) =>{
    setPhoneNo(e.target.value)
  }
   
  const handleLogin =() =>{
      const url = "https://localhost:44370/api/Test/Login?Name="+name+"&PhoneNo="+phoneno;
    axios.get(url)
    .then((result) =>{ 
      alert(result.data);
    }).catch((error)=>{
      alert(error);
    })
  }
  return (
    <>
    <div className="login template d-flex justify-content-center align-items-center  vh-100 bg-primary ">
      <div className="form_container p-5 rounded bg-white">
      <form action="">
        <h3 className="text-center">Sign In</h3>
        <div className="mb-2">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={handleName}
            type="text"
            placeholder="Enter Name"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone">PhoneNo</label>
          <input
          value={phoneno}
          onChange={handlePhoneNo}
            type="tel"
            placeholder="Enter PhoneNo"
            className="form-control"/>
        </div>
        {/* <div className="mb-2">
          <input
            type="checkbox"
            className="custom-control custom-checkbox"
            id="check"
          />
          <label htmlFor="check" className="custom-input-lebel ms-2">
            Remember me
          </label>
        </div> */}
        <div className="d-grid">
           <button className="btm btn-primary" onClick={() => handleLogin() }>Sign In</button>   
        </div>
        <p className="text-end mt-2">
          Forgot <a href=" ">Password?</a> <Link to="/signup" className="ms-2">Sign up</Link>
        </p>
      </form>
      </div>
    </div>
  </>
   
  );
};

export default Login;
