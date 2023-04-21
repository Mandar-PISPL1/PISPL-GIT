import React from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import videosubtitling_lottie from './videosubtitling_lottie.json'
import TopBrandSection from '../../translation/TopBrandSection'
import brands from './brands'
import UspSection from '../../translation/UspSection'
export default function VideoSubtitling() {
  const mystyle = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap"
  }
  return (
    <>
        <Banner index={6} lottie={videosubtitling_lottie}/>
        <div className="repon" style={{ textAlign: "center", margin: " 3rem auto", textAlign: "center" }}>
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
