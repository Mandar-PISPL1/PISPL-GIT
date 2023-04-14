import React from 'react'
import arr from '../services_content'
import Lottie from 'lottie-react';
import { FaBook } from "react-icons/fa";

// import arr from "translation"
export default function Banner(props) {
    const buttonstyle={
        color:"#0d2366",
        backgroundColor:"#49dab5",
        fontSize:"20px",
        width:"22rem",
        height:"3rem",
        borderRadius:"5px",
        border:"0px",
    }
    const a=props.index;
    return (
        <>

            <div className='container-fluid py-3' style={{backgroundColor:"var(--mainColor)",color:"var(--textColor)"}}>
                <div className='row align-items-center' style={{margin:"0 8%",height:"70vh"}} >
                    <div className='col-md-7 justify-content-center align-items-center '>
                        <h1 className='fw-bold py-3'>{arr[a].name_of_service}</h1>
                        <div style={{width:"40px",backgroundColor:"#49dab5",height:"5px"}}></div>
                        <p className='py-4'>{arr[a].content}</p>
                        <p>adarsh</p>
                        <button style={buttonstyle}>Download Free Brochure <FaBook/></button>
                    </div>
                    <div className='col-md-5 d-flex justify-content-center '>
                        <div className='' style={{height:"364px",width:"364px"}}>
                            <Lottie animationData={props.a} />
                            <img src={props.b}></img>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
