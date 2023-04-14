import React, { useState } from 'react'
import { BiCaretDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    function handleDropdownClick() {
        setIsOpen(false);
      }
  return (
    <>
    <header>
        <div className="container-fluid d-flex align-items-center py-3
        ">
            {/* <input type="checkbox" name="" id="check"/> */}
            <input type="checkbox" id="check" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
            
            <div className="logo-container">
                <div  style={{color: "white", display: "flex", flexDirection: "row" }} >
                    <NavLink to="/">
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
                                        <NavLink to="/translation" onClick={handleDropdownClick}>Translation Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/transcription" onClick={handleDropdownClick}>Transcription Services</NavLink>
                                    </li>
                                    <li className="dropdown-link" >
                                        <NavLink to="/localiztion" onClick={handleDropdownClick}>Localization Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/voiceover" onClick={handleDropdownClick}>Voice over Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/dubbing" onClick={handleDropdownClick}>Dubbing Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/aidubbing" onClick={handleDropdownClick}>AI Dubbing Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/videosubtitling" onClick={handleDropdownClick}>Video Subtitling Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/interpretation" onClick={handleDropdownClick}>Interpretation Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/contentwriting" onClick={handleDropdownClick}>Content Writing Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/videocreation" onClick={handleDropdownClick}>Video creation Services</NavLink>
                                    </li>
                                   
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link" style={{'--i': 1}} >
                            <a href="/">About Us</a>
                        </li>
                        <li className="nav-link" style={{'--i': 1}} >
                            <a href="/">Clients</a>
                        </li>
                        <li className="nav-link" style={{'--i': 1}}>
                            <a href="/">Blogs</a>
                        </li>
                        <li className="nav-link" style={{'--i': 1}}>
                            <a href="/">Join Now</a>
                        </li>
                        <li className="nav-link"style={{'--i': 1}}>
                            <a href="/">Contact</a>
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
