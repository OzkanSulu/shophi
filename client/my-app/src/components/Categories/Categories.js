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
                <div>
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
            <div className='row' style={{height:"215px"}}>
            <img src={cat2} alt=""/>
                <div>
                    <button>
                        <Link className='link' to="/products/2">Sale</Link>
                    </button>
                </div>
            </div>
        </div>
        <div className='col'>
            <div className='row'>
            <img src={cat3} alt=""/>
                <div>
                    <button>
                        <Link className='link' to="/products/3">Sale</Link>
                    </button>
                </div>
            </div>
        </div>
        <div className='col col-l'>
            <div className='row'>
                <div className='col'>
                  
                <div  style={{marginRight:"10px"}}>
                    <img src={cat4} alt=""/>
                <div>
                    <button>
                        <Link className='link' to="/products/4">SALE</Link>
                    </button>
                </div>
                </div>
                </div>
                <div className='col'>
                <div style={{width:"400px", height:"200px"}}>
                    <img src={cat5} alt=""/>
                <div>
                    <button>
                        <Link className='link' to="/products/5">Sale</Link>
                    </button>
                </div>
                </div>
                </div>
                
            </div>
            <div className='col' >
                    <div className='row'style={{marginTop:"20px"}}>
                    <img src={cat6} alt=""/>
                <div>
                    <button>
                        <Link className='link' to="/products/6">Sale</Link>
                    </button>
                </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
