import React,{ useEffect }  from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import transcription_lottie from './transcription_lottie.json'
import brands from './brands'
import TopBrandSection from '../../translation/TopBrandSection'
import UspSection from '../../translation/UspSection'
export default function Transcription() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const mystyle={
    display:"flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap"
  }
  return (
    <>
      <Banner index={1} lottie={transcription_lottie} />
      {/* Top Brand Section */}
      <div className="repon" style={{ textAlign: "center", margin: " 3rem auto" }}>
        <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Join Our Happy Customers</h1>
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
        heading="Get Your 100 % Human Transcription"
        data1="Native Transcribers"
        data2="Hassel-Free Process"
        data3="Accuracy Guaranteed"
        button="Get Your Transcription"
        />
        <div style={{backgroundColor:"#49dab5"}}>
          <p className='text-white text-center my-0 py-3 fs-6'>Are you looking for professional translation services company? <NavLink to="/translation">Read More.</NavLink></p>
        </div>
        
    </>
  )
}
