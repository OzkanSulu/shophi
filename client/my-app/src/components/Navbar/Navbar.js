import React, { useState } from 'react'
import {BsChevronDown,BsSearch,BsPerson,BsHeart,} from "react-icons/bs"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {Link} from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Navbar.scss"


export default function Navbar() {
    const [open,setOpen] = useState(false)
  return (
    <div className='navbar'>
        <div className='container'>
        <div className='left'>
            <div className='item'>
                <img src='img/en.png' alt=''/>
                <BsChevronDown />
            </div>
            <div className='item'>
                <span>USD</span>
                <BsChevronDown />
            </div>
            <div className='item'>
                <Link to="/products/1" className="link" >Women</Link>
            </div>
            <div className='item'>
                <Link to="/products/2" className="link" >Men</Link>
            </div>
            <div className='item'>
                <Link to="/products/3" className="link" >Kids</Link>
            </div>
        </div>
        <div className='center'>
            <Link to="/"><img src={logo} alt='' className="link" /></Link>
        </div>
        <div className='right'>
            <div className='center'>
                <Link to="/" className="link" >About</Link>
            </div>
            <div className='center'>
                <Link to="/" className="link" >Contact</Link>
            </div>
            <div className='center'>
                <Link to="/" className="link" >Stores</Link>
            </div>
            <div className='icons'>
               <BsSearch/>
               <BsHeart/>
               <BsPerson/>
               <div className='cartIcon' onClick={()=>setOpen(!open)}>
                <AiOutlineShoppingCart/>
                <span>0</span>
               </div>

            </div>
        </div>
        </div>
       
    </div>
  )
}
