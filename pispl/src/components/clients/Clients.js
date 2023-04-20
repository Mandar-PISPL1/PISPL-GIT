import React from 'react'
// import img from '../assets/google-rating.png'
import arr from './brands'
import { BsFillStarFill } from "react-icons/bs";
export default function Clients() {
  return (
    <>
      {/* review section */}
      <div className='container'>
        <div className='py-5'>
          <div className='row px-md-4'>
            <div className='col-md-6 d-flex justify-content-center align-items-center pb-5 pb-md-0'>
              <div>
                <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Highly Rated by Our <br /> Clients on</h1>
                <div className=' d-flex justify-content-center'>
                  <img src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/Google-Review.png"  ></img>
                </div>
                <p className='text-center'>5/5</p>
                <div className='text-center'>
                  <BsFillStarFill color='#f0ad4e' size={20} />
                  <BsFillStarFill color='#f0ad4e' size={20} />
                  <BsFillStarFill color='#f0ad4e' size={20} />
                  <BsFillStarFill color='#f0ad4e' size={20} />
                  <BsFillStarFill color='#f0ad4e' size={20} />

                </div>
              </div>

            </div>
            <div className='col-md-6 d-flex justify-content-center'>
              <a href='https://www.google.com/search?q=parikh+info+solutions'>
                <div className=' d-flex justify-content-center ' style={{maxWidth:"456px"}}>
                  <img src="https://parikhinfosolutions.com/wp-content/uploads/2022/08/PISPL-Reviews.png" style={{ width: "100%" }}></img>
                </div>

              </a>

            </div>
          </div>
        </div>
      </div>
      {/* brands section */}
      <div style={{backgroundColor:"#f6f6f6",padding:"3rem 0rem"}}>
          <div>
            <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Trusted by World's Major Brands</h1>
            <div className='container'>
              <div className='row px-md-5'>
                
                {
                  arr.map((element)=>{
                    return (
                      <div className='col-6 col-md-2 py-2 text-center'>
                        <img src={element.link} style={{height:"97px",width:"169px"}}></img>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>
        </div>
    </>
  )
}
