import React from 'react'
import Banner from '../../translation/Banner'
import transcription_lottie from './transcription_lottie.json'
import brands from './brands'
import TopBrandSection from '../../translation/TopBrandSection'
import UspSection from '../../translation/UspSection'
export default function Transcription() {
  const mystyle={
    display:"flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap"
  }
  return (
    <>
      <Banner index={1} lottie={transcription_lottie} />
      {/* Top Brand Section */}
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
      <UspSection
        heading="Get Your 100 % Human Transcription"
        data1="Native Transcribers"
        data2="Hassel-Free Process"
        data3="Accuracy Guaranteed"
        button="Get Your Transcription"
        lowerdata="Are you looking for professional translation services company?"
        lowerdataValue="true"
        />
    </>
  )
}
