import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components';
import Slider from "react-slick";
import { BsFillStarFill } from "react-icons/bs"
import { AiFillGoogleCircle } from "react-icons/ai";
const Carousel = styled(Slider)`
    margin-top:20px;
    max-width:55rem;
    margin:0px auto;
    // margin-left: 30px;
    // margin-right: 30px; 
    overflow: hidden;
    height:100%;
    &> button{
        opacity:1;
        height:400%;
        width:5vw;
        z-index:1;
        &:hover{
            opacity:1;
            transition:opacity 0.2s ease 0s;
        }
    }
    ul li button{
        border:1px solid red;

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
    .slick-next:before {
        content: '>';
        font-size: 39px;
        color: #49dab5;
        font-Weight:bolder;
        position: relative;
        z-index: 10;
        left: 1px;
    }
    .slick-prev:before {
        content: '<';
        font-size: 39px;
        font-Weight:bolder;
        color: #49dab5;
        position: relative;
        z-index: 10;
        left: 1px;
    }
    `;
const Wrap = styled.div`
    // border:1px solid black;
    border-radius:5px;
    
    // AiFillGoogleCircle
    padding:1rem;
    div{
        background-color:#0d2366;
        color:white;
        border-radius:10px;
        height:22rem;
        padding:12px;
    }

    a{
        border-radius:4px;
        
    }
    div div p{
        font-size:15px;
        font-weight:300;
        color:#ffffff;
        
    }
    div div h1{
        font-weight:600;
        font-size:25px;
    }
   
` ;
export default function TestAgain() {
    let settings = {
        dots: false,
        infinte: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (

        <Carousel {...settings} className='mb-5'>
            <Wrap>
                <div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "3rem" }}>
                        <h1>Alexa Translations</h1>
                        <AiFillGoogleCircle color='#49dab5' size={22} style={{}} />
                    </div>
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <p>Alexa Translations has really enjoyed collaborating with Parikh Info Solutions Pvt. Ltd. We have worked with them for multiple languages (Hindu, Urdu, Gujarati, Punjabi, Bengali, etc.) and they have been extremely organized, never missing a deadline and following all instructions. Even though we are in different timezones, we have found them to be quite responsive and accommodating and we appreciate their hard work. Amitt and his team are a pleasure to work with and we hope to keep collaborating with them in the future. </p>
                </div>
            </Wrap>
            <Wrap>
                <div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "3rem" }}>
                        <h1>Ali Ibrahim</h1>
                        <AiFillGoogleCircle color='#49dab5' size={22} style={{}} />
                    </div>
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <p>We worked with Parikh Info Solutions for more than 10 years and we could say that they are one of our best vendors, always timed deliveries with prof. quality and full support in many difficult jobs. thanks for all Parikh Info Solutions team</p>
                </div>
            </Wrap>
            <Wrap>
                <div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "3rem" }}>
                        <h1>Ahmed Elruby</h1>
                        <AiFillGoogleCircle color='#49dab5' size={22} style={{}} />
                    </div>

                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <p>Amitt is one of our main vendors in Indian langauges, Reliable agency, friendly staff, Delivery made on time. I would like to continue working with such great team.</p>
                </div>
            </Wrap>
            <Wrap>
                <div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "3rem" }}>
                        <h1>James Rothberg</h1>
                        <AiFillGoogleCircle color='#49dab5' size={22} style={{}} />
                    </div>

                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <p>“We have collaborated with Amitt at Parikh Info Solutions for several years, and are thoroughly impressed with their timeliness, responsiveness, and quality of work”.</p>
                </div>
            </Wrap>
            <Wrap>
                <div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "3rem" }}>
                        <h1>Sofia Gutierrez</h1>
                        <AiFillGoogleCircle color='#49dab5' size={22} style={{}} />
                    </div>


                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <BsFillStarFill color='#f0ad4e' size={20} />
                    <p>Parikh Info Solutions has done great quality translation work for our agency for many years now. Amitt, our main contact, is professional, and always meets quick turnarounds on all of our tight deadlines. We are happy to work alongside them, and will continue to do so. </p>
                </div>
            </Wrap>


        </Carousel>

    )

}