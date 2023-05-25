import React from 'react'
import Banner from '../../translation/Banner'
import myimage from '../../assets/AI-Dubbing-Services-Hero-Image.png'
import { useEffect } from 'react';
import img from '../../assets/AI-Dubbing-Services-Image.png'
export default function AiDubbing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner index={5} b={myimage} flag={true} />
      <div className='myskew'></div>

      {/* Benefits of AI Dubbing - Powered by Humans*/}


      <div className='container py-4 mx-md-2'>
        <div className='row  mx-md-5 m-0'>
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Benefits of AI Dubbing - Powered by Humans</h1>

          <div className='d-flex flex-wrap justify-content-around' >

            <div className=' mx-md-2 myphonewidth'  style={{width:"17%"}}>
              <h4 style={{ fontSize: "22px" }}><u>Voice Modulation</u></h4>
              <div style={{ backgroundColor: "#49dab5", color: "white" }}>
                <p style={{ padding: "17px 13px" }}>The voice is tuned to deliver a pleasant human sounding voice with perfect pronunciation & nuances.</p>
              </div>
            </div>
            <div className=' mx-md-2 myphonewidth'  style={{width:"17%"}}>
              <h4 style={{ fontSize: "22px" }}><u>Voice Morphing</u></h4>
              <div style={{ backgroundColor: "#0d3266", color: "white" }}>
                <p style={{ padding: "17px 13px" }}>Each stem voice can be altered to create additional voices in various languages.</p>
              </div>
            </div>
            <div className=' mx-md-2 myphonewidth'  style={{width:"17%"}}>
              <h4 style={{ fontSize: "22px" }}><u>Fast-Turnaround</u></h4>
              <div style={{ backgroundColor: "#49dab5", color: "white" }}>
                <p style={{ padding: "17px 13px" }}>Get faster hassle free results in comparison to traditional studio voice dubbing and production.</p>
              </div>
            </div>
            <div className=' mx-md-2 myphonewidth'  style={{width:"17%"}}>
              <h4 style={{ fontSize: "22px" }}><u>Integrated Solution</u></h4>
              <div style={{ backgroundColor: "#0d3266", color: "white" }}>
                <p style={{ padding: "17px 13px" }}>End-to-end customized dubbing solutions with translation & localization services in various voices to choose from.</p>
              </div>
            </div>
            <div className=' mx-md-2 myphonewidth' style={{width:"17%"}} >
              <h4 style={{ fontSize: "22px" }}><u>Reduced Cost</u></h4>
              <div style={{ backgroundColor: "#49dab5", color: "white" }}>
                <p style={{ padding: "17px 13px" }}>Save studio and voice-over artist costs by choosing automated human-powered voice services.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Industries We Cover */}
      <div className='container py-4 mx-md-2'>
        <div className='row px-md-5 mx-md-5 m-0'>
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Industries We Cover</h1>

          <p>At Parikh Info Solutions, we offer high-quality dubbing services across industries like Entertainment, media, animation, documentaries, eLearning, Corporate, Gaming, Advertising, and many more.</p>

          <div className='col-md-7 col-12 d-flex justify-content-center ' style={{ maxHeight: "373px ", maxWidth: "493px" }}>
            <img src={img} style={{ height: "100% ", width: "100%" }}></img>
          </div>
          <div className='col-md-5 col-12 d-flex align-items-center justify-content-centers my-5'>
            <div style={{border:"2px dashed #49dab5", padding:"20px"}}>
              <div>
                <p><h2><i aria-hidden="true" class="fas fa-dot-circle" style={{color:"#0d2366",fontSize:"medium",position: "relative",bottom: "6px",right: "10px"}}></i>Media & Entertainment</h2></p>
                <p><h2><i aria-hidden="true" class="fas fa-dot-circle" style={{color:"#0d2366",fontSize:"medium",position: "relative",bottom: "6px",right: "10px"}}></i>Corporate</h2></p>
                <p><h2><i aria-hidden="true" class="fas fa-dot-circle" style={{color:"#0d2366",fontSize:"medium",position: "relative",bottom: "6px",right: "10px"}}></i>Educational Training</h2></p>
                <p><h2><i aria-hidden="true" class="fas fa-dot-circle" style={{color:"#0d2366",fontSize:"medium",position: "relative",bottom: "6px",right: "10px"}}></i>Gaming</h2></p>
              </div>

            </div>
          </div>

        </div>


      </div>
    </>
  )
}
