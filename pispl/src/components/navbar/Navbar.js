import React from 'react'
import { BiCaretDown } from "react-icons/bi";
export default function Navbar() {
  return (
    <>
    <header>
        <div className="container-fluid d-flex align-items-center py-3
        ">
            <input type="checkbox" name="" id="check"/>
            
            <div className="logo-container">
                <div  style={{color: "white", display: "flex", flexDirection: "row" }} >
                    <img src="https://parikhinfosolutions.com/wp-content/uploads/2023/01/logo-desktop.webp" alt="Logo" width="55" height="55"  />
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
                                        <a href="#">Translation Services</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Transcription Services</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Localization Services</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Voice over Services</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Dubbing Services</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">AI Dubbing Services</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Video Subtitling Services</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Interpretation Services</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Content Writing Services</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Video creation Services</a>
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
