import React from 'react'
import{Link} from "react-router-dom"
import "./Card.scss"

export default function Card({item}) {
  return (
    <div className='card'>
      <Link className='link' to={`/product/${item.id}`}>
        <div className='card'>
        
          <div className='image'>
           
            <img src={item.img} alt="" className="firstImg"/>
            <img src={item.img2} alt="" className="secondImg"/>
          </div>
          <h2>{item.title}</h2>
          <div><p>{item.desc}</p></div>
          <div className='prices'>
            <h4>${item.oldPrice}</h4>
            <h4>${item.price}</h4>
          </div>
        </div>
      </Link>
    </div>
  )
}
