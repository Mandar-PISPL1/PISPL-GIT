import React from 'react'
import Banner from '../translation/Banner'
import home from '../assets/home.png'
import arr from '../about_us/brands'
import UspSection from '../translation/UspSection'
export default function Home() {
  return (
    <>
        <Banner index={12} b={home} flag={true}/>
        {/*brands section  */}
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
        <UspSection
            heading="Choose A Better Way To Present"
            heading_value="true"
            heading2="We help you spread your success story."
            data1="Translation"
            data2="Transcription"
            data3="Subtitling"
            dataValue="true"
            data4="Dubbing & VO"
            button="Contact Support"

            />
    </>
  )
}
