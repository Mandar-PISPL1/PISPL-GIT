import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import videosubtitling_lottie from './videosubtitling_lottie.json'
import TopBrandSection from '../../translation/TopBrandSection'
import brands from './brands'
import UspSection from '../../translation/UspSection'
import img1 from "../../assets/CC-1.png"
import img2 from '../../assets/Subtitle-Translation-Service.png'
import faqs from './FAQContent'
import FAQ from '../../translation/FAQ'
import img3 from '../../assets/Provides-Clarity-1.png'
import img4 from '../../assets/Engages-Audience-1.png'
import img5 from '../../assets/Maintains-Language-Essence-1.png'

export default function VideoSubtitling() {
  useEffect(() => {
    document.title='Best Multilingual Video Subtitling & Captioning Services'
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
      <Banner index={6} lottie={videosubtitling_lottie} breadCrumb={true}/>
      <div className='myskew'></div>

      {/* Get the Best Subtitles Translation for All Media */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <div className="col-md-7 col-12">
            <p className='text-start mx-3 my-0' style={{ color: "#0d2366", fontWeight: "300" }} >BEST VIDEO SUBTITLES FOR YOUR VIDEOS</p>
            <h3 className='text-start mx-3 ml-2 h1' style={{ color: "#0d2366", fontWeight: "700" }}>Get the Best Subtitles Translation for All Media</h3>
            <div className='my-4 mx-3' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start m-3 normal-text'>Our team consists of professional subtitlers and captioners who are native speakers and hold expertise in the target language. We will ensure to serve you a high-quality and detailed subtitles translation.
              <br /><br />
              With more than 50+ languages to caption and translate, we offer the best choice for your specifications. We have established a seamless process of subtitles translation in order to convey the right story to the audience.
              <br /><br />
              With our personnel of dedicated translators and caption experts, we ought to convey the meaning of each dialogue with befitting words. We offer video subtitling services in a wide variety of content including movies, TV shows, web series, webinars, e-learning courses, marketing videos and a lot more.
              <br /><br />
              We ensure to deliver the best subtitles translation at affordable pricing with great efficiency. Whatever is the clients' requirement, our language experts will ensure that the message is passed effectively and meet the expectations of the audience.
            </p>
          </div>
          <div className="col-md-5 col-12 d-flex justify-content-center align-items-center">
            <iframe width="456" height="258" src="https://www.youtube.com/embed/ygJWdNwsyms" title="Budget Friendly Transcription Services in India - Parikh Info Solutions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <p className='text-start m-3 normal-text'>Our project management team will make sure to deliver the best results. They will look after your work, generate a timeline and will stay connected to you for any doubts and guidance. We also ensure the finest production quality with excellent service. Our expertise range from video subtitling services to an extensive understanding of all aspects of <a href="https://parikhinfosolutions.com/blog/closed-captioning-for-the-win-why-subtitles-are-essential-for-video-content/" className='text-danger'>closed caption</a> and video subtitling. We assure to deliver smooth, error-free and affordable subtitling services in India.</p>
        </div>
      </div>


      {/* Subtitles Provided To Big Brands */}
      <div className="repon py-3 px-md-5" style={{ textAlign: "center", margin: "3rem auto",backgroundColor:"#f6f6f6" }}>
        <h3 className='text-center m-5 h1' style={{ color: "#0d2366", fontWeight: "700" }}>Subtitles Provided To Big Brands</h3>
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



      {/* Other Major Services */}
      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0 justify-content-around">
          <h3 className='text-center ml-2 h1' style={{ color: "#0d2366", fontWeight: "700" }}>Other Major Services</h3>

          {/* box-shadow:  */}
          <div className='col-md-5 col-12' style={{ color: "#2a3d78", margin: "50px 0px" }}>
            <div style={{ padding: '1.5rem', borderRadius: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)", height: '100%' }}>
              <div className='text-center pb-3'>
                <img src={img1} style={{ height: "200px", width: "315px" }} alt='Closed Captions (CC) Service'></img>
              </div>
              <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Closed Captions (CC)</h4>
              <p className='normal-text'>Closed captions or CC is a subtitles translation service that serves as an aid, especially for people with deaf and hard of hearing. In this type of video subtitling service, all the audio information, such as background,  sound effects, non-speech elements and speaker IDs are included in the captions.
                <br /><br />
                Closed captions cater to the need of a larger audience and we can help you reach them.
                <br /><br />
                With the best subtitling services in India, we provide high quality and low-cost subtitles translation with a fast turnaround in all media.
              </p>
            </div>
          </div>

          <div className='col-md-5 col-12' style={{ color: "#2a3d78", margin: "50px 0px" }}>
            <div style={{ padding: '1.5rem', borderRadius: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)", height: '100%' }}>
              <div className='text-center pb-3'>
                <img src={img2} style={{ height: "200px", width: "315px" }} alt='Video Subtitles Service'></img>
              </div>
              <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Video Subtitles</h4>
              <p className='normal-text'>Viewers all around the world like to enjoy subtitles in their native language. Thus, we create subtitles translations in multiple languages with 99% accuracy to suit the needs of your viewers.
                <br /><br />
                The subtitles should be accurate and timely placed in order to gain more audience. We ensure that the subtitle translations are customized according to the clients' requirements.
                <br /><br />
                Our team of language experts, translators and subtitlers work efficiently to not just mere translate the words but also add value to them.
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* benefits section */}
      <div className='container py-4 mx-md-2'>
        <h2 className='text-center m-3 h1' style={{ color: "#0d2366", fontWeight: "700" }} >Benefits of Subtitling Services In India</h2>
        <p className='px-md-5 mx-md-5 m-0 normal-text'>We are offering the best subtitling services in India to help you reach a wider audience. We provide expertise in translation, <a href="https://parikhinfosolutions.com/transcription-services-india/" className='text-danger'>transcription services</a> and localization to meet the interests of the target audience in their native language. With our video subtitling services, you can easily target viewers in another language, without missing the originality of your message.</p>
        <div className='row px-md-5 mx-md-5 m-4'>
            <div className='col-md-4 col-12 my-3' style={{ color: "#2a3d78" }}>
                <div className='text-center pb-3'>
                    <img src={img3} style={{ height: "71px", width: "71px" }}></img>
                </div>

                <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Language Flexibility</h4>
                <p className='normal-text'>According to the research, 91% of the audience prefer subtitles. Sometimes when dialogue is spoken fast or in different accents, it becomes difficult for the audience to understand what is spoken.<br/><br/>In such instances, subtitles translation helps the viewers better clarify the information. Our dedicated team consists of native language experts that offer video subtitles and closed captions.<br/><br/>We ensure to deliver high quality and cost-effective video subtitling services.</p>
            </div>

            <div className='col-md-4 col-12 my-3' style={{ color: "#2a3d78" }}>
                <div className='text-center pb-3'>
                    <img src={img4} style={{ height: "71px", width: "71px" }}></img>
                </div>

                <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Audience Engagement</h4>
                <p className='normal-text'>Online videos with subtitles translation provide better user engagement and experience. While watching a video in a sound-sensitive environment, subtitles can literally prove to be a boon for the viewers.<br/><br/>Our video subtitling services will keep the audience on track with dialogues while watching the videos.<br/><br/>Our team ensures to provide our clients with movie subtitles services in usa and top-notch subtitling services in USA at affordable prices with a fast turnout and with the minimum of fuss.</p>
            </div>

            <div className='col-md-4 col-12 my-3' style={{ color: "#2a3d78" }}>
                <div className='text-center pb-3'>
                    <img src={img5} style={{ height: "71px", width: "71px" }}></img>
                </div>

                <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Language Essence</h4>
                <p className='normal-text'>The audience often prefers watching videos in their original audio with English subtitles. The reason is that the translation of audio, if not done effectively, can ruin the viewers' experience. Such people prefer movie subtitles services in usa to enjoy the actual impact of delivered dialogues.<br/><br/>Our native language experts ensure to keep the original essence of the message with perfectly-synchronised subtitling.<br/><br/>We offer a complete package of video subtitling services, tailored according to the clients' requirements.</p>
            </div>
        </div>
      </div>





      {/* On-Demand Subtitles Customization */}
      <div style={{height:"10rem",width:"100%",zIndex:"-1",transform:"skew(1deg,-2.9deg)",transformOrigin:"left top",position:"relative",backgroundColor:"#0d2366",top:"7rem"}}></div>

      <div className='container-fluid h1 d-flex justify-content-center align-items-center' style={{backgroundColor:'#0d2366',color:"white",height:"10rem"}}>
          <h3 className='h1' style={{ fontWeight: "700" }}>On-Demand Subtitles Customization</h3>
      </div>

      <div style={{height:"10rem",width:"100%",zIndex:"-1",transform:"skew(1deg,2.9deg)",transformOrigin:"left bottom",position:"relative",backgroundColor:"#0d2366",top:"-10rem"}}></div>
      {/* Content and extensions */}
      <div className='container py-4 mx-md-2' style={{ marginTop: "-50px"}}>
        <div className='row px-md-5 mx-md-5 m-0'>
          <p className='normal-text'>Along with the exemplary subtitling services in India,  we also administer complete customization. You can choose the desired fonts, colour, size, opacity and a multitude of personalization features. We will be sending you the files at each stage of the process for you to review and assess, for complete analysis and transparency on our side. To support the industry, we offer our subtitles translation in various formats. Your organization can easily manoeuvre and select the desired format.
          <br /><br />
          Our subtitling services cater to a wide set of video content like movies, TV series, webinars, e-learning courses, marketing videos, explainers and a lot more. Whatever the type of project, our team enables a tailor-made professional subtitles translation to help you reach wider audiences and convey the message with utmost accuracy.</p>
          <br /><br />

          <div className='d-flex flex-wrap justify-content-around mt-5'>
            <div className=' mx-md-2 d-flex width50' style={{ width: "17%" }}>
              <div style={{ backgroundColor: "#49dab5", padding: "10px 10px", width: "100%", textAlign: "center", borderRadius: "51px", margin: "13px 8px" }}>
                <span style={{ color: "#0d2366", fontSize: "23px", fontWeight: "600" }}>[.srt]</span>
              </div>
            </div>
            <div className=' mx-md-2 d-flex width50' style={{ width: "17%" }}>
              <div style={{ backgroundColor: "#49dab5", padding: "10px 10px", width: "13rem", textAlign: "center", borderRadius: "51px", margin: "13px 8px" }}>
                <span style={{ color: "#0d2366", fontSize: "23px", fontWeight: "600" }}>[.scc]</span>
              </div>
            </div>
            <div className=' mx-md-2 d-flex width50' style={{ width: "17%" }}>
              <div style={{ backgroundColor: "#49dab5", padding: "10px 10px", width: "13rem", textAlign: "center", borderRadius: "51px", margin: "13px 8px" }}>
                <span style={{ color: "#0d2366", fontSize: "23px", fontWeight: "600" }}>[.mcc]</span>
              </div>
            </div>
            <div className=' mx-md-2 d-flex width50' style={{ width: "17%" }}>
              <div style={{ backgroundColor: "#49dab5", padding: "10px 10px", width: "13rem", textAlign: "center", borderRadius: "51px", margin: "13px 8px" }}>
                <span style={{ color: "#0d2366", fontSize: "23px", fontWeight: "600" }}>[.stl]</span>
              </div>
            </div>
            <div className=' mx-md-2 d-flex width100' style={{ width: "17%" }}>
              <div style={{ backgroundColor: "#49dab5", padding: "10px 10px", width: "100%", textAlign: "center", borderRadius: "51px", margin: "13px 8px" }}>
                <span style={{ color: "#0d2366", fontSize: "23px", fontWeight: "600" }}>[.ttml]</span>
              </div>
            </div>
          </div>


          <div className='d-flex flex-wrap justify-content-around mb-5'>
            <div className=' mx-md-2 d-flex width50' style={{ width: "17%" }}>
              <div style={{ backgroundColor: "#49dab5", padding: "10px 10px", width: "100%", textAlign: "center", borderRadius: "51px", margin: "13px 8px" }}>
                <span style={{ color: "#0d2366", fontSize: "23px", fontWeight: "600" }}>[.qt.txt]</span>
              </div>
            </div>
            <div className=' mx-md-2 d-flex width50' style={{ width: "17%" }}>
              <div style={{ backgroundColor: "#49dab5", padding: "10px 10px", width: "13rem", textAlign: "center", borderRadius: "51px", margin: "13px 8px" }}>
                <span style={{ color: "#0d2366", fontSize: "23px", fontWeight: "600" }}>[.txt]</span>
              </div>
            </div>
            <div className=' mx-md-2 d-flex width50' style={{ width: "17%" }}>
              <div style={{ backgroundColor: "#49dab5", padding: "10px 10px", width: "13rem", textAlign: "center", borderRadius: "51px", margin: "13px 8px" }}>
                <span style={{ color: "#0d2366", fontSize: "23px", fontWeight: "600" }}>[.vtt]</span>
              </div>
            </div>
            <div className=' mx-md-2 d-flex width50' style={{ width: "17%" }}>
              <div style={{ backgroundColor: "#49dab5", padding: "10px 10px", width: "13rem", textAlign: "center", borderRadius: "51px", margin: "13px 8px" }}>
                <span style={{ color: "#0d2366", fontSize: "23px", fontWeight: "600" }}>[.dfxp]</span>
              </div>
            </div>
            <div className=' mx-md-2 d-flex width100' style={{ width: "17%" }}>
              <div style={{ backgroundColor: "#49dab5", padding: "10px 10px", width: "100%", textAlign: "center", borderRadius: "51px", margin: "13px 8px" }}>
                <span style={{ color: "#0d2366", fontSize: "23px", fontWeight: "600" }}>[.cap]</span>
              </div>
            </div>

          </div>

        </div>
      </div>
      {/* USP section */}
      <UspSection
        heading="Provide Better User Engagement and Experience"
        data1="Time Sync"
        data2="Desired Fonts"
        data3="Precise Positioning"
        button="Get Your Subtitles"
      />
      <div style={{ backgroundColor: "#49dab5" }}>
        <p className='text-white text-center my-0 py-3 fs-6'>Are you looking for transcription services? <NavLink to="/transcription">Read More.</NavLink></p>
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
