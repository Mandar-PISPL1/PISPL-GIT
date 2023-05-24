import React from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import voiceover_lottie from './voiceover_lottie.json'
import brands from './brands'
import TopBrandSection from '../../translation/TopBrandSection'
import UspSection from '../../translation/UspSection'
import img from "../../assets/Voice-Over.png"
import img1 from '../../assets/Simultaneous-Interpretation-voice-over-service.png'

import Benefits2 from './Benefits2';
import {arr1,arr2} from './Benefits-data'

export default function VoiceOver() {

  const mystyle = {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",

    flexWrap: "wrap"
  }
  return (
    <>
      <Banner index={3} lottie={voiceover_lottie} />
      <div className='myskew'></div>
      {/* The Best Voice for your Business */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <div className="col-md-7 col-12">
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >JOIN HANDS WITH THE TOP VOICE OVER PROVIDERS</p>
            <h1 className='text-start m-3 ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>The Best Voice for your Business</h1>
            <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >Our crew flaunts one of the most professional voice actors and the best voice over artists around the world; the industry has to offer. We want our clients to have the edge over their competitors with superior quality.<br /><br />
              We are one of the best voice over companies in India, we aim to offer the best results to our clients globally.
              <br /><br />Unlike other platforms, we take utmost care in appointing the perfect match with the right tone, depth and style for our artists, to deliver the best voice-overs services.


            </p>
          </div>
          <div className="col-md-5 col-12" style={{ maxHeight: "456px", maxWidth: "456px" }}>
            <img src={img} alt="voice over" style={{ height: "100%", width: '100%' }}></img>
          </div>
        </div>
      </div>

      {/* Why Voice Over Services for your business? */}

      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0" style={{ color: "#2a3d78" }}>
          <h1 className='text-center m-3 ml-2' style={{ fontWeight: "700" }}>Why Voice Over Services for your business?</h1>

          {
          arr1.map((element)=>{
              return (
                <Benefits2 img={element.img} title={element.title} content1={element.content1} content2={element.content2} content3={element.content3}/>
              )
          })
          }

          

          

          

          
        </div>
      </div>

      {/* Why Choose Parikh Info Solutions for Professional Voice Over Services? */}

      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <h1 className='text-center ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>Why Choose Parikh Info Solutions for Professional Voice Over Services?</h1>
          <div className="col-md-7 col-12">
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >Being the best company for voice over services in India, our narration artists and professional voice actors have a fabulous command of the language, and they know how to deliver the dialogue. We consider a variety of requests, for which we have a diversified talent pool of professionals.<br /><br />
              Different tones of voice are required for different videos. For an educational video inwardly focused and factual is required however, a motivational video would require a charming and assertive voice.

            </p>
          </div>
          <div className="col-md-5 col-12" style={{ maxHeight: "200px", maxWidth: "315px" }}>
            <img src={img1} alt="voice over" style={{ height: "100%", width: '100%' }}></img>
          </div>

          
          {
          arr2.map((element)=>{
              return (
                <Benefits2 img={element.img} title={element.title} content1={element.content1} content2={element.content2} content3={element.content3}/>
              )
          })
          }
          
        </div>
      </div>




      <div className="repon" style={{ textAlign: "center", margin: " 3rem auto" }}>
        <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Top Brands</h1>
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
      <UspSection
        heading="Provide Better User Engagement and Experience"
        data1="Time Sync"
        data2="Desired Fonts"
        data3="Precise Positioning"
        dataValue="true"
        data4="Affordable Rates"
        button="Get Your Subtitlies"

      />
      <div style={{ backgroundColor: "#49dab5" }}>
        <p className='text-white text-center my-0 py-3 fs-6'>Are you looking for interpretation services? <NavLink to="/interpretation">Read More.</NavLink></p>
      </div>
    </>
  )
}
