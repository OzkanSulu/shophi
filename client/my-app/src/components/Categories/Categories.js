import React from 'react'
import "./Categories.scss"
import cat1 from "../../assets/category1.jpg"
import cat2 from "../../assets/category2.jpg"
import cat3 from "../../assets/category3.jpg"
import cat4 from "../../assets/category4.jpg"
import cat5 from "../../assets/category5.jpg"
import cat6 from "../../assets/category6.png"
import {Link} from "react-router-dom"


export default function Categories() {
  return (
    <div className='categories'>
        <div className='col'>
            
            <div className='row'>
          
                <img src={cat1} style={{maxWidth:"400px"}} alt=""/>
                <div className='catlayout'>
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
            <div className='row' style={{height:"215px"}}>
            
            <img src={cat2} alt=""/>
                <div className='catlayout'>
                    <button>
                        <Link className='link' to="/products/2">Women</Link>
                    </button>
                </div>
            </div>
        </div>
        <div className='col'>
            <div className='row'>
           
            <img src={cat3} style={{maxWidth:"350px"}} alt=""/>
                <div className='catlayout'>
                    <button>
                        <Link className='link' to="/products/3">New Season</Link>
                    </button>
                </div>
            </div>
        </div>
        <div className='col col-l'>
        <div className='col' >
           <div className='row'>
           
           <img src={cat5} style={{height:"270px", maxWidth:"340px"}} alt=""/>
       <div className='catlayout'>
           <button >
               <Link className='link' to="/products/4">Men</Link>
           </button>
       </div>
           </div>
           <div className='row'>
           
           <img src={cat4} style={{height:"270px", maxWidth:"340px"}} alt=""/>
       <div className='catlayout'>
           <button >
               <Link className='link' to="/products/4">Sport</Link>
           </button>
       </div>
           </div>
       </div>
       
                
            <div className='col' >
           
                    <div className='row'>
                    
                    <img style={{maxWidth:"700px", height:"205px"}} src={cat6} alt=""/>
                <div className='catlayout'>
                    <button >
                        <Link className='link' to="/products/5">Shoes</Link>
                    </button>
                </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
