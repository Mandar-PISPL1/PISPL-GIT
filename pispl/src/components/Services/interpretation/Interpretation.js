import React from 'react'
import Banner from '../../translation/Banner'
import interpretation_lottie from './interpretation_lottie.json'
import UspSection from '../../translation/UspSection'
import { useEffect } from 'react'
import Benefits from '../../translation/Benefits'
import arr from './BenefitsContent'
import img from '../../assets/Interpretation.png'
import img1 from '../../assets/Simultaneous-Interpretation.png'
import img2 from '../../assets/Consecutive-Interpretation.png'
import faqs from './FAQContent'
import FAQ from '../../translation/FAQ'


export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner index={7} lottie={interpretation_lottie} />
      <div className='myskew'></div>

      {/* Connect Better With Us! */}

      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <div className="col-md-7 col-12">
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >GET PROFESSIONAL INTERPRETERS ANYTIME, ANYWHERE!</p>
            <h1 className='text-start m-3 ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>Connect Better With Us!</h1>
            <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >Our interpreters in India operate in an interruption-free environment with a professional background. We are committed to maximizing the quality of your communication experience through a zero disturbance policy.


            </p>
          </div>
          <div className="col-md-5 col-12" style={{ maxHeight: "456px", maxWidth: "456px" }}>
            <img src={img} alt="voice over" style={{ height: "100%", width: '100%' }}></img>
          </div>
        </div>
      </div>

      {/* What is Video Remote Interpretation Services? */}

      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <h1 className='text-center ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>What is Video Remote Interpretation Services?</h1>
          <div className="col-md-7 col-12">
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >Video Remote Interpretation Services (VRI) offer effective and professional real-time methods to bridge communication and language barriers between two parties.Video Remote Interpretation Services (VRI) offer effective and professional real-time methods to bridge communication and language barriers between two parties.
              <br /><br />
              It is a growing language remote interpretation service in India that uses electronic devices such as web cameras and videophones to generate high-quality results. It is ideally used to deliver sign languages or different language interpretation services. We make this remote interpretation process seamless with experienced language interpreters along with affordable and convenient facilities.

              <br /><br />
              Our dedicated team ensures smooth delivery of video remote interpretation, paying sheer attention to the language and cultural differences. Besides this, our video remote interpretation company ensures client satisfaction with the best quality at an affordable cost.

            </p>
          </div>
          <div className="col-md-5 col-12" style={{ maxHeight: "200px", maxWidth: "315px" }}>
            <img src={img1} alt="voice over" style={{ height: "100%", width: '100%' }}></img>
          </div>




        </div>
      </div>

      {/* What are the main Benefits of Best Video Remote Interpretation Services to Organizations? */}

      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <h1 className='text-center ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>What are the main Benefits of Best Video Remote Interpretation Services to Organizations?</h1>
          <div className="col-md-7 col-12">
            <p className='text-start m-3' style={{ color: "#0d2366", fontWeight: "300" }} >Video remote interpretation services are the fastest-growing real-time and easily accessible solution for brands looking to communicate with ease.
              <br /><br />
              We at Parikh Info Solutions Pvt. Ltd., bring you the most reliable, high-quality and convenient interpretation services at the best prices. The many benefits of our services ought to bridge the communication gap and build a smooth transition process.

              <br /><br />
              Our highly-skilled expert interpreters and translators will help your company’s voice to reach the targeted audience in their native language with ease. Some of the main benefits of our video interpretation services include:
            <ul style={{listStyleType:"disc"}}>
              <li>Fast Response for Urgent Situations</li>
              <li>99% Accuracy</li>
              <li>Secure Network Connectivity</li>
              <li>Cost-Effective</li>
              <li>On-Demand Solution</li>
            </ul>
            </p>
            

          </div>
          <div className="col-md-5 col-12" style={{ maxHeight: "200px", maxWidth: "315px" }}>
            <img src={img2} alt="voice over" style={{ height: "100%", width: '100%' }}></img>
          </div>




        </div>
      </div>

      {/* types of interpretation service */}


      <div className="conatiner py-4 mx-md-2">
        <div className="row px-md-5 mx-md-5 m-0">
          <h1 className='text-center ml-2' style={{ color: "#0d2366", fontWeight: "700" }}>Types of Interpretation Services</h1>
          <p className='text-center m-3' style={{ color: "#0d2366", fontWeight: "300" }}>The two basic interpretation modes are:</p>
          {/* <div className='text-center my-4' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div> */}

          {/* box-shadow:  */}
          <div className='col-md-6 col-12' style={{ color: "#2a3d78", margin: "19px 0px" }}>
            <div style={{ padding: '1.5rem', borderRadius: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)", height: '100%' }}>
              <div className='text-center pb-3'>
                <img src={img1} style={{ height: "200px", width: "315px" }} alt='Closed Captions (CC) Service'></img>
              </div>
              <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Simultaneous Interpretation</h4>
              <p style={{ fontSize: "18px" }}>Simultaneous interpretation (SI) is a mode of interpretation where the interpreter translates the information from one language to another in real-time.
                <br /><br />
                This seamless interpretation translates the words and thoughts in the target language simultaneously while the speaker is speaking. This helps in maintaining a smooth flow, without any pause or interruption. One of the biggest advantages of simultaneous interpretation is it saves time, maintains accuracy and delivers in real-time. 
                <br /><br />
                The simultaneous interpreters and translators need to be well versed with both the source and target languages in order to convey the right information. The interpreters need to listen, analyse and convey the source language in the target language simultaneously.
                Our video remote interpretation services provide experienced professional interpreters with exceptional skills, cultural awareness and language fluency. The simultaneous interpreters are also called conference interpreters as this type of interpretation is mainly used in large-scale events, meetings and conferences.
                <br /><br />

                This real-time translation or interpretation is also used in safety or emergency situations and global conferences where the information is to be conveyed globally in multiple languages.
              </p>
            </div>
          </div>

          <div className='col-md-6 col-12' style={{ color: "#2a3d78", margin: "19px 0px" }}>
            <div style={{ padding: '1.5rem', borderRadius: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0,0.19)", height: '100%' }}>
              <div className='text-center pb-3'>
                <img src={img2} style={{ height: "200px", width: "315px" }} alt='Video Subtitles Service'></img>
              </div>
              <h4 className='text-center pb-4' style={{ fontWeight: "600" }}>Consecutive Interpretation</h4>
              <p style={{ fontSize: "18px" }}>Consecutive Interpretation (CI) is a mode of interpretation where the interpreter translates the information from one language to another after a pause or certain period of time. Firstly the professional interpreter gathers the information accurately and then passes it on to the targeted audience.
                <br /><br />
                The interpreter might take notes when the speaker is conveying the message and then reproduce the information to the audience. The consecutive interpretation can also happen when the speaker pauses after one or two sentences while the interpreter delivers it to the audience in the target language. 
                <br /><br />
                The consecutive interpreters must be active listeners, who accurately pay attention to your speeches and take notes. Our video remote interpretation services provide experienced interpreters and translators with exceptional skills, cultural awareness and language fluency.
                <br /><br />
                Their sharp memory and attentiveness help them communicate better with the audience. This type of interpretation is widely used in business meetings, interviews, medical consultations, legal meetings, schools and places where time isn’t a constraint. One of the biggest advantages of consecutive interpretation is its reliability, effectiveness and ability to connect better with the audience. 
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Benefits content */}
      <div className='container py-4 mx-md-2'>
        <h2 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }} >Industries We Are Working With</h2>
        <p className='px-md-5 mx-md-5 m-0 pb-5 pt-1' style={{ color: "#2a3d78" }}>Video remote interpretation services are widely used in various industries, including healthcare, tourism, government, businesses, education and a lot more. These services benefit them for quick, reliable and accurate interpretation of information in need of emergency or on-demand services. With globalisation, many businesses are now expanding globally. To serve people of different regions speaking different languages, it is vital to target them in their native language. The video remote interpretation services enable the companies to level up their services in multiple languages. If you are looking to expand your business or simply looking for an interpretation service, we are here to help you deliver the right service and bridge the communication barriers with our exceptional team of native experts.</p>
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
        heading="Provide Better User Engagement and Experience"
        data1="Fast Connect Time"
        data2="Cost-Effective"
        data3="Highly Flexible"
        dataValue="true"
        data4="Experienced"
        button="Get Professional Interpreter"

      />

      <div className='container p-5'>
        <h4 className='text-center h1 fw-bold mb-4' style={{ color: "#0D2366" }}>Frequently Asked Questions:</h4>
        <div className='row justify-content-center'>
          <div class="accordion col-md-10 col-12" id="accordionExample">

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
