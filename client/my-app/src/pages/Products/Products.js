import React, { useState } from 'react'
import "./Products.scss"
import hiking from "../../assets/hiking.jpg"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'

export default function Products() {

  const catId = parseInt(useParams().id);

  const [maxPrice,setMacPrice] = useState();
  const [sort,setSort]=useState();
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
              <h2>Product Categories</h2>
              <div className='inputItem'>
                <input type="checkbox" id='1' value={1}/>
                <label htmlFor='1'>Shoes</label>
              </div>
              <div className='inputItem'>
                <input type="checkbox" id='2' value={2}/>
                <label htmlFor='1'>Socks</label>
              </div>
              <div className='inputItem'>
                <input type="checkbox" id='3' value={3}/>
                <label htmlFor='1'>Jeans</label>
              </div>
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItem'>
            <span>0</span>
                <input type="range" min={0} max={100} onChange={(e)=>setMacPrice(()=>e.target.value)}/>
                <span>100</span>
              </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input type="radio" id='asc' value="asc" name='price' onChange={()=>setSort("asc")}></input>
            <label htmlFor='asc'>Price (from lowest)</label>
          </div>
          <div className='inputItem'>
            <input type="radio" id='desc' value="desc" name='price'onChange={()=>setSort("desc")}></input>
            <label htmlFor='desc'>Price (from highest)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <div ><img src={hiking} className='catImg'  alt="" /></div>
        
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}
