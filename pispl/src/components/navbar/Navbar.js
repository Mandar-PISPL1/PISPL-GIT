import React, { useState } from 'react'
import { BiCaretDown } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    function handleDropdownClick() {
        setIsOpen(false);
      }
  return (
    <>
    <header style={{position:"fixed"}}>
        <div className="container-fluid d-flex align-items-center py-3
        " >
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
                                        <NavLink to="/our-services/translation-services-india/" onClick={handleDropdownClick}>Translation Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/our-services/transcription-services-india/" onClick={handleDropdownClick}>Transcription Services</NavLink>
                                    </li>
                                    <li className="dropdown-link" >
                                        <NavLink to="/our-services/localization-services/" onClick={handleDropdownClick}>Localization Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/our-services/voiceover-services-india/" onClick={handleDropdownClick}>Voice over Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/our-services/dubbing-services/" onClick={handleDropdownClick}>Dubbing Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/our-services/ai-dubbing-services-in-india/" onClick={handleDropdownClick}>AI Dubbing Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/our-services/video-subtitling-services/" onClick={handleDropdownClick}>Video Subtitling Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/our-services/video-remote-interpretation-services/" onClick={handleDropdownClick}>Interpretation Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/our-services/content-writing-services-in-india/" onClick={handleDropdownClick}>Content Writing Services</NavLink>
                                    </li>
                                    <li className="dropdown-link">
                                        <NavLink to="/our-services/video-creation-service-in-india/" onClick={handleDropdownClick}>Video creation Services</NavLink>
                                    </li>
                                   
                                    <div className="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link" style={{'--i': 1}} >
                        <NavLink to="/about" onClick={handleDropdownClick}>About Us</NavLink>
                        </li>
                        <li className="nav-link" style={{'--i': 1}} >
                        <NavLink to="/our-clients/" onClick={handleDropdownClick}>Clients</NavLink>
                        </li>
                        <li className="nav-link" style={{'--i': 1}}>
                        <NavLink to="/blog" onClick={handleDropdownClick}>Blogs</NavLink>
                        </li>
                        <li className="nav-link" style={{'--i': 1}}>
                        <NavLink to="/join-us" onClick={handleDropdownClick}>Join Now</NavLink>
                        </li>
                        <li className="nav-link"style={{'--i': 1}}>
                        <NavLink to="/contact-us" onClick={handleDropdownClick}>Contact</NavLink>
                        </li>
                    </ul>
                </div>

                
            </div>

            <div className='whatsapp'>
                <a href='https://wa.me/+919136109881/?text=I%20am%20interested%20to%20know%20more%20about%20services%20offered%20by%20Parikh%20Info%20Solutions%20Pvt.%20Ltd.' style={{color: "#fff", padding: "10px 20px", backgroundColor: "#25D366", borderRadius: "45px"}}><BsWhatsapp/> Whatsapp</a>
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
