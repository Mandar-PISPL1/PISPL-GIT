import React from 'react'
import Banner from '../../translation/Banner'
import transcription_lottie from './transcription_lottie.json'
import brands from './brands'
import TopBrandSection from '../../translation/TopBrandSection'
export default function Transcription() {
  const mystyle={
    display:"flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap"
  }
  return (
    <>
      <Banner index={1} a={transcription_lottie} />
      <div className="repon" style={{ textAlign: "center", margin: " 3rem auto", textAlign: "center" }}>
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
    </>
  )
}
