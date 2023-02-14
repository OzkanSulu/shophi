import React, { useEffect, useState } from "react";
import "./Slider.scss";
import shopping1 from "../../assets/shopping1.png";
import shopping2 from "../../assets/shopping2.png";
import shopping3 from "../../assets/shopping3.png";
import shopping4 from "../../assets/shopping4.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";



export default function Slider() {
  const [slide,setSlide] = useState(0);
  const [translateX,setTranslateX]=useState(0);
  const handleSlide = (direction) =>{
    
      if(direction==="left"&&slide>0){
        setSlide(slide-1)
      }
      if(direction==="right"&& slide<3){
        setSlide(slide+1)
      }

    
  }

  useEffect(()=>{setTranslateX(slide*100)},[slide])
  
  return (
    <div className="slider">
      <div className="container">
        <FiChevronLeft
          className="arrow left"
          onClick={() => handleSlide("left")}
        />
        <div
          className="sliderItems"
          style={{transform:`translateX(-${translateX}vw)`}}
        >
          <div className="sliderItem">
            <img src={shopping2} alt="" />
          </div>
          <div className="sliderItem">
            <img src={shopping1} alt="" />
          </div>
          <div className="sliderItem">
            <img src={shopping3} alt="" />
          </div>
          <div className="sliderItem">
            <img src={shopping4} alt="" />
          </div>
        </div>
        <FiChevronRight
          className="arrow right"
          onClick={()=>handleSlide("right")}
        />
      </div>
    </div>
  );
}
