import React from 'react'
import "./Categories.scss"
import cat1 from "../../assets/category1.png"
import cat2 from "../../assets/category2.png"
import cat3 from "../../assets/category3.png"
import cat4 from "../../assets/category4.png"
import cat5 from "../../assets/category5.png"
import cat6 from "../../assets/category6.png"
import {Link} from "react-router-dom"


export default function Categories() {
  return (
    <div className='categories'>
        <div className='col'>
            
            <div className='row'>
          
                <img src={cat1} alt=""/>
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
           
            <img src={cat3} alt=""/>
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
           
           <img src={cat5} style={{height:"215px"}} alt=""/>
       <div className='catlayout'>
           <button >
               <Link className='link' to="/products/4">Men</Link>
           </button>
       </div>
           </div>
       </div>
                
            <div className='col' >
           
                    <div className='row'>
                    
                    <img src={cat6} alt=""/>
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
