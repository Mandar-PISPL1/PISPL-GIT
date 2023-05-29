import React from 'react'
import { NavLink } from 'react-router-dom'
export default function FreeLancer() {
    const buttonstyle = {
        color: "#0d2366",
        backgroundColor: "#49dab5",
        fontSize: "20px",
        width:"240px",
        height: "3rem",
        borderRadius: "5px",
        border: "0px",
        padding: "6px 27px",
        margin: "1.2rem"
    }
    return (
        <>
            <div className='container-fluid py-3' style={{ backgroundColor: "var(--mainColor)", color: "var(--textColor)" }}>
                <div className='d-flex justify-content-center align-items-center flex-column' style={{ padding: "60px 0px" }}>
                    <h1 className='fw-bold text-center' style={{ fontSize: "45px" }}>Freelancing Opportunities</h1>
                    <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>


                </div>
            </div>
            <div className="conatiner py-4 mx-md-2">
                <div className="row px-md-5 mx-md-5 m-0">
                    <h1 className='text-center m-3 ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>You Are a</h1>
                    <div className="col-md-3 col-12 text-center">
                        <NavLink to='/freelancer-translator'><button style={buttonstyle}>Translator  <i aria-hidden="true" class="fas fa-language"></i></button></NavLink>
                    </div>
                    <div className="col-md-3 col-12 text-center">
                        <NavLink to='/freelancer-transcriber'><button style={buttonstyle}>Transcriber  <i aria-hidden="true" class="fas fa-headset"></i></button></NavLink>
                    </div>
                    <div className="col-md-3 col-12 text-center">
                        <NavLink to='/freelancer-vo-dubbing-artist'><button style={buttonstyle}>VO/Dub Artist  <i aria-hidden="true" class="fas fa-microphone-alt"></i></button></NavLink>
                    </div>
                    <div className="col-md-3 col-12 text-center" >
                        <NavLink to='/freelancer-interpreter'><button style={buttonstyle}>Interpreter  <i aria-hidden="true" class="fas fa-headset"></i></button></NavLink>
                    </div>
                </div>
            </div>
            

        </>
    )
}
