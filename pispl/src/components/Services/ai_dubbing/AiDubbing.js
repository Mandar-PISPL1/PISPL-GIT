import React from 'react'
import Banner from '../../translation/Banner'
import AIUniqueSection from './AIUniqueSection'
import myimage from '../../assets/AI-Dubbing-Services-Hero-Image.png'
import { useEffect } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import arr from './AIUniqueSectionContent'
import img from '../../assets/AI-Dubbing-Services-Image.png'
import img1 from '../../assets/Quality-Oriented.png'
import img2 from '../../assets/Years-of-Experience.png'
import img3 from '../../assets/Native-Experts.png'
import img4 from '../../assets/Hassle-Free-Process.png'
import img5 from '../../assets/Latest-Technology.png'


export default function AiDubbing() {
  const link = 'https://parikhinfosolutions.com/wp-content/uploads/2022/09/AI-Dubbing-Services-Background.png';
  useEffect(() => {
    document.title="Best AI Dubbing With Human-Like Voice In India"
    window.scrollTo(0, 0);
  }, []);

  const buttonstyle = {
    color: "#0d2366",
    backgroundColor: "#49dab5",
    fontSize: "20px",
    width: "14rem",
    height: "3rem",
    borderRadius: "5px",
    border: "0px",
  }

  return (
    <>
      <Banner index={5} b={myimage} flag={true} breadCrumb={true} brochure={true}/>
      <div className='myskew'></div>

      {/* What is AI-Dubbing? */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <div className="col-md-7 col-12">
            <h3 className='text-start mx-3 my-0 h1' style={{ color: "#0d2366", fontWeight: "700" }}>What is AI-Dubbing?</h3>
            <div className='my-4 mx-3' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start m-3 normal-text'>Parikh Info Solutions brings you one-of-a-kind voice-over services with the <a href="https://parikhinfosolutions.com/blog/what-is-ai-dubbing-how-does-it-work/" className='text-danger'>latest technology & human intelligence</a>.
              <br /><br />
              While traditional studio dubbing requires a lot of time, and space & can be overly expensive. The technology-based service offers unrealistic voice and poor pronunciation making it sound artificial.
              <br /><br />
              We bring you the AI automated cloud-based dubbing platform backed up by human expertise. The most unique & ideal platform, we will deliver high-quality voice solutions with accurate nuances & localised customization at affordable prices.
            </p>
            <button className='mx-3' data-bs-toggle="modal" data-bs-target="#exampleModal" style={buttonstyle}>Get A Quote <BsArrowRightCircle /> </button>
          </div>
          <div className="col-md-5 col-12 d-flex align-items-center justify-content-center">
            <iframe width="467" height="263" src="https://www.youtube.com/embed/qP2xf_YNIqE" title="Increase Your Audience Reach with our AI Dubbing Services! | Parikh Info Solutions Pvt. Ltd." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      {/* Types of Voice-Over Services We Offer */}
      <div className="conatiner py-4 mx-md-2" style={{margin: "40px 0", backgroundColor: "#DDE6F4"}}>
        <div className="row px-md-5 mx-md-5 m-0">
          <h3 className='text-center ml-2 h1' style={{ color: "#0d2366", fontWeight: "700" }}>What makes "AI Automated Dubbing" so unique?</h3>
            {
              arr.map((element)=>{
                return (
                  <AIUniqueSection title={element.title} content={element.content}/>
                )
              })
            }
            
        </div>
      </div>

      <div className='container-fluid w-100 my-5' style={{border: "2px dashed #0d2366"}}>
      </div>

      {/* Benefits of AI Dubbing - Powered by Humans*/}
      <div className='container py-4 mx-md-2 my-5 d-flex align-items-center' style={{ minHeight: "500px"}}>
        <div className='row  mx-md-5 m-0'>
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Benefits of AI Dubbing - Powered by Humans</h1>

          <div className='d-flex flex-wrap justify-content-around' >

            <div className=' mx-md-2 myphonewidth' style={{ width: "18%" }}>
              <h5 style={{ fontSize: "22px", fontWeight: "600", textAlign: "center", color: "#0d2366" }}><u>Voice Modulation</u></h5>
              <div style={{ backgroundColor: "#49dab5", color: "white" }}>
                <p style={{ padding: "17px 13px", fontSize: "18px" }}>The voice is tuned to deliver a pleasant human sounding voice with perfect pronunciation & nuances.</p>
              </div>
            </div>
            <div className=' mx-md-2 myphonewidth' style={{ width: "18%" }}>
              <h5 style={{ fontSize: "22px", fontWeight: "600", textAlign: "center", color: "#0d2366" }}><u>Voice Morphing</u></h5>
              <div style={{ backgroundColor: "#0d3266", color: "white" }}>
                <p style={{ padding: "17px 13px", fontSize: "18px" }}>Each stem voice can be altered to create additional voices in various languages.</p>
              </div>
            </div>
            <div className=' mx-md-2 myphonewidth' style={{ width: "18%" }}>
              <h5 style={{ fontSize: "22px", fontWeight: "600", textAlign: "center", color: "#0d2366" }}><u>Fast-Turnaround</u></h5>
              <div style={{ backgroundColor: "#49dab5", color: "white" }}>
                <p style={{ padding: "17px 13px", fontSize: "18px" }}>Get faster hassle free results in comparison to traditional studio voice dubbing and production.</p>
              </div>
            </div>
            <div className=' mx-md-2 myphonewidth' style={{ width: "18%" }}>
              <h5 style={{ fontSize: "22px", fontWeight: "600", textAlign: "center", color: "#0d2366" }}><u>Integrated Solution</u></h5>
              <div style={{ backgroundColor: "#0d3266", color: "white" }}>
                <p style={{ padding: "17px 13px", fontSize: "18px" }}>End-to-end customized dubbing solutions with translation & localization services in various voices to choose from.</p>
              </div>
            </div>
            <div className=' mx-md-2 myphonewidth' style={{ width: "18%" }} >
              <h5 style={{ fontSize: "22px", fontWeight: "600", textAlign: "center", color: "#0d2366" }}><u>Reduced Cost</u></h5>
              <div style={{ backgroundColor: "#49dab5", color: "white" }}>
                <p style={{ padding: "17px 13px", fontSize: "18px" }}>Save studio and voice-over artist costs by choosing automated human-powered voice services.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Why Choose Us? */}
      <div>
      <h3 className='text-center m-3 h1' style={{ color: "#0d2366", fontWeight: "700" }}>Why Choose Us?</h3>
      </div>
      <div style={{ backgroundImage: `url(${link})`,backgroundPosition:"center top",backgroundRepeat:"no-repeat"}} className='container-fluid py-4 height-phone'>
        <div className='row  mx-md-5 m-0'>
          <div className='d-flex flex-wrap justify-content-around' >
            <div className='col-md-2 col-12 text-center my-2'>
              <img className=" Ai-dub-phone" src={img1} style={{top:"181px"}}></img>
            </div>
            <div className='col-md-2 col-12 text-center my-2'>
              <img className="Ai-dub-phone " src={img2} style={{top:"124px"}}></img>
            </div>
            <div className='col-md-2 col-12 text-center my-2'>
              <img className="Ai-dub-phone " src={img3} style={{top:"181px"}}></img>
            </div>
            <div className='col-md-2 col-12 text-center my-2'>
              <img className=" Ai-dub-phone" src={img4} style={{top:"124px"}}></img>
            </div>
            <div className='col-md-2 col-12 text-center my-2'>
              <img className="Ai-dub-phone " src={img5} style={{top:"181px"}}></img>
            </div>
          </div>
        </div>
      </div>
      


      {/* Industries We Cover */}
      <div className='container-fluid py-4 mx-md-2'>
        <div className='row px-md-5 mx-md-5 m-0 justify-content-around'>
          <h3 className='text-center m-3 h1' style={{ color: "#0d2366", fontWeight: "700" }}>Industries We Cover</h3>

          <p className='normal-text'>At Parikh Info Solutions, we offer <a href="https://parikhinfosolutions.com/blog/5-ways-dubbing-services-can-help-you-grow-business/" className='text-danger'>high-quality dubbing services across industries</a> like Entertainment, media, animation, documentaries, eLearning, Corporate, Gaming, Advertising, and many more.</p>

          <div className='col-md-7 col-12 d-flex justify-content-center ' style={{ maxHeight: "373px ", maxWidth: "493px" }}>
            <img src={img} style={{ height: "100% ", width: "100%" }}></img>
          </div>
          <div className='col-md-5 col-12 my-5'>
            <div className=' d-flex align-items-center justify-content-center' style={{ border: "2px dashed #49dab5", padding: "20px" }}>
              <div>
                <h2 style={{ fontSize: "30px", color: "#0d2366" }}><i aria-hidden="true" class="fas fa-dot-circle" style={{ color: "#0d2366", position: "relative", bottom: "3px", right: "10px", fontSize: "20px" }}></i>Media & Entertainment</h2><br/>
                <h2 style={{ fontSize: "30px", color: "#0d2366" }}><i aria-hidden="true" class="fas fa-dot-circle" style={{ color: "#0d2366", position: "relative", bottom: "3px", right: "10px", fontSize: "20px" }}></i>Corporate</h2><br/>
                <h2 style={{ fontSize: "30px", color: "#0d2366" }}><i aria-hidden="true" class="fas fa-dot-circle" style={{ color: "#0d2366", position: "relative", bottom: "3px", right: "10px", fontSize: "20px" }}></i>Educational Training</h2><br/>
                <h2 style={{ fontSize: "30px", color: "#0d2366" }}><i aria-hidden="true" class="fas fa-dot-circle" style={{ color: "#0d2366", position: "relative", bottom: "3px", right: "10px", fontSize: "20px" }}></i>Gaming</h2>
              </div>

            </div>
          </div>

        </div>


      </div>
    </>
  )
}
