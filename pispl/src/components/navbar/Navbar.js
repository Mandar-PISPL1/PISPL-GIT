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
    <header >
        <div className="container-fluid d-flex align-items-center py-3
        " style={{position:"sticky"}}>
            {/* <input type="checkbox" name="" id="check"/> */}
            <input type="checkbox" id="check" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
            
            <div className="logo-container">
                <div  style={{color: "white", display: "flex", flexDirection: "row" }} >
                    <NavLink to="/">
                    <img src="https://parikhinfosolutions.com/wp-content/uploads/2023/01/logo-desktop.webp" alt="Logo" width="55" height="55"  /></NavLink>
                        <div style={{ color: "white", margin:"auto"}}>
                        <NavLink to="/"><p className='h6 ms-2 text-light'>Parikh info Solution Pvt. Ltd. <br /><span className='small'>Localization & globalization</span></p></NavLink>
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
                                        <NavLink to="/#/translation" onClick={handleDropdownClick}>Translation Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/#/transcription" onClick={handleDropdownClick}>Transcription Services</NavLink>
                                    </li>
                                    <li className="dropdown-link" >
                                        <NavLink to="/#/localization" onClick={handleDropdownClick}>Localization Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/#/voice-over" onClick={handleDropdownClick}>Voice over Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/#/dubbing" onClick={handleDropdownClick}>Dubbing Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/#/ai-dubbing" onClick={handleDropdownClick}>AI Dubbing Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/video-subtitling" onClick={handleDropdownClick}>Video Subtitling Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/#/interpretation" onClick={handleDropdownClick}>Interpretation Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/#/content-writing" onClick={handleDropdownClick}>Content Writing Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/#/video-creation" onClick={handleDropdownClick}>Video creation Services</NavLink>
                                    </li>
                                   
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link" style={{'--i': 1}} >
                        <NavLink to="/#/about" onClick={handleDropdownClick}>About Us</NavLink>
                        </li>
                        <li className="nav-link" style={{'--i': 1}} >
                        <NavLink to="/#/clients" onClick={handleDropdownClick}>Clients</NavLink>
                        </li>
                        <li className="nav-link" style={{'--i': 1}}>
                        <NavLink to="/#/blogs" onClick={handleDropdownClick}>Blogs</NavLink>
                        </li>
                        <li className="nav-link" style={{'--i': 1}}>
                        <NavLink to="/#/join-now" onClick={handleDropdownClick}>Join Now</NavLink>
                        </li>
                        <li className="nav-link"style={{'--i': 1}}>
                        <NavLink to="/#/contact" onClick={handleDropdownClick}>Contact</NavLink>
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
