import React from 'react'
import Banner from '../../translation/Banner'
import brands from './brands'
import TopBrandSection from '../../translation/TopBrandSection'
import UspSection from '../../translation/UspSection'
import dubbing_lottie from './dubbing_lottie.json'
export default function Dubbing() {
  const mystyle = {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap"
  }
  return (
    <>
      <Banner index={4} a={dubbing_lottie} />
      <div className="repon" style={{ textAlign: "center", margin: " 3rem auto", textAlign: "center" }}>
        <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Top Brands</h1>
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
        heading="Give Your Viewers A Better Experience"
        data1="Lip Syncing"
        data2="Clear Sound-Track"
        data3="Natural Accents"
        button="Start Your Dubbing Projects"
        lowerdataValue="true"
        lowerdata="Are you looking for transcription services?"
        />
    </>
  )
}
