import React from "react";
import "./Footer.scss"

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About Us</h1>
          <span>
            "Shophi - Where Fashion Meets Convenience! We are a leading
            e-commerce platform offering the latest fashion styles for men,
            women, and kids. Whether you're looking for the latest trend or a
            classic staple, Sophi has it all. Our mission is to bring the world
            of fashion to your doorstep with easy shopping."
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Address: 123 Market Street, San Francisco, CA 94105</span>
          <span>Phone: (415) 555-1234</span>
          <span>Email: <a href="/">info@shophi.com</a></span>
          <span>Customer Service Hours: Mon-Fri 9am-5pm PST</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="copyright">Copyright © 2023 Sulu</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}
