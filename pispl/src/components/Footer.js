import React from 'react'
import { FaHome } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { BiFontColor } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { FaClosedCaptioning } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";
import { BsFillFileEarmarkWordFill } from "react-icons/bs";
import { FaFileVideo } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";

import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsSkype } from "react-icons/bs";

import '../App.css';

export default function Footer() {
    return (
        <>
            <div className='footer pt-4'>
                <div className='container-fluid'>
                    <div className=' row'>
                        {/* 1st section */}
                        <div className='col-md-2 first-section'  >
                            <div className='d-flex align-items-center' > <img src="https://parikhinfosolutions.com/wp-content/uploads/2023/01/logo-desktop.webp" alt="PISPL Logo" width="90" height="95" className="d-inline-block align-text-top" />
                                <div style={{ backgroundColor: "#041020", color: "white", display: "flex", flexDirection: "column" }} >
                                    <p className='h6 ms-3 mt-3'>&copy; Parikh info Solution Pvt. Ltd. <br />
                                    2023 All Rights Reserved
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 2nd section */}
                        <div className='col-md-4 second-section my-3'>
                            <p className='fs-5 mb-0'>Find us on:</p>
                            <span className='my-icons'>
                                <BsInstagram color='#49dab5' />
                                <BsLinkedin color='#49dab5' />
                                <BsYoutube color='#49dab5' />
                                <BsFacebook color='#49dab5' />
                                </span>
                        </div>
                        {/* third section */}
                        <div className='col-md-5'>
                            <div className='certificate'>
                                <img width="162" height="162" src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-9001_2015.jpg" className="attachment-full size-full wp-image-5745 entered lazyloaded" alt="" data-lazy-srcset="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-9001_2015.jpg 200w, https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-9001_2015-150x150.jpg 150w" data-lazy-sizes="(max-width: 200px) 100vw, 200px" data-lazy-src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-9001_2015.jpg" data-ll-status="loaded" sizes="(max-width: 200px) 100vw, 200px" srcSet="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-9001_2015.jpg 200w, https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-9001_2015-150x150.jpg 150w" />
                            
                                <img  width="162" height="162" src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-27100_2015.jpg" className="attachment-full size-full wp-image-5746 entered lazyloaded" alt="" data-lazy-srcset="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-27100_2015.jpg 200w, https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-27100_2015-150x150.jpg 150w" data-lazy-sizes="(max-width: 200px) 100vw, 200px" data-lazy-src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-27100_2015.jpg" data-ll-status="loaded" sizes="(max-width: 200px) 100vw, 200px" srcSet="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-27100_2015.jpg 200w, https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-27100_2015-150x150.jpg 150w" />
                            
                                <img width="162" height="162" src="https://parikhinfosolutions.com/wp-content/uploads/elementor/thumbs/image-pn95k96glrglsmc6dwdojynp8trm0xcoq6iz3gs98w.png" title="Certificate 1" alt="Certificate 1" data-lazy-src="https://parikhinfosolutions.com/wp-content/uploads/elementor/thumbs/image-pn95k96glrglsmc6dwdojynp8trm0xcoq6iz3gs98w.png" data-ll-status="loaded" className="entered lazyloaded" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid pt-5 pb-2'>
                    <div className='row px-3'>
                        <div className='footer-col' style={{width:"20%"}}>
                            <h2>Quick Links</h2>
                            <ul className='p-0'>
                                <li> <a href="/"><FaHome/> Home</a> </li>
                                <li><a href="/"><BsInfoCircleFill/> About</a> </li>
                                <li> <a href="/"><FaUserTie/> Clients</a> </li>
                                <li><a href="/"><FaEdit/> Blog</a></li>
                                <li><a href="/"><BsFillTelephoneFill /> Contact</a></li>
                                <li><a href="/"><BsClipboard2CheckFill /> Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className='footer-col' style={{width:"20%"}}>
                            <h2>Services</h2>
                            <ul className='p-0'>
                                <li><a href="/translation"><BiFontColor /> Translation</a></li>
                                <li><a href="/transcription"><BsHeadphones /> Transcription</a></li>
                                <li><a href="/localization"><BsGlobe /> Localization</a></li>
                                <li><a href="/dubbing"><FaMicrophone /> Dubbing</a></li>
                                <li><a href="/videosubtitling"><FaClosedCaptioning /> Subtitling</a></li>
                                <li><a href="/voiceover"><FaMicrophoneAlt /> Voice Over</a></li>
                                <li><a href="/interpretation"><BsHeadset /> Interpretation (VRI)</a></li>
                                <li><a href="/contentwriting"><BsFillFileEarmarkWordFill /> Content Writing</a></li>
                                <li><a href="/videocreation"><FaFileVideo /> Video Creation</a></li>
                                <li><a href="/aidubbing"><FaMicrochip /> AI Dubbing</a></li>
                            </ul>
                        </div>

                        <div className='footer-col' style={{width:"25%"}}>
                            <h2>Contact Details</h2>

                            <p>316, Gemstar Commercial
                                Complex,<br />
                                Ramchandra Lane Extn,
                                Kanch Pada<br/>
                                Malad West, Mumbai 400064<br/>
                                Maharashtra, India</p>

                            <ul className='p-0'>
                                <li><a href="/"><BsFillTelephoneFill /> +91-9136109881</a></li>
                                <li><a href="/"><BsFillEnvelopeFill /> amitt@parikhinfosoltions.com</a></li>
                                <li><a href="/"><BsSkype /> amitt.parikh</a></li>
                            </ul>

                        </div>
                        <div className='footer-col' style={{width:"35%"}}>
                            <h2>Map</h2>
                            <div className='map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.0161570555002!2d72.838855!3d19.189556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x832a1bf6767b8c34!2sParikh%20Info%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1673971330090!5m2!1sen!2sus" title="Google Map" width="340" height="300" style={{ border: "0",width:"100%" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-lf-form-tracking-inspected-dzlr5a5ogex7boq2="true" data-lf-yt-playback-inspected-dzlr5a5ogex7boq2="true" data-lf-vimeo-playback-inspected-dzlr5a5ogex7boq2="true"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
