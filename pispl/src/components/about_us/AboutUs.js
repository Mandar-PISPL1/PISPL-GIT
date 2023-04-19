import React from 'react'
import Banner from '../translation/Banner'
import aboutus_lottie from './aboutus_lottie.json'
export default function AboutUs() {
  return (
    <>
      <Banner lottie={aboutus_lottie} index={10} upperpara={true} />
      {/* About Us */}
      <div className='py-5'>
        <div className='container-fluid'>
          <div className='row px-md-5' >
            <div className='col-md-5 d-flex justify-content-center p-md-5 pd-sm-2'>
              <img src='https://parikhinfosolutions.com/wp-content/uploads/2020/10/Team.jpg' className='aboutus-img' style={{ height: "100%", width: "100%" }} />
            </div>
            <div className='col-md-7 p-md-5 ' style={{padding:"23px 0px"}}>
              <div >
                <h1 className="my-text-center " style={{ color: "#0d2366" }}>About Us</h1>
                <p className='my-text-center '>We scale to suit your project needs. </p>
              </div>
              <div className='container my-3'>
                <div className='row'>
                  <div className='col-md-3 text-sm-center '>
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
    </>
  )
}
