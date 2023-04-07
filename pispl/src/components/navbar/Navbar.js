import React from 'react'
import { BiCaretDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
    <header>
        <div className="container-fluid d-flex align-items-center py-3
        ">
            <input type="checkbox" name="" id="check"/>
            
            <div className="logo-container">
                <div  style={{color: "white", display: "flex", flexDirection: "row" }} >
                    <NavLink to="#">
                    <img src="https://parikhinfosolutions.com/wp-content/uploads/2023/01/logo-desktop.webp" alt="Logo" width="55" height="55"  /></NavLink>
                        <div style={{ color: "white", margin:"auto"}}>
                            <p className='h6 ms-2 '>Parikh info Solution Pvt. Ltd. <br /><span className='small'>Localization & globalization</span>
                            </p>
                        </div>
                 
                </div>
            </div>

            <div className="nav-btn">
                <div className="nav-links">
                    <ul className="my-auto p-0">
                        <li className="nav-link" style={{'--i': 1}}>
                            <a href="#">Services <BiCaretDown/></a>
                            <div className="dropdown">
                                <ul>
                                    <li className="dropdown-link">
                                        <NavLink to="/translation">Translation Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/transcription">Transcription Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/localiztion">Localization Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/voiceover">Voice over Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/dubbing">Dubbing Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/aidubbing">AI Dubbing Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/videosubtitling">Video Subtitling Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/interpretation">Interpretation Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/contentwriting">Content Writing Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/videocreation">Video creation Services</NavLink>
                                    </li>
                                   
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link" style={{'--i': 1}} >
                            <a href="#">About Us</a>
                        </li>
                        <li className="nav-link" style={{'--i': 1}} >
                            <a href="#">Clients</a>
                        </li>
                        <li className="nav-link" style={{'--i': 1}}>
                            <a href="#">Blogs</a>
                        </li>
                        <li className="nav-link" style={{'--i': 1}}>
                            <a href="#">Join Now</a>
                        </li>
                        <li className="nav-link"style={{'--i': 1}}>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                
            </div>

            <div className="hamburger-menu-container">
                <div className="hamburger-menu">
                    <div></div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}
