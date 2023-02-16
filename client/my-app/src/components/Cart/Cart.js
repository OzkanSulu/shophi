import React from "react";
import "./Cart.scss";
import { MdDeleteOutline } from "react-icons/md";

export default function Cart() {
  const data = [
    {
      id: 1,
      img: "img1",

      title: "title1",
      desc: "this is desc",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "img2",
      desc: "this is desc",
      title: "title2",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      {data?.map((item) => {
        return (
          <div className="item" key={item.id}>
          
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>

              
              
            </div>
           
            <div className="price">1 x ${item.price}</div>
            <div>
              <MdDeleteOutline className="delete" />
              </div>
           
          </div>
        );
      })}
      <div className="total">
        <span>Subtotal</span>
        <span>$99</span>
      </div>
      <button>CHECKOUT</button>
      <span className="reset"> Reset Cart</span>
    </div>
  );
}
