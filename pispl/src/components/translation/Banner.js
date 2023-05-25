import React from 'react'
import { NavLink } from "react-router-dom";
import arr from '../services_content'
import Lottie from 'lottie-react';
import { FaBook } from "react-icons/fa";
import BrochurePopup from './BrochurePopup';

// import arr from "translation"
export default function Banner(props) {
    const buttonstyle = {
        color: "#0d2366",
        backgroundColor: "#49dab5",
        fontSize: "20px",
        width: "19rem",
        height: "3rem",
        borderRadius: "5px",
        border: "0px",
    }
    const index = props.index; // index of array of services_content
    return (
        <>

            <div className='container-fluid py-3' id="top" style={{ backgroundColor: "var(--mainColor)", color: "var(--textColor)" }}>
                <div className='row align-items-center' style={{ margin: "4% 8%" }} >
                    <div className='col-md-7 justify-content-center align-items-center '>
                        {props.upperpara && <p className='mb-0 fw-light'>OUR MISSION IS TO</p>}
                        <h1 className='fw-bold pb-3'>{arr[index].name_of_service}</h1>
                        <div className='mb-2' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
                        <p className='py-2 fw-light'>{arr[index].content1}</p>
                        <p className='py-2 fw-light'>{arr[index].content2}</p>
                        <p className='py-2 fw-light'>{arr[index].content3}</p>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" style={buttonstyle}>Download Free Brochure <FaBook /></button>
                        <br/><br/>
                        <NavLink to="/"><span className='fw-light text-danger'>Home</span></NavLink> &#187;  <span className='fw-light'>{arr[index].service_title}</span>
                    </div>
                    <div className='col-md-5 d-flex justify-content-center '>
                        <div className=''  >
                            {!props.flag && <Lottie animationData={props.lottie} style={{ height: "364px", width: "100%" }} />}
                            {props.flag && <img src={props.b} alt='banner ' style={{ height: "456px", maxWidth: "456px" }}></img>}
                        </div>
                    </div>
                </div>
            </div>

            <BrochurePopup/>

        </>
    )
}
