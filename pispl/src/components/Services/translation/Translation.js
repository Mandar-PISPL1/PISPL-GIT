import React from 'react'
import Banner from '../../translation/Banner'
// import arr from "./services_content"
import translation_service from './translation_service.json'
import TopBrandSection from '../../translation/TopBrandSection'
import brands from './brands'


export default function Translation() {

  const mystyle = {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap"
  }

  return (
    <>
      <Banner index={0} a={translation_service} />
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

    </>
  )
}
