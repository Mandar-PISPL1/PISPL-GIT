import React from 'react'
import Banner from '../../translation/Banner'
import videosubtitling_lottie from './videosubtitling_lottie.json'
import TopBrandSection from '../../translation/TopBrandSection'
import brands from './brands'
export default function VideoSubtitling() {
  const mystyle = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap"
  }
  return (
    <>
        <Banner index={6} a={videosubtitling_lottie}/>
        <div className="repon" style={{ textAlign: "center", margin: " 3rem auto", textAlign: "center" }}>
        <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Subtitles Provided To Big Brands</h1>
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
