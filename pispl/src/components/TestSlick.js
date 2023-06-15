import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components';
import Slider from "react-slick";
const carousel=styled(Slider)`
    height:371px;
    width:100%;
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
`
const Wrap=styled.div`
    p{
        border-radius:5px;
        border:2px solid red;
    }
`
export default function TestSlick() {
    let settings={
        dots:true,
        infinte:true,
        speed :500,
        slidesToScroll:1,
        autoplay:true,
    }
  return (
    <carousel {...settings}>
        <Wrap>
            <p>1</p>
        </Wrap>
        <Wrap>
            <p>2</p>
        </Wrap>
        <Wrap>
            <p>3</p>
        </Wrap>
        <Wrap>
            <p>4</p>
        </Wrap>

    </carousel>
  )
}
