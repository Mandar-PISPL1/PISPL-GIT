import React from 'react'
import Banner from '../../translation/Banner'
import interpretation_lottie from './interpretation_lottie.json'
import UspSection from '../../translation/UspSection'
import { useEffect } from 'react'
import Benefits from '../../translation/Benefits'
import arr from './BenefitsContent'
export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Banner index={7} lottie={interpretation_lottie}/>
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

        {/* Benefits content */}
        <div className='container py-4 mx-md-2'>
        <h2 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }} >Industries We Are Working With</h2>
        <p className='px-md-5 mx-md-5 m-0 pb-5 pt-1' style={{color:"#2a3d78"}}>Video remote interpretation services are widely used in various industries, including healthcare, tourism, government, businesses, education and a lot more. These services benefit them for quick, reliable and accurate interpretation of information in need of emergency or on-demand services. With globalisation, many businesses are now expanding globally. To serve people of different regions speaking different languages, it is vital to target them in their native language. The video remote interpretation services enable the companies to level up their services in multiple languages. If you are looking to expand your business or simply looking for an interpretation service, we are here to help you deliver the right service and bridge the communication barriers with our exceptional team of native experts.</p>
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
        heading="Provide Better User Engagement and Experience"
        data1="Fast Connect Time"
        data2="Cost-Effective"
        data3="Highly Flexible"
        dataValue="true"
        data4="Experienced"
        button="Get Professional Interpreter"

        />
        
    </>
  )
}
