import React from 'react'
import "./Contact.scss"
import {BsInstagram, BsFacebook, BsTwitter, BsTwitch,BsPinterest} from "react-icons/bs"

export default function Contact() {
  return (
    <div>
        <div className='contact'>
            <div className='wrapper'>
                <span> Be In Touch With Us</span>
                <div className='mail'>
                    <input type="text" placeholder='Enter your e-mail...'/>
                    <button>Join Us</button>
                </div>
                <div className='icons'>
                    <BsInstagram />
                    <BsFacebook />
                    <BsTwitter />
                    <BsPinterest />
                    <BsTwitch />
                </div>
            </div>
        </div>
    </div>
  )
}
