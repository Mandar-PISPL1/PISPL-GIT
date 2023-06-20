import React ,{useEffect} from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import voiceover_lottie from './voiceover_lottie.json'
import brands from './brands'
import TopBrandSection from '../../translation/TopBrandSection'
import UspSection from '../../translation/UspSection'
import img from "../../assets/Voice-Over.png"
import img1 from '../../assets/Simultaneous-Interpretation-voice-over-service.png'
import arr from './TypesOfVoiceService-data'
import Benefits2 from './Benefits2';
import {arr1,arr2} from './Benefits-data'
import TypesOfVoiceServices from './TypesOfVoiceServices';
import img2 from '../../assets/Age-Specific.jpg'
import faqs from './FAQContent'
import FAQ from '../../translation/FAQ'

export default function VoiceOver() {

  useEffect(() => {
    document.title='Professional Voice Over Services In India | Voice Over For Youtube Videos'
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
      <Banner index={3} lottie={voiceover_lottie} breadCrumb={true} brochure={true}/>
      <div className='myskew'></div>
      {/* The Best Voice for your Business */}
      <div className="container py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <div className="col-md-7 col-12">
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >JOIN HANDS WITH THE TOP VOICE OVER PROVIDERS</p>
            <h1 className='text-start m-3 ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>The Best Voice for your Business</h1>
            <div className='my-4 mx-3' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start m-3 normal-text' >Our crew flaunts one of the most professional voice actors and the best voice over artists around the world; the industry has to offer. We want our clients to have the edge over their competitors with superior quality.<br /><br />
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
          <h3 className='text-center m-3 ml-2 h1' style={{ fontWeight: "700" }}>Why Voice Over Services for your business?</h3>
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
          <h3 className='text-center ml-2 h1' style={{ color: "#0d2366", fontWeight: "700" }}>Why Choose Parikh Info Solutions for Professional Voice Over Services?</h3>
          <div className="col-md-7 col-12 my-4">
            <p className='text-start m-3 normal-text' >Being the best company for voice over services in India, our narration artists and <strong>professional voice actors</strong> have a fabulous command of the language, and they know how to deliver the dialogue. We consider a variety of requests, for which we have a diversified talent pool of professionals.<br /><br />
              Different tones of voice are required for different videos. For an educational video inwardly focused and factual is required however, a motivational video would require a charming and assertive voice.

            </p>
          </div>
          <div className="col-md-5 col-12 my-4" style={{ maxHeight: "200px", maxWidth: "315px" }}>
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

      
       {/* Top Brand Section */}
       <div className="repon py-3 px-md-5" style={{ textAlign: "center", margin: "3rem auto",backgroundColor:"#f6f6f6" }}>
        <h3 className='text-center m-5 h1' style={{ color: "#0d2366", fontWeight: "700" }}>We are the Voices behind these Top Brands</h3>
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



      {/* Types of Voice-Over Services We Offer */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <h1 className='text-center ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>Types of Voice-Over Services We Offer</h1>
          {/* <div className='text-center my-4' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div> */}
          <p className='text-center normal-text'>Adhering to different needs, our voice over company support <a href="https://parikhinfosolutions.com/blog/benefits-of-using-a-professional-voice-over-service/" className='text-danger' >diverse and unique voice-overs</a>. We add a personal touch to your voiceovers by providing you with age-specific voices that suit your needs..<br /><br />
          Be it a corporate video requiring a firm voice, or a pleasing voice for a children's video, we have got everything covered in our package. Keeping it up with the requirements along with a convenient process, our professional voice over services in India helps you by making the process & requirement of voice-over hassle-free.

            </p>
            {/* box-shadow:  */}
            {
              arr.map((element)=>{
                return (
                  <TypesOfVoiceServices img={element.img} title={element.title} content={element.content}/>
                )
              })
            }
            
        </div>
      </div>


      
      {/* One of the Best Voice Over Companies! */}
      <div style={{height:"7rem",width:"100%",zIndex:"-1",transform:"skew(1deg,-2.9deg)",transformOrigin:"left top",position:"relative",backgroundColor:"#0d2366",top:"7rem"}}></div>

      <div className='container-fluid h1 d-flex justify-content-center align-items-center' style={{backgroundColor:'#0d2366',color:"white",height:"7rem"}}>
          <h2>One of the Best Voice Over Companies!</h2>
      </div>

      <div style={{height:"7rem",width:"100%",zIndex:"-1",transform:"skew(1deg,2.9deg)",transformOrigin:"left bottom",position:"relative",backgroundColor:"#0d2366",top:"-7rem"}}></div>
      {/* Content */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <div className='col-md-3 text-center' >
            <img src={img2}  style={{height:"132px",width:"132px"}}></img>
          </div>
          <div className='col-md-9 text-start'>
          <h3 className=' ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>We entertain age-specific voice-over for specific needs.</h3>
          <p className='text-start normal-text'>Adhering to different needs, we support diverse and unique voice-overs. We add a personal touch to your voice overs by providing you with age-specific voices that suit your needs. Be it a corporate video requiring a firm voice, or a pleasing voice for children's video, we have got everything covered in our package.</p><br/>
          <h3 className=' ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>Other characteristics we excel in:</h3>
          <p className='text-start normal-text'>Our narration artists and professional voice actors have a fabulous command over the language, and they know how to deliver the dialogue. We consider a variety of requests, for which we have a diversified talent pool of professionals. Different tones of voices are required for different videos. For an educational video inwardly focused and factual is required however, a motivational video would require a charming and assertive voice.</p><br/>
          <p className='text-start normal-text'>With the right tone and the speaker, you can fill even the dullest video full of life. With the cheerful and friendly tone of voice, you can easily attract children into watching your video, at the same time you will need a dynamic and assertive voice for a company's presentation. We assign you with the perfect voice-over artist to fit your requirements at cost-effective rates.</p>

          </div>
            
        </div>
      </div>


      {/* USP section */}
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

      <div className='container p-md-5'>
            <h4 className='text-center h1 fw-bold mb-4' style={{color: "#0D2366"}}>Frequently Asked Questions:</h4>
            <div className='row justify-content-center'>
            <div class="accordion col-md-10 col-12" id="accordionExample">

        {
          faqs.map((element) =>{
            return (
             
              <FAQ que={element.que} no={element.no} ans={element.ans}/>
              
            )
          })
        }
        </div>
            </div>
        </div>

    </>
  )
}
