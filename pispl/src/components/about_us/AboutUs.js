import React,{useEffect} from 'react'
import Banner from '../translation/Banner'
import aboutus_lottie from './aboutus_lottie.json'
import arr from './brands'

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner lottie={aboutus_lottie} index={10} upperpara={true} />
      {/* About Us Part -1*/}
      <div className='py-5'>
        <div className='container-fluid'>
          <div className='row px-md-5' >
            <div className='col-md-5 d-flex justify-content-center p-md-5 pd-sm-2'>
              <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Team.jpg'  style={{ height: "100%", width: "100%" }} alt="team"/>
            </div>
            <div className='col-md-7 p-md-5 ' style={{padding:"23px 0px"}}>
              <div >
                <h1 className="my-text-center " style={{ color: "#0d2366" }}>About Us</h1>
                <p className='my-text-center '>We scale to suit your project needs. </p>
              </div>
              <div className='container my-3'>
                <div className='row'>
                  <div className='col-md-3 text-center '>
                    <h1 style={{ color: "#49dab5" }}>95%</h1>
                    <p>Client Retention</p>
                  </div>
                  <div className='col-md-5 text-center'>
                    <h1 style={{ color: "#49dab5" }}>9001 : 2015</h1>
                    <p>ISO Certified</p>
                  </div>
                  <div className='col-md-4 text-center'>
                    <h1 style={{ color: "#49dab5" }}>17100:2015</h1>
                    <p>ISO Certified</p>
                  </div>
                </div>


              </div>
            </div>

          </div>

        </div>
      </div>
       {/* About Us : End of part -1 */}
       {/* brands section */}
       <div style={{backgroundColor:"#f6f6f6",padding:"3rem 0rem"}}>
          <div>
            <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Trusted by World's Major Brands</h1>
            <div className='container'>
              <div className='row px-md-5'>
                
                {
                  arr.map((element)=>{
                    return (
                      <div className='col-6 col-md-2 py-2  text-center'>
                        <img src={element.link} style={{height:"97px",width:"169px"}} alt='brands'></img>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

        {/* { All About Us Section} */}
        <div style={{ margin: "4% 8%", color: "#0d2366" }}>
          <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>All About Us</h1>
          <p>Parikh Info Solutions Pvt. Ltd. is an MSME registered, ISO 9001:2015 and ISO 17100:2015 certified, leading Language Services Provider in India. We offer Translation, Transcription, Voice-over, Dubbing, Subtitling, Localization, Remote Interpretation, Paper to CAD Conversion, and Digital Marketing and Advertising services to international clients from over 25 countries.
          <br/><br/>
          Parikh Info Solutions Pvt. Ltd. (PISPL) was founded back in 1998 and was a pioneer in offering CAD conversion and GIS services. In 2002, we ventured into the language services field and since have been expanding our services portfolio and the languages supported.</p>
        </div>

    </>
  )
}
