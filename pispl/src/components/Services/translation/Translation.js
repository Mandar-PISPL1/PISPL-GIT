import React from 'react'
import Banner from '../../translation/Banner'
// import arr from "./services_content"
import translation_service from './translation_service.json'
import TopBrandSection from '../../translation/TopBrandSection'
import brands from './brands'
import { HiArrowNarrowRight } from "react-icons/hi";
import { ImCheckmark  } from "react-icons/im";
export default function Translation() {

  const mystyle = {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap"
  }
  const buttonstyle={
    color:"#0d2366",
    backgroundColor:"#49dab5",
    fontSize:"20px",
    width:"19rem",
    height:"3rem",
    borderRadius:"5px",
    border:"0px",
    margin:"0px auto",
    display:" block",
    margin: "0 auto",
}
  

  return (
    <>
      <Banner index={0} a={translation_service} />
      {/* Top Brands Section */}
      <div className="repon" style={{ textAlign:"center",margin:"3rem auto",textAlign: "center"}}>
        <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Brands We Work With</h1>
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
      {/* End of Top Brands Section */}

      {/* USP section */}
      <div style={{backgroundColor:"#0d2366"}}>
        <h1  className="text-center my-3" style={{fontWeight: "700",color:"white"}}>Get Your Effective Translation Today!</h1>
        <div className='text-white d-flex justify-content-center my-3 usp-section'>
          <p><ImCheckmark color='#49dab5'size="1.4rem"/>Multiple languages covered</p>
          <p><ImCheckmark color='#49dab5' size="1.4rem"/>Per Word Rate Structure</p>
          <p><ImCheckmark color='#49dab5' size="1.4rem"/>On-Time Delivery</p>
        </div>
        <button style={buttonstyle}><a>Start Translating <HiArrowNarrowRight/></a></button>
      </div>

    </>
  )
}
