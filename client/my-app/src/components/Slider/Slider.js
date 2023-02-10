import React from 'react'
import "./Slider.scss"
import shopping1 from "../../assets/shopping1.png"
import shopping2 from "../../assets/shopping2.png"
import shopping3 from "../../assets/shopping3.png"
import shopping4 from "../../assets/shopping4.png"

export default function Slider() {
    

  return (
    <div className='slider'>
        <div className='container'>
            <div className='sliderItems' >
                <div className='sliderItem'>
                    <img src={shopping1} alt=""/>
                </div>
                <div className='sliderItem'>
                    <img src={shopping2} alt=""/>
                </div>
                <div className='sliderItem'>
                    <img src={shopping3} alt=""/>
                </div>
                <div className='sliderItem'>
                    <img src={shopping4} alt=""/>
                </div>
            </div>
            
        </div>
    </div>
  )
}
