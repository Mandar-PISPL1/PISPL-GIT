import React, { useEffect } from 'react'
import Banner from '../translation/Banner'
import lottie from './contact-lottie.json'
import { ImCheckmark } from "react-icons/im";
import Form from '../form/Form'
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner index={11} upperpara={false} lottie={lottie} />
      <div className='myskew'></div>
      <div className='myskew'></div>
      <div className='container py-3'>
        <div className='row px-md-5' >
          <div className='col-md-6 col-12'  style={{backgroundColor:"#f6f6f6",padding:"30px"}}>
            <div className=''>
              <div>
                <h1 style={{ color: "#0d2366", fontWeight: "700" }}>We make success happen</h1>
                <p  style={{fontWeight:"400",fontSize:"20px",color:"#041020"}}>
                <ImCheckmark color='#49dab5' size="1.4rem" className='mx-2'/>Error Free Services<br/>
                <ImCheckmark color='#49dab5' size="1.4rem" className='mx-2'/>100% Data Privacy<br/>
                <ImCheckmark color='#49dab5' size="1.4rem" className='mx-2'/>Fast turnaround<br/>
                <ImCheckmark color='#49dab5' size="1.4rem" className='mx-2'/>Native translators<br/>
                <ImCheckmark color='#49dab5' size="1.4rem" className='mx-2'/>Ability to scale<br/>
                <ImCheckmark color='#49dab5' size="1.4rem" className='mx-2'/>Industry expertise</p>
              </div>
            </div>

            <div style={{backgroundColor:"#49dab5",width:"90%",height:"1px",margin:"14px 0px"}}></div> {/*line */}

            <div>
              <div>
                <h1  style={{ color: "#0d2366", fontWeight: "700" }}>USA Branch</h1>
                <div className='mb-2' style={{width:"40px",backgroundColor:"#49dab5",height:"5px"}}></div>
                
                <p style={{fontWeight:"300",color:"#0d2366"}}>
                713 Anchorage court<br/>
                Pingree Grove,<br/>
                IL 60140, USA.<br/>
                +1 (678) 906-8977</p>
         
                
              </div>
            </div>

            <div style={{backgroundColor:"#49dab5",width:"90%",height:"1px",margin:"14px 0px"}}></div>
            <div>
            <div>
                <h1 style={{ color: "#0d2366", fontWeight: "700" }}>Mumbai Branch</h1>
                <div className='mb-2' style={{width:"40px",backgroundColor:"#49dab5",height:"5px"}}></div>
           
                  <p style={{fontWeight:"300",color:"#0d2366"}}>316, Gemstar Commercial Complex,
                  Ramchandra Lane Extn, Kanch Pada,<br/>
                  Malad West, Mumbai 400 064,<br/>
                  Maharashtra, India.<br/>
                  +91-9136109881<br/>
                  <a>amitt@parikhinfosolutions.com</a><br/>
                  <a>amitt.parikh</a>amitt.parikh</p>
           
                
              </div>

            </div>
            <div>
              <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.0161570555002!2d72.838855!3d19.189556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x832a1bf6767b8c34!2sParikh%20Info%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1673971330090!5m2!1sen!2sus" title="Google Map" width="340" height="400" style={{ border: "0",width:"100%" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-lf-form-tracking-inspected-dzlr5a5ogex7boq2="true" data-lf-yt-playback-inspected-dzlr5a5ogex7boq2="true" data-lf-vimeo-playback-inspected-dzlr5a5ogex7boq2="true"></iframe>
              </div>
            </div>
          </div>
          {/* 2nd Column */}
          <div className='col-md-6 col-12'>
            <Form/>
          </div>
        </div>
      </div>
    </>
  )
}
