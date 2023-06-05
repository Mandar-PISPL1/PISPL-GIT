import React,{useEffect} from 'react'
// import img from '../assets/google-rating.png'
import styled from 'styled-components';
import arr from './brands'
import { BsFillStarFill } from "react-icons/bs"
import UspSection from '../translation/UspSection'

import Slider from "react-slick";
// import Test from '../Test';
// import Test from '../Test';
// import TestSlick from '../TestSlick';
import TestAgain from '../TestAgain';
import Counter from '../Incre-Counter/Counter';
const Carousel = styled(Slider)`
    margin-top:20px;
    // margin-left: 30px;
    // margin-right: 30px; 
    overflow: hidden;
    height:371px;
    &> button{
        opacity:0;
        height:400%;
        width:5vw;
        z-index:1;
        &:hover{
            opacity:1;
            transition:opacity 0.2s ease 0s;
        }
    }
    ul li button{
        &:before{
            font-size:10px;
            color:rgb(150,158,171);
        }
    }
    li.slick-active button:before{
        color:white;
    }
    .slick-list{
        overflow:initial;
    }
    slick-prev{
        left:-75px;
    }
    slick-next{
        right:-75px;
    }
    `;
const Wrap =styled.div`
    p{
      border:2px solid red;
    }
` ;
export default function Clients() {
  let settings={
    dots:true,
    infinte:true,
    speed :500,
    slidesToScroll:1,
    autoplay:true,
}
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                  <img src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/Google-Review.png" alt='review'></img>
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
                  <img src="https://parikhinfosolutions.com/wp-content/uploads/2022/08/PISPL-Reviews.png" alt='google review' style={{ width: "100%" }}></img>
                </div>

              </a>

            </div>
          </div>
        </div>
      </div>
      {/* brands section */}
        <div style={{backgroundColor:"#f6f6f6",padding:"3rem 0rem"}}>
          <div>
            <h1 className='text-center m-3' style={{ color: "#0d2366", fontWeight: "700" }}>Trusted by World&apos;s Major Brands</h1>
            <div className='container'>
              <div className='row px-md-5'>
                
                {
                  arr.map((element)=>{
                    return (
                      <div className='col-6 col-md-2 py-2 text-center'>
                        <img src={element.link} style={{height:"97px",width:"169px"}} alt='brands'></img>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>
        </div>

        <h1 className='text-center mt-5 mb-2' style={{ color: "#0d2366", fontWeight: "700" }}>Customers Testimonials</h1>
        <TestAgain/>
        <Counter/>
        <UspSection
          heading="Connect With Us Today!"
          data1="Affordable Pricing"
          data2="Superior Quality"
          data3="Scalability"
          dataValue="true"
          data4="Dedicated Team"
          button="Let's Work Together"
        />
        
      {/* <Test/> */}
      {/* <TestSlick/> */}
      

     

    </>
  )
}
