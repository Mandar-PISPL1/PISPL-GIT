import React from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
// import arr from "./services_content"
import translation_service from './translation_service.json'
import TopBrandSection from '../../translation/TopBrandSection'
import brands from './brands'

import UspSection from '../../translation/UspSection'
export default function Translation() {
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
      {/* Top Brands Section */}
      <div className="repon" style={{ textAlign: "center", margin: "3rem auto", textAlign: "center" }}>
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

      {/* USP section */}
      <UspSection
        heading="Get Your Effective Translation Today!"
        data1="Multiple languages covered"
        data2="Per Word Rate Structure"
        data3="On-Time Delivery"
        button="Start Translating"
        />
        <div style={{backgroundColor:"#49dab5"}}>
          <p className='text-white text-center my-0 py-3 fs-6'>Are You Looking For Transcription Services? <NavLink to="/transcription">Read More.</NavLink></p>
        </div>

    </>
  )
}
