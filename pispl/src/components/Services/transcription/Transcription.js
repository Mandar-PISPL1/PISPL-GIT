import React,{ useEffect }  from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import transcription_lottie from './transcription_lottie.json'
import brands from './brands'
import TopBrandSection from '../../translation/TopBrandSection'
import UspSection from '../../translation/UspSection'
import Benefits from '../../translation/Benefits';
import arr from './BenefitsContent'
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
      <div className='myskew'></div>
      {/* Transform Your Multimedia to Definitive Text */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <div className="col-md-7 col-12">
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >WE WRITE THE WORDS YOU SPEAK!</p>
            <h1 className='text-start m-3 ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>Transform Your Multimedia to Definitive Text</h1>
            <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >Our team of professional transcribers ensures that the quality and essence of your files are retained. You can expect unparalleled, authentic texts; translated into a multitude of languages for widespread use. Be it any language, our experts pen down every sound, every word with precision.</p>
          </div>
          <div className="col-md-5 col-12">
          <iframe width="456" height="258" src="https://www.youtube.com/embed/ygJWdNwsyms" title="Budget Friendly Transcription Services in India - Parikh Info Solutions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
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

      {/* Benefits */}
      <div className='container py-4 mx-md-2'>
        <h2 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }} >Benefits of Our Transcription Services</h2>
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
