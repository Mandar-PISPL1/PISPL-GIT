import React,{useEffect} from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import videosubtitling_lottie from './videosubtitling_lottie.json'
import TopBrandSection from '../../translation/TopBrandSection'
import brands from './brands'
import UspSection from '../../translation/UspSection'
import Benefits from '../../translation/Benefits';
import arr from './BenefitsContent'
export default function VideoSubtitling() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const mystyle = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap"
  }
  return (
    <>
        <Banner index={6} lottie={videosubtitling_lottie}/>
        <div className="repon" style={{ textAlign: "center", margin: " 3rem auto"}}>
        <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Subtitles Provided To Big Brands</h1>
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
      {/* benefits section */}
      <div className='container py-4 mx-md-2'>
        <h2 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }} >Benefits of Subtitling</h2>
        <p className='px-md-5 mx-md-5 m-0' style={{color:"#2a3d78"}}>We are offering the best movie subtitles services in usa, video interviews subtitles services in usa, to help you reach a wider audience. We provide expertise in translation and localization to meet the interests of the target audience in their native language. With our video subtitling services, you can easily target viewers in another language, without missing the originality of your message.</p>
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
        heading="Provide Better User Engagement and Experience"
        data1="Time Sync"
        data2="Desired Fonts"
        data3="Precise Positioning"
        button="Get Your Subtitlies"
        />
        <div style={{backgroundColor:"#49dab5"}}>
                    <p className='text-white text-center my-0 py-3 fs-6'>Are you looking for transcription services? <NavLink to="/transcription">Read More.</NavLink></p>
        </div>
    </>
  )
}
