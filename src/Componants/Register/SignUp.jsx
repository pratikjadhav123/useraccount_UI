import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


const SignUp = () => {
  const [name, setName]= useState("")
  const [phoneNo, setPhoneNo]= useState("")
  const [address, setAddress]= useState("")
   

  const handleName = (e) =>{
    setName(e.target.value)
  }

  const handlePhoneNo = (e) =>{
    setPhoneNo(e.target.value)
  }

  const handleAddress = (e)=>{
    setAddress(e.target.value)

  }
   

  const handleApi =() =>{
    const data ={
      Name:name,
      PhoneNo:phoneNo,
      Address:address,
      IsActive: 1
    }

    const url ="https://localhost:44370/api/Test/SignUp";
    axios.post(url,data)
    .then((result) =>{ 
      alert(result.data);
    }).catch((error)=>{
      alert(error);
    })
  }

  return (
    <>
    <div className="signup template d-flex justify-content-center align-items-center  vh-100 bg-gray ">
      <div className="form_container p-5 rounded bg-white">
      <form >
        <h3 className="text-center">Sign Up</h3>
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
          value={phoneNo}
          onChange={handlePhoneNo}
            type="tel"
            placeholder="Enter PhoneNo"
            className="form-control"/>
        </div>
        <div className="mb-2">
          <label htmlFor="Address">Address</label>
          <input
          value={address}
          onChange={handleAddress}
            type="address"
            placeholder="Enter Address"
            className="form-control"
          />
        </div>
        {/* <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input
          value={password}
          onChange={handlePassword}
            type="password"
            placeholder="Enter password"
            className="form-control"
          />
        </div> */}
        <div className="d-grid">
           <button className="btm btn-primary" onClick={() => handleApi() }>Sign Up</button>   
        </div>
        <p className="text-end mt-2">
          Already Registered <Link to="/Login" className="ms-2">Sign In</Link>
        </p>
      </form>
      </div>
    </div>
  </>
  )
}

export default SignUp