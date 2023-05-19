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
