import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,color:"black" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" }}
        onClick={onClick}
      />
    );
  }
export default class Test extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{width:"700px"}}>
        
        <Slider {...settings}>
          <div>
            <h3 style={{border:"2px solid red"}}>1</h3>
          </div>
          <div>
            <h3 style={{border:"2px solid red"}}>2</h3>
          </div>
          <div>
            <h3 style={{border:"2px solid red"}}>3</h3>
          </div>
          <div>
            <h3 style={{border:"2px solid red"}}>4</h3>
          </div>
          <div>
            <h3 style={{border:"2px solid red"}}>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}