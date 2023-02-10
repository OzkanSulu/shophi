import React from 'react'
import {BsChevronDown,BsSearch,BsPerson,BsHeart,} from "react-icons/bs"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {Link} from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Navbar.scss"

export default function Navbar() {
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
                <Link to="/products/1">Women</Link>
            </div>
            <div className='item'>
                <Link to="/products/2">Men</Link>
            </div>
            <div className='item'>
                <Link to="/products/3">Kids</Link>
            </div>
        </div>
        <div className='center'>
            <Link to="/"><img src={logo} alt=''/></Link>
        </div>
        <div className='right'>
            <div className='center'>
                <Link to="/">About</Link>
            </div>
            <div className='center'>
                <Link to="/">Contact</Link>
            </div>
            <div className='center'>
                <Link to="/">Stores</Link>
            </div>
            <div className='icons'>
               <BsSearch/>
               <BsHeart/>
               <BsPerson/>
               <div className='cartIcon'>
                <AiOutlineShoppingCart/>
                <span>0</span>
               </div>

            </div>
        </div>
        </div>
    </div>
  )
}
