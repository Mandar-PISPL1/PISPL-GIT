import React from 'react'
import { NavLink } from "react-router-dom";
import Banner from '../../translation/Banner'
import translation_service from './translation_service.json'
import TopBrandSection from '../../translation/TopBrandSection'
import brands from './brands'
import { useEffect } from 'react';
import UspSection from '../../translation/UspSection'
import Benefits from '../../translation/Benefits';
import arr from './BenefitsContent'
import translation3 from "../../assets/Translation-03.png"
import arr1 from './WhyChooseParikh'
import faqs from './FAQContent'
import FAQ from '../../translation/FAQ'
import img1 from '../../assets/webinars.png'
import img2 from '../../assets/Translation-01.png'
import img3 from '../../assets/Translation-03-2.png'


export default function Translation() {
  useEffect(() => {
    document.title = 'Professional Translation Services In India | Language Translation Services'
    window.scrollTo(0, 0);
  }, []);
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
      <Banner index={0} lottie={translation_service} breadCrumb={true} />
      <div className='myskew'></div>
      {/* Content */}
      <div className='container py-4 mx-md-2'>
        <div className='row px-md-5 mx-md-5 m-0'>
          <div className="col-md-7 col-12">
            <span style={{ color: "#0d2366", fontWeight: "300" }}>PERFECT UNDERSTANDING OF LANGUAGE</span>
            <h2 style={{ color: "#0d2366", fontWeight: "700", fontSize: "40px" }}>Speak Like a Local With your Audience!</h2>
            <div className='my-4' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='normal-text'>Translation services are the need of the hour for every business expanding in different regions of India. It is necessary for them to go beyond the language barriers and interact with the targeted audience. We help you break the language barrier and communicate with your customers in their native lingo with our professional translation services company.</p>

          </div>
          <div className="col-md-5 col-12" style={{ maxHeight: "460px", maxWidth: "460px" }}>
            <img src={img2} alt="" height="100%" width="100%" />
          </div>
        </div>
        <div className='row px-md-5'>
          <div className="col-md-6 col-12 mx-md-5" style={{ maxHeight: "350px", maxWidth: "350px" }}>
            <img src={img3} alt="" height="100%" width="100%" />
          </div>
          <div className="col-md-7 col-12">
            <div className='normal-text'>
              <p>Our experts are well versed in the needs of customers based in India in terms of the type of content they want. Thus, as a global translation company, we give our audience what perfectly resonates with them while ensuring the cultural context of the targeted audience based in India.</p>
              <p>We understand the importance of regional languages in every industry. Thus, we provide you with the highest quality translation services with a team that masters your industry&apos;s knowledge and techniques. Grammar, tones, essence, meaning, jargon, everything will be taken into consideration to provide you with a high-standard translation services in India.</p>
            </div>

          </div>
        </div>
      </div>
      {/* Top Brands Section */}
      <div className="repon py-3 px-md-5" style={{ textAlign: "center", margin: "3rem auto", backgroundColor: "#f6f6f6" }}>
        <h1 className='text-center m-5 ' style={{ color: "#0d2366", fontWeight: "700" }}>Brands We Work With</h1>
        <div className='container-fluid'>
          <div className='mb-5' style={mystyle}>
            {
              brands.map((element, id) => {
                return (
                  <TopBrandSection sour={element.link} id={id} />
                )
              })
            }
          </div>
        </div>
      </div>
      {/* End of Top Brands Section */}

      {/* What translation services do we provide? */}
      <div className='container'>
        <div className='d-flex flex-column justify-content-center px-md-5 mx-md-5 m-0'>
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>What translation services do we provide?</h1>
          <div className='my-4' style={{ width: "60px", backgroundColor: "#49dab5", height: "5px", margin: '0 auto' }}></div>
          <p className='text-center normal-text'>We understand the need for translation for all the businesses hence, without confining it to any specific business requirement or industry, we provide full-fledged translation services to all the businesses across different industries.</p>
        </div>
        <div className='row px-md-5 mx-md-5 m-0'>

          <div className='col-md-6 col-12' style={{ color: "#2a3d78", margin: "19px 0px" }}>
            <div className=' rounded-3' style={{ padding: '1.5rem', height: "100%", boxShadow: "0 0 10px 0 rgba(0,0,0,.5)" }}>
              <div className='text-center pb-3 '>
                <img src={img1} style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Legal Translation</h4>
              <p style={{ fontSize: "18px" }}>To help you with the understanding of your legal documents & their apt meaning, legal translation comes into the picture. It is a complex translation binding with the judiciary, hence it is of utmost importance to keep it accurate & relevant. Our team of professionals make it possible for you effortlessly at affordable prices.</p>
            </div>

          </div>

          <div className='col-md-6 col-12' style={{ color: "#2a3d78", margin: "19px 0px" }}>
            <div className=' rounded-3' style={{ padding: '1.5rem', height: "100%", boxShadow: "0 0 10px 0 rgba(0,0,0,.5)" }}>
              <div className='text-center pb-3'>
                <img src={img1} style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Literary Translation</h4>
              <p style={{ fontSize: "18px" }}>{"We also help you with the translation of magazines, books, chapters, etc. to help you reach the maximum audience. Be it in any language, or any literary element you want to get translated; weve got you covered. Get your literary masterpiece translated into many languages with its apt meaning and emotions. Our experts & professionals make the translation possible for you by making it accurate & relevant at affordable prices."}</p>
            </div>
          </div>
        </div>
        <div className='row p-md-5 mx-md-5 m-0'>

          <div className='col-md-6 col-12' style={{ color: "#2a3d78", margin: "19px 0px" }}>
            <div className=' rounded-3' style={{ padding: '1.5rem', height: "100%", boxShadow: "0 0 10px 0 rgba(0,0,0,.5)" }}>
              <div className='text-center pb-3'>
                <img src={img1} style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Business Translation</h4>
              <p style={{ fontSize: "18px" }}>With the growth in international markets, finding opportunities and growing beyond geographical boundaries have become possible. Although it is not as easy as it looks to stand firmly in the non-local or international market, translation of the business into local languages can do wonders. At Parikh Info Solutions with our team of experienced translators & professionals make it possible for you!.</p>
            </div>
          </div>

          <div className='col-md-6 col-12' style={{ color: "#2a3d78", margin: "19px 0px" }}>
            <div className=' rounded-3' style={{ padding: '1.5rem', height: "100%", boxShadow: "0 0 10px 0 rgba(0,0,0,.5)" }}>
              <div className='text-center pb-3'>
                <img src={img1} style={{ height: "71px", width: "71px" }}></img>
              </div>

              <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Document Translation</h4>
              <p style={{ fontSize: "18px" }}>Apart from legal translation or literary translation, we also ace in translating any document you might need aptly with utmost accuracy. Translate your transcripts, courses, or any document with our team of expert translators at prices that favours your budget.</p>
            </div>
          </div>
        </div>
      </div>
      {/* How Translation Promotes Business Growth? */}
      <div className='container py-4 mx-md-2'>
        <div className='row px-md-5 mx-md-5 m-0'>
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>How Translation Promotes Business Growth?</h1>

          <p className='normal-text text-center'>Translating your company&apos;s information into multiple languages makes you reach out to a wider audience and makes you publicly available in their native language. It offers a sense of belonging and gives you a firm stand to kickstart your business beyond geographical borders. It makes you look less alien and gives you an edge over competitors. Thus, with the increase in globalization, translation promotes all-around growth of your business.</p>

          <div className='col-md-6 col-12 d-flex justify-content-center'>
            <img src={translation3} style={{ height: "300px ", width: "300px" }}></img>
          </div>
          <div className='col-md-6 col-12 d-flex align-items-center'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed normal-text" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ fontWeight: "600", borderBottom: "1px solid #00dbb5" }}>
                    Increases your company's visibility
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body normal-text">Language is an essential route toward a company&apos;s success. This process can become challenging with language as a barrier between you and your success. At Parikh Info Solutions, we break that wall with our translation services. Our certified translators make you reach out to a wider audience in their native language.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header normal-text" id="flush-headingTwo">
                  <button className="accordion-button collapsed normal-text" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ fontWeight: "600", borderBottom: "1px solid #00dbb5" }}>
                    Enhances communication with the audience
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body normal-text">To compete in this global marketplace, companies must use effective strategies to fuel their growth in international networks. This includes worldwide communication with partners, customers, and employees in a variety of languages. We bridge this gap by ensuring effective communication with you and your clients through our translation services based in the India.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed normal-text" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ fontWeight: "600", borderBottom: "1px solid #00dbb5" }}>
                    Ensures a good reputation of your firm
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body normal-text">One small mistake in translation services can cause you a fortune of loss and also put your brand image in jeopardy. Thus, we use the right words at the right time and guard the norms and ethics of languages during translation services.</div>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>

      {/* Benefits */}
      <div className='container py-4 mx-md-2'>
        <h2 className='text-center m-3 heading-text' style={{ color: "#0d2366", fontWeight: "700" }} >Benefits of Our Translation Services</h2>
        <div className='row p-md-5 mx-md-5 m-0'>
          {
            arr.map((element, id) => {
              return (

                <Benefits img={element.img} title={element.title} content={element.content} id={id} />

              )
            })
          }


        </div>

      </div>

      {/*Language we offer  */}

      <div style={{ height: "7rem", width: "100%", zIndex: "-1", transform: "skew(3deg,-3.9deg)", transformOrigin: "left top", position: "relative", backgroundColor: "#0d2366", top: "7rem" }}></div>

      <div className='container-fluid h1 d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: '#0d2366', color: "white", height: "7rem" }}>
        <div className='my-4' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
        <h2 className='heading-text' style={{ color: "white" }}>Languages We Offer</h2>
      </div>

      <div style={{ height: "7rem", width: "100%", zIndex: "-1", transform: "skew(-3deg,3.9deg)", transformOrigin: "left bottom", position: "relative", backgroundColor: "#0d2366", top: "-7rem" }}></div>






      {/* Why Choose Parikh Info Solutions As Translation Company? */}
      <div className='container py-4 mx-md-2'>
        <h2 className='text-center m-3 heading-text' style={{ color: "#0d2366", fontWeight: "700" }} >Why Choose Parikh Info Solutions As Translation Company?</h2>
        <p className='text-center m-3 normal-text'  >Speak Like a Local With your Audience!</p>
        <div className='row px-md-5 mx-md-5 m-0'>
          {
            arr1.map((element, id) => {
              return (

                <Benefits img={element.img} title={element.title} content={element.content} id={id} />

              )
            })
          }


        </div>

      </div>
      {/* our translation process */}
      <div>
        <h2 className='text-center m-3 heading-text' style={{ color: "#49dab5", fontWeight: "700" }} >Our Translation Process</h2>
        <p className='text-center m-3 normal-text'  >We provide 100% Quality Assurance and a fast turnaround time through our human translation services in India and also all around the world.</p>
        <div>
          <div className='d-flex justify-content-between phone-width' style={{ maxWidth: "33rem", margin: "47px auto" }}>
            <div style={{ color: "#49dab5", padding: "0px 9px", maxWidth: "2rem" }}> <h1 style={{ fontSize: "48px" }}>1</h1></div>
            <div style={{ backgroundColor: "#49dab5", color: "#0d2366", padding: "2rem 1rem", maxWidth: "27rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)", borderRadius: "8px" }}>
              <h1 style={{ fontSize: "35px" }}>Understanding Client Requirements:</h1>
              <p style={{ color: "white" }}>First, we as a translation services company understand your requirements and try to resolve your doubts. We try to understand what exactly you are looking for in the budget of your choice.</p>
            </div>
          </div>
          {/* #49dab5 */}
          <div className='d-flex justify-content-between phone-width' style={{ maxWidth: "33rem", margin: "47px auto" }}>
            <div style={{ color: "#0d2366", fontSize: "48px", padding: "0px 9px", maxWidth: "2rem" }}> <h1>2</h1></div>
            <div style={{ backgroundColor: "#0d2366", color: "#49dab5", padding: "2rem 1rem", maxWidth: "27rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)", borderRadius: "8px" }}>
              <h1 style={{ fontSize: "35px" }}>Analysis and Preparation of the Source File:</h1>
              <p style={{ color: "white" }}>Then we analyze the source document. Based on that we send a price quote with a specific timeline for the translation project. Meanwhile, the project coordinator, with the help of local language experts creates a source file from the source document.</p>
            </div>
          </div>

          <div className='d-flex justify-content-between phone-width' style={{ maxWidth: "33rem", margin: "47px auto" }}>
            <div style={{ color: "#49dab5", fontSize: "48px", padding: "0px 9px", maxWidth: "2rem" }}> <h1>3</h1></div>
            <div style={{ backgroundColor: "#49dab5", color: "#0d2366", maxWidth: "27rem", padding: "2rem 1rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)", borderRadius: "8px" }}>
              <h1 style={{ fontSize: "35px" }}>Allocation of Resources:</h1>
              <p style={{ color: "white" }}>After the creation of the source file, the project is assigned to the linguist (or a team of linguists) who has expertise on the subject as per the project requirement.</p>
            </div>
          </div>

          <div className='d-flex  justify-content-between phone-width' style={{ maxWidth: "33rem", margin: "47px auto" }}>
            <div style={{ color: "#0d2366", fontSize: "48px", padding: "0px 9px", maxWidth: "2rem" }}> <h1>4</h1></div>
            <div style={{ backgroundColor: "#0d2366", color: "#49dab5", maxWidth: "27rem", padding: "2rem 1rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)", borderRadius: "8px" }}>
              <h1 style={{ fontSize: "35px" }}>Translation:</h1>
              <p style={{ color: "white" }}>The translation is done as per your specific requirement. We take care of style, tone, grammar, meaning, cultural nuances along with consistency with industry standards within our translated projects.</p>
            </div>
          </div>

          <div className='d-flex  justify-content-between phone-width' style={{ maxWidth: "33rem", margin: "47px auto" }}>
            <div style={{ color: "#49dab5", fontSize: "48px", padding: "0px 9px", maxWidth: "2rem" }}> <h1>5</h1></div>
            <div style={{ backgroundColor: "#49dab5", color: "#0d2366", padding: "2rem 1rem", maxWidth: "27rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)", borderRadius: "8px" }}>
              <h1 style={{ fontSize: "35px" }}>Quality Check and Assurance:</h1>
              <p style={{ color: "white" }}>Quality supervisors proofread and check the translated document. We follow stringent quality check parameters to maintain superior quality in our translation services company.</p>
            </div>
          </div>

          <div className='d-flex  justify-content-between phone-width' style={{ maxWidth: "33rem", margin: "47px auto" }}>
            <div style={{ color: "#0d2366", fontSize: "48px", padding: "0px 9px", maxWidth: "2rem" }}> <h1>6</h1></div>
            <div style={{ backgroundColor: "#0d2366", color: "#49dab5", padding: "2rem 1rem", maxWidth: "27rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)", borderRadius: "8px" }}>
              <h1 style={{ fontSize: "35px" }}>Delivery of the Project:</h1>
              <p style={{ color: "white" }}>After a thorough quality check, the translated document is sent to you for feedback and suggestions.</p>
            </div>
          </div>

          <div className='d-flex justify-content-between phone-width' style={{ maxWidth: "33rem", margin: "47px auto" }}>
            <div style={{ color: "#49dab5", fontSize: "48px", padding: "0px 9px", maxWidth: "2rem" }}> <h1>7</h1></div>
            <div style={{ backgroundColor: "#49dab5", color: "#0d2366", padding: "2rem 1rem", maxWidth: "27rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)", borderRadius: "8px" }}>
              <h1 style={{ fontSize: "35px" }}>Post-Delivery Services:</h1>
              <p style={{ color: "white" }}>Parikh Info Solutions takes pride in its after delivery services. Any feedback and suggestions from your side are always welcomed. We implement them right away to prevent delays in your further plan of action.</p>
            </div>
          </div>

        </div>

      </div>

      {/* USP section */}
      <UspSection
        heading="Get Your Effective Translation Today!"
        data1="Multiple languages covered"
        data2="Per Word Rate Structure"
        data3="On-Time Delivery"
        button="Start Translating"
      />
      <div style={{ backgroundColor: "#49dab5" }}>
        <p className='text-white text-center my-0 py-3 fs-6'>Are You Looking For Transcription Services? <NavLink to="/transcription">Read More.</NavLink></p>
      </div>

      <div className='container p-md-5 my-4'>
        <h4 className='text-center h1 fw-bold mb-4' style={{ color: "#0D2366" }}>Frequently Asked Questions:</h4>
        <div className='row justify-content-center'>
          <div class="accordion col-md-10 col-12" id="accordionExample">

            {
              faqs.map((element, id) => {
                return (

                  <FAQ que={element.que} no={element.no} ans={element.ans} id={id} />

                )
              })
            }
          </div>
        </div>
      </div>

    </>
  )
}
