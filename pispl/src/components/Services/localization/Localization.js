import React from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import localization_lottie from './localization_lottie.json'
import brands from './brands'
import TopBrandSection from '../../translation/TopBrandSection'
import UspSection from '../../translation/UspSection'
import { useEffect } from 'react';
import Benefits from '../../translation/Benefits';
import arr from './BenefitsContent'
import img from '../../assets/Software-Localization.png'
import img1 from '../../assets/Localization-01.png'
export default function Localization() {
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
      <Banner index={2} lottie={localization_lottie} />
      <div className='myskew'></div>

      {/* What is localization */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <h1 className='text-center m-3 ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>What is Localization?</h1>
          <div className="col-md-6 col-12">
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >Localization is the process of modifying a product to adapt to the needs of the audience in different regions. While translation services are often a key component, language localization includes local regulations and cultural differences in order to connect with the intended audience.<br /><br />

              The true skill of translating and localizing a document lies in adapting it to a format without changing its true meaning.<br /><br />

              We offer the best localization services in India at affordable prices and fast outcomes.</p>

          </div>
          <div className="col-md-6 col-12 text-center" style={{MaxHeight:"406px",maxWidth:"406px"}}>
            <img src={img1} alt="" style={{height:"100%",width:"100%"}}/>
          </div>
        </div>
      </div>

      {/* Go Global With Confidence */}
      <div className="container py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">

          <div className="col-md-6 col-12">
            <p></p>
            <h1 className=' m-3 ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>Go Global With Confidence</h1>
            <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >
              Localization services involve adding elements of native customs. This would make the experience more humanistic and natural. With all the information and instructions set in some foreign language, the viewers could feel a little overwhelmed.<br /><br />

              Precise localization is more than translating the text for the target audience. It includes graphics customization and Graphic User-Interface optimizations.<br /><br />

              All the various elements are engineered perfectly to meet the requirements of the users. We also ensure the finest language localization production quality with excellent service.<br /><br />

              Using effective localization services tools with master native language experts, we aid professionals to go global in their targeted language.<br /><br />
            </p>

          </div>
          <div className="col-md-6 col-12 text-center">
            <img src={img} alt="" />
          </div>
        </div>
      </div>

      {/* localization vs translation */}


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
      {/* benefits section */}
      <div className='container py-4 mx-md-2'>
        <h2 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }} >How Language Localization Services Companies Will Benefit?</h2>
        <div className='row px-md-5 mx-md-5 m-0'>
          {
            arr.map((element) => {
              return (

                <Benefits img={element.img} title={element.title} content={element.content} />

              )
            })
          }


        </div>

      </div>
      <UspSection
        heading="Go Local"
        heading_value="true"
        heading2="Attract New Traffic Like Never Before!"
        data1="Higher ROI"
        data2="Native Linguists"
        data3="Higher Search Rate"
        button="Localize Now"
      />
      <div style={{ backgroundColor: "#49dab5" }}>
        <p className='text-white text-center my-0 py-3 fs-6'>Are you looking for language interpreter? <NavLink to="/interpretation">Read More.</NavLink></p>
      </div>
    </>
  )
}
