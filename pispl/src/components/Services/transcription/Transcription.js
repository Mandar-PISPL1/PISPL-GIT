import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import transcription_lottie from './transcription_lottie.json'
import brands from './brands'
import TopBrandSection from '../../translation/TopBrandSection'
import UspSection from '../../translation/UspSection'
import Benefits from '../../translation/Benefits';
import arr from './BenefitsContent'
import faqs from './FAQContent'
import FAQ from '../../translation/FAQ'

export default function Transcription() {
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
      <Banner index={1} lottie={transcription_lottie} breadCrumb={true}/>
      <div className='myskew'></div>
      {/* Transform Your Multimedia to Definitive Text */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <div className="col-md-7 col-12">
            <p className='text-start mx-3 my-0' style={{ color: "#0d2366", fontWeight: "300" }} >WE WRITE THE WORDS YOU SPEAK!</p>
            <h1 className='text-start mx-3 ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>Transform Your Multimedia to Definitive Text</h1>
            <div className='my-4 mx-3' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start m-3 normal-text'  >Our team of professional transcribers ensures that the quality and essence of your files are retained. You can expect unparalleled, authentic texts; translated into a multitude of languages for widespread use. Be it any language, our experts pen down every sound, every word with precision.</p>
          </div>
          <div className="col-md-5 col-12">
            <iframe width="456" height="258" src="https://www.youtube.com/embed/ygJWdNwsyms" title="Budget Friendly Transcription Services in India - Parikh Info Solutions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      {/* Top Brand Section */}
      <div className="repon py-3 px-md-5" style={{ textAlign: "center", margin: " 3rem auto",backgroundColor:"#f6f6f6" }}>
        <h1 className='text-center m-5' style={{ color: "#0d2366", fontWeight: "700" }}>Join Our Happy Customers</h1>
        <div className='container-fluid'>
          <div className='mb-5' style={mystyle}>
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
      


      {/* Benefits */}
      <div className='container py-4 mx-md-2'>
        <h2 className='text-center m-3 heading-text' style={{ color: "#0d2366", fontWeight: "700" }} >Benefits of Our Transcription Services</h2>
        <div className='row px-md-5 m-md-5 m-0'>
          {
            arr.map((element) => {
              return (

                <Benefits img={element.img} title={element.title} content={element.content} />

              )
            })
          }


        </div>

      </div>
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
        <h2 className='text-center m-3 heading-text' style={{ color: "#0d2366", fontWeight: "700" }} >Get Your Transcription Done in 4 Easy Steps</h2>
        <p className='text-center m-3 normal-text' >With skilled and proficient transcribers, you can expect a comprehensive breakdown of the entire audio/video file into a cognitive language.</p>
        </div>

      </div>

      <div style={{ height: "7rem", width: "100%", zIndex: "-1", transform: "skew(1deg,-2.9deg)", transformOrigin: "left top", position: "relative", backgroundColor: "#0d2366", top: "7rem" }}></div>
      <div className="conatiner-fluid py-4 " style={{ backgroundColor: "#0d2366" }}>
        <div className="row px-md-5 mx-md-5 m-0 align-items-center">
          

          <div className="col-md-3 col-12 " style={{ margin: "19px 0px" }}>
            <div className="d-flex flex-column rounded-5" style={{ backgroundColor: "white", width: "17rem", margin: "0 auto" }}>
              <h2 className='h1 text-center' style={{ color: "#49dab5", fontSize: "70px" }}>1</h2>
              <p className='text-center normal-text'>Analyze Source Audio Files & Instructions</p>
            </div>
          </div>

          <div className='col-md-3 col-12' style={{ margin: "19px 0px" }}>
            <div className=" d-flex flex-column rounded-5" style={{ backgroundColor: "white", width: "17rem", margin: "0 auto",height:"15rem",justifyContent:"center" }}>
              <h2 className='h1 text-center' style={{ color: "#49dab5", fontSize: "70px" }}>2</h2>
              <p className='text-center normal-text'>Transcription (Human or MT+Human) with/without time coding</p>
            </div>
          </div>
          <div className='col-md-3 col-12' style={{ margin: "19px 0px" }}>

            <div className=" d-flex flex-column rounded-5" style={{ backgroundColor: "white", width: "15rem", margin: "0 auto" ,height:"10rem",justifyContent:"center" }}>
              <h2 className='h1 text-center' style={{ color: "#49dab5", fontSize: "70px" }}>3</h2>
              <p className='text-center normal-text'>Proofreading / QA</p>
            </div>
          </div>

          <div className='col-md-3 col-12' style={{ margin: "19px 0px" }}>
            <div className=" d-flex flex-column rounded-5" style={{ backgroundColor: "white", width: "17rem", margin: "0 auto",height:"15rem",justifyContent:"center" }}>
              <h2 className='h1 text-center' style={{ color: "#49dab5", fontSize: "70px" }}>4</h2>
              <p className='text-center px-2 normal-text'>Finalize Transcription as per client specifications</p>
            </div>
          </div>
        </div>

      </div>
      <div style={{ height: "7rem", width: "100%", zIndex: "-1", transform: "skew(1deg,2.9deg)", transformOrigin: "left bottom", position: "relative", backgroundColor: "#0d2366", top: "-7rem" }}></div>

      <UspSection
        heading="Get Your 100 % Human Transcription"
        data1="Native Transcribers"
        data2="Hassel-Free Process"
        data3="Accuracy Guaranteed"
        button="Get Your Transcription"
      />
      <div style={{ backgroundColor: "#49dab5" }}>
        <p className='text-white text-center my-0 py-3 fs-6'>Are you looking for professional translation services company? <NavLink to="/translation" style={{color:"#0d2366"}}><u>Read More.</u></NavLink></p>
      </div>

      <div className='container p-5'>
        <h4 className='text-center h1 fw-bold mb-4' style={{ color: "#0D2366" }}>Frequently Asked Questions:</h4>
        <div className='row justify-content-center'>
          <div className="accordion col-md-10 col-12" id="accordionExample">

            {
              faqs.map((element) => {
                return (

                  <FAQ que={element.que} no={element.no} ans={element.ans} />

                )
              })
            }
          </div>
        </div>
      </div>

    </>
  )
}
