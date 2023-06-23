import React from 'react'
import { NavLink } from "react-router-dom";
export default function SuccessPage() {
  return (
    <>
      <div className='container-fluid d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: "var(--mainColor)", color: "var(--textColor)" ,height:"400px" }} >
        <div className='d-flex justify-content-center align-items-center flex-column' style={{ padding: "30px 0px" }}>
          <h1 className='fw-bold text-center' style={{ fontSize: "45px" }}>Thank you for signing up!</h1>
          <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
        </div>
      </div>
      <div className="myskew"></div>
      <div className='d-flex justify-content-center align-items-center mx-md-0 mx-3' style={{height:"200px"}}>
        <p style={{fontSize:"20px",color:"#0d2366",maxWidth:"800px",textAlign:"center"}}>
          Our team members are eager to work with you.
          We will review your application and get in touch with you <b>shortly</b>.
          <br/>
          <NavLink to='/'><u>BACK TO HOME PAGE</u></NavLink>

        </p>
      </div>




    </>
  )
}
