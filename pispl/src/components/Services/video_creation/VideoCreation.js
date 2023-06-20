import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import myimage from '../../assets/Video-Creation-Banner.png'
import img from '../../assets/Video-Creation-Image-Banner-02.png'
import img1 from '../../assets/Arrow-Image.png'

import img2 from '../../assets/High-Quality.png'
import img3 from '../../assets/Team-of-Experts.png'
import img4 from '../../assets/Faster-Turnaround.png'
import img5 from '../../assets/Cost-Efficient.png'
import img6 from '../../assets/Detail-Oriented.png'
import img7 from '../../assets/Video-Creation-Handshake-Image.jpg'
export default function VideoCreation() {
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
    
}
  useEffect(() => {
    document.title='Video Creation Services In India | Explainer Video & Whiteboard Animation Video Creation'
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner index={9} b={myimage} flag={true} breadCrumb={true} brochure={true}/>
      <div className='myskew'></div>


    <div className='container py-4 mx-md-2'>
      <div className="row px-md-5 mx-md-5 m-0">
        <h3 className='text-start m-3 ml-2 h1' style={{ color: "#0d2366", fontWeight: "700" }}>Choose The Best Explainer Video Services</h3>
        <div className='my-4 mx-4 d-block' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
      </div>
    </div>
    <div className='container py-0 mx-md-2'>
        <div className='row mx-md-5 mx-0 px-3' >
          <div className='col-md-6 col-12 px-md-5 mx-md-0 mb-3'>
            <div className='rounded border border-secondary' style={{ color: "#696969", padding: "30px" }}>
              <h1 className='text-center' style={{ fontSize: "30px", color: "#0d2366" }}>1.<u> Whiteboard Video</u></h1>
              <p>One of the most popular types of videos, whiteboard video is used to make complex topics understandable in creative way -just like how your teacher used to explain in school with a chalk and board. We can deliver a high-quality whiteboard video of 1-4 minutes with effective animation, visuals, creative content, and an appropriate voice-over that will deliver the right message and captivate your audience.</p>
            </div>
          </div>
          <div className='col-md-6 col-12 px-md-5 mx-md-0 mb-3'>
            <div className='rounded border border-secondary' style={{ color: "#696969", padding: "30px" }}>
              <h1 className='text-center' style={{ fontSize: "30px", color: "#0d2366" }}>2.<u>Explainer Video</u></h1>
              <p>
                Elevate your brand's presence with creative visuals, immaculate presentation and voice-over with a detailed explainer video. Explainer videos can be used to explain certain topics, about products or services and to create brand awareness. We can create the perfect 2-5 minute explainer video with precise information and unique content to deliver a high-quality video for your target audience.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Our Video Creation Process */}

      <div className="container py-4 mx-md-2" style={{ marginTop: "80px" }}>
        <div className="row px-md-5 mx-md-5 m-0">
          <div className="col-md-7 col-12">
            <h3 className='text-start m-3 ml-2 h1' style={{ color: "#0d2366", fontWeight: "700" }}>Our Video Creation Process</h3>
            <div className='my-4 mx-3' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start m-3 normal-text' >A video to have a long-lasting impact should be short, unique, and attention-grabbing. Our team of experts make this possible with a creative process that will strongly represent your brand and make it stand out. We at Parikh Info Solutions follow this video creation process to ensure the production of flawless, detail-oriented and quality video.
            </p>
          </div>

          
          <div className="col-md-5 col-12" style={{ maxheight: "322px", maxWidth: "456px" }}>
            <img src={img} style={{ height: "100%", width: "100%" }}></img>
          </div>


          {/* process */}
          <div>
            <div style={{ color: "#0d2366", border: "2px dashed #0d2366", borderRadius: "20px", padding: "20px 40px", marginTop: "80px" }}>
              <h2>1. Research</h2>
              <p>Meticulous research of the topic and subject as per the client’s requirements. We take appropriate inputs from clients to build a seamless process.</p>
            </div>
            <div className='text-center my-3' >
              <img src={img1}></img>
            </div>

            <div style={{ color: "#0d2366", border: "2px dashed #0d2366", borderRadius: "20px", padding: "20px 40px" }}>
              <h2>2. Script Writing</h2>
              <p>The expert writers develop precise and detailed scripts considering the needs of the targeted audience. We ensure to create a script that even makes the complex topics understandable.</p>
            </div>
            <div className='text-center my-3' >
              <img src={img1}></img>
            </div>

            <div style={{ color: "#0d2366", border: "2px dashed #0d2366", borderRadius: "20px", padding: "20px 40px" }}>
              <h2>3. Client's Final Approval</h2>
              <p>Once the script has been approved, the voice-over is done accordingly. A suitable human voice with accurate language dialects and accents is chosen as per the client’s requirements.</p>
            </div>
            <div className='text-center my-3' >
              <img src={img1}></img>
            </div>

            <div style={{ color: "#0d2366", border: "2px dashed #0d2366", borderRadius: "20px", padding: "20px 40px" }}>
              <h2>4. Voice-Over</h2>
              <p>The expert writers develop precise and detailed scripts considering the needs of the targeted audience. We ensure to create a script that even makes the complex topics understandable.</p>
            </div>
            <div className='text-center my-3' >
              <img src={img1}></img>
            </div>

            <div style={{ color: "#0d2366", border: "2px dashed #0d2366", borderRadius: "20px", padding: "20px 40px", marginBottom: "80px" }}>
              <h2>5. Video Creation</h2>
              <p>After the voice-over, the creative team will initiate the process of video creation. Relevant animation and visuals are well-timely put in to create a high-quality appealing video.</p>
            </div>


          </div>

        </div>
      </div>
      {/* Why Choose Us for Video Creation? */}
      <div className='container-fluid py-5 d-flex align-items-center' style={{ backgroundColor: "#0d2366"}}>
        <div className="row px-md-5 m-md-5 m-0">
          <h3 className='text-start m-3 ml-2 h1' style={{ color: "White", fontWeight: "700" }}> Why Choose Us for Video Creation?</h3>
          <div className='my-2 mx-4' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
          <div className='d-flex flex-wrap '>
            <div className='width100 text-center my-4' style={{ width: "20%" }}>
              <img src={img2}></img>
            </div>
            <div className='width100 text-center my-4' style={{ width: "20%" }}>
              <img src={img3}></img>
            </div>
            <div className='width100 text-center my-4' style={{ width: "20%" }}>
              <img src={img4}></img>
            </div>
            <div className='width100 text-center my-4' style={{ width: "20%" }}>
              <img src={img5}></img>
            </div>
            <div className='width100 text-center my-4' style={{ width: "20%" }}>
              <img src={img6}></img>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid py-4' style={{color:"#0d2366", margin: "80px 0 0 0"}}>
        <div className="row px-md-5 mx-md-5 m-0" style={{border:"2px dashed #0d2366"}}>
          <div className='col-md-2 col-12 text-center my-4'>
            <img src={img7}></img>
          </div>
          <div className='col-md-8 col-12 text-center d-flex align-items-center'>
              <h2>Engage your Audience, Raise Awareness & Build Trust with Our Video Creation Services.</h2>
          </div>
          <div className='col-md-2 col-12 text-center my-4'>
            <img src={img7}></img>
          </div>
        </div>
      </div>

      <div className='text-center my-5'>
        <NavLink to="/contact"><button style={buttonstyle}> GET A QUOTE <i aria-hidden="true" class="fas fa-arrow-alt-circle-right"></i></button></NavLink>
      </div>

    </>
  )
}
