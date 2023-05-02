import React from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
// import arr from "./services_content"
import translation_service from './translation_service.json'
import TopBrandSection from '../../translation/TopBrandSection'
import brands from './brands'
import { useEffect } from 'react';
import UspSection from '../../translation/UspSection'
import Benefits from '../../translation/Benefits';
import arr from './BenefitsContent'
export default function Translation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // import '../../App.css'
  const mystyle = {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap"
  }
  // a={translation_service} lottie file json


  return (
    <>
      <Banner index={0} lottie={translation_service} />
      {/* Content */}
      <div className='container py-4 mx-md-2'>
        <div className='row px-md-5 mx-md-5 m-0'>
          <div className="col-md-7 col-12">
            <p style={{ color: "#0d2366", fontWeight: "300" }}>PERFECT UNDERSTANDING OF LANGUAGE</p>
            <h1 style={{ color: "#0d2366", fontWeight: "700" }}>Speak Like a Local With your Audience!</h1>
            <p style={{ color: "#0d2366", fontWeight: "400", fontSize: "18px" }}>Translation services are the need of the hour for every business expanding in different regions of India. It is necessary for them to go beyond the language barriers and interact with the targeted audience. We help you break the language barrier and communicate with your customers in their native lingo with our professional translation services company.</p>

          </div>
          <div className="col-md-5 col-12" style={{ maxHeight: "460px", maxWidth: "460px" }}>
            <img src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/Translation-01.png" alt="" height="100%" width="100%" />
          </div>
        </div>
        <div className='row px-md-5'>
          <div className="col-md-6 col-12 mx-md-5" style={{ maxHeight: "350px", maxWidth: "350px" }}>
            <img src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/Translation-03-2.png" alt="" height="100%" width="100%" />
          </div>
          <div className="col-md-6 col-12">
            <div style={{ color: "#0d2366", fontWeight: "400", fontSize: "18px" }}>
              <p >Our experts are well versed in the needs of customers based in India in terms of the type of content they want. Thus, as a global translation company, we give our audience what perfectly resonates with them while ensuring the cultural context of the targeted audience based in India.</p>
              <p>We understand the importance of regional languages in every industry. Thus, we provide you with the highest quality translation services with a team that masters your industry’s knowledge and techniques. Grammar, tones, essence, meaning, jargon, everything will be taken into consideration to provide you with a high-standard translation services in India.</p>
            </div>

          </div>
        </div>
      </div>
      {/* Top Brands Section */}
      <div className="repon" style={{ textAlign: "center", margin: "3rem auto" }}>
        <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Brands We Work With</h1>
        <div className='container-fluid'>
          <div className='' style={mystyle}>
            {
              brands.map((element) => {
                return (
                  <TopBrandSection sour={element.link} />
                )
              })
            }
          </div>
        </div>
      </div>
      {/* End of Top Brands Section */}

      {/* Benefits */}
      <div className='container py-4 mx-md-2'>
        <h2 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }} >Benefits of Our Translation Services</h2>
        <div className='row px-md-5 mx-md-5 m-0'>
        {
          arr.map((element) =>{
            return (
             
                <Benefits img={element.img} title={element.title} content={element.content}/>
              
            )
          })
        }


        </div>

      </div>
      {/* <Benefits/> */}
      {/* USP section */}
      <UspSection
        heading="Get Your Effective Translation Today!"
        data1="Multiple languages covered"
        data2="Per Word Rate Structure"
        data3="On-Time Delivery"
        button="Start Translating"
      />
      <div style={{ backgroundColor: "#49dab5" }}>
        <p className='text-white text-center my-0 py-3 fs-6'>Are You Looking For Transcription Services? <NavLink to="/transcription">Read More.</NavLink></p>
      </div>

    </>
  )
}
