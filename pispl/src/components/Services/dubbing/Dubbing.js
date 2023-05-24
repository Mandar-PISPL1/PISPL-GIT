import React from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import brands from './brands'
import TopBrandSection from '../../translation/TopBrandSection'
import UspSection from '../../translation/UspSection'
import dubbing_lottie from './dubbing_lottie.json'
import { useEffect } from 'react';
import Benefits from '../../translation/Benefits';
import arr from './BenefitsContent'
import img from '../../assets/Dubbing-2.png'
import img2 from '../../assets/Simultaneous-Interpretation.png'
import DubbingServices from './DubbingServices';
import arr1 from './Dubbingservices-data'
export default function Dubbing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const mystyle = {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap"
  }
  return (
    <>
      <Banner index={4} lottie={dubbing_lottie} />
      <div className='myskew'></div>

      {/* We entertain all major languages across the globe! */}

      <div className="container py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">

          <div className="col-md-7 col-12">
            <p style={{ color: "#0d2366", fontWeight: "700" }}>ADAPT TO THE LOCAL CULTURE</p>
            <h1 className=' m-3 ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>We entertain all major languages across the globe!</h1>
            <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >
            Dubbing is a part of the post-production process that involves the synchronization of the new sound over the original sound dialogue to make it accessible for local audiences. Being an important part of the video that has a significant impact on the audience, it becomes crucial to dub the voice in a professional manner.<br /><br />

            While some audiences prefer other solutions like subtitles, closed captions, etc, the majority of the audience prefer dubbing. By providing the best dubbing services in India, Parikh info solutions already stands strong in the industry.<br /><br />

            With expertise in a number of languages, nationally & internationally, Parikh info solutions levels up the game of dubbing services in India as well as other countries.<br /><br />

            Dubbing not only localizes the voice for the audience but also takes care of translating the emotions that the original sound conveys.<br /><br />
            It adapts the authenticity that the original form consists of, translates it and offers it to the audience without dilution. With native expertise in the field, as a leading dubbing services provider globally, at Parikh info solutions we take care of the accuracy, reliability & relevance of the data.<br /><br />
            With a strong network of native linguists and experts to complete the job with dedication, we also take care of the synchronization, acting & narration important to translate the emotions along with ensuring the perfect timing, sound quality & best quality of all the dubbed voice overs.<br /><br />
            </p>

          </div>
          <div className="col-md-5 col-12 text-center" style={{maxHeight:"456px",maxWidth:"456px"}}>
            <img src={img} alt="" style={{maxHeight:"100%",maxWidth:"100%"}}/>
          </div>
        </div>
      </div>

      {/* Adapt To The Local Culture */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <h1 className='text-center m-3 ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>Adapt To The Local Culture</h1>
          <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }}>We entertain all major languages across the globe!</p>
          <div className="col-md-6 col-12">
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >We deliver the best dubbing services in every aspect. We make sure the dubbing artist suits the original speaker. Whether it may be the age, gender, tone, pitch, and depth of voice; all such criteria undergo strict inspection. At most competitive rates, our veteran dubbing artists never fail to convey emotion-filled dialogues..<br /><br />

            We cover world languages to offer dubbing services in all major Indian languages, Asian languages, European languages and African languages. Without confining to only mainstream languages, we also offer our services in local languages that can encourage business in remote local areas.</p>

          </div>
          <div className="col-md-6 col-12 text-center" >
            <img src={img2} alt="" style={{ MaxHeight: "200px", maxWidth: "315px" }}/>
          </div>
        </div>
      </div>





{/* Top brands */}

      <div className="repon" style={{ textAlign: "center", margin: " 3rem auto"}}>
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
      {/* Our Dubbing Services in India Provide */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <h1 className='text-center m-3 ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>Our Dubbing Services in India Provide</h1>
          <p className='text-center m-3' style={{ color: "#0d2366", fontWeight: "300" }}>Choose the best dubbing artists, with the right accent and dialects.</p>
      
          {
              arr1.map((element)=>{
                return (
                  <DubbingServices img={element.img} title={element.title} content={element.content}/>
                )
              })
            }
          
          

          
        </div>
      </div>
      {/* benefits content */}
      <div className='container py-4 mx-md-2'>
        <h2 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }} >Why Choose Parikh Info Solutions?</h2>
        <p className='px-md-5 mx-md-5 m-0 text-center' style={{color:"#2a3d78"}}>Give Your Viewers A Better Experience with us</p>
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
      <UspSection
        heading="Give Your Viewers A Better Experience"
        data1="Lip Syncing"
        data2="Clear Sound-Track"
        data3="Natural Accents"
        button="Start Your Dubbing Projects"
        />
        <div style={{backgroundColor:"#49dab5"}}>
                    <p className='text-white text-center my-0 py-3 fs-6'>Are you looking for transcription services? <NavLink to="/transcription">Read More.</NavLink></p>
        </div>
    </>
  )
}
