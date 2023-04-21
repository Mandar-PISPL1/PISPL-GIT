import React from 'react'
import { NavLink } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ImCheckmark } from "react-icons/im";
export default function UspSection(props) {
    const buttonstyle = {
        color: "#0d2366",
        backgroundColor: "#49dab5",
        fontSize: "20px",
        padding:"0 1rem",
        height: "3rem",
        borderRadius: "5px",
        border: "0px",
        margin: "0px auto",
        display: " block",
        margin: "0 auto",
    }
    return (
        <>
            <div style={{ backgroundColor: "#0d2366", height: "80vh", display: "flex", alignItems: "center" }}>
                <div style={{ padding: "3rem 0rem", width: "100%" }}>

                    <h1 className=" text-center py-3" style={{ fontWeight: "700", color: "white" }}>{props.heading}</h1>
                    {props.heading_value && <p className=" text-center py-3" style={{ color: "white" }}>{props.heading2}</p>}
                    <div className='phone text-white d-flex justify-content-center my-3'>
                        <p className='mx-2'><ImCheckmark color='#49dab5' size="1.4rem" className='mx-2'/>{props.data1}</p>
                        <p className='mx-2'><ImCheckmark color='#49dab5' size="1.4rem"  className='mx-2'/>{props.data2}</p>
                        <p className='mx-2'><ImCheckmark color='#49dab5' size="1.4rem" className='mx-2' />{props.data3}</p>
                        {props.dataValue && <p className='mx-2'><ImCheckmark color='#49dab5' size="1.4rem"  className='mx-2'/>{props.data4}</p>}

                    </div>
                    <button style={buttonstyle}><NavLink to="/contact" style={{ color: "#0d2366" }}>{props.button} <HiArrowNarrowRight /></NavLink></button>
                </div>
            </div>
            
        </>
    )
}
