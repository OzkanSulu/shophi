import React, { useState } from "react";
import "./Product.scss";
import pro1 from "../../assets/pro1.jpg";
import pro2 from "../../assets/pro2.jpg";
import pro3 from "../../assets/pro3.jpg";
import { MdAddShoppingCart } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import black1 from "../../assets/black1.jpg"
import black2 from "../../assets/black2.jpg"
import blonde1 from "../../assets/blonde1.jpg"
import blonde2 from "../../assets/blonde2.jpg"
import shirt1 from "../../assets/shirt1.jpg"
import shirt2 from "../../assets/shirt2.jpg"

export default function Product() {
  const images = [pro1, pro2, pro3];
  const data = [
    {
      id: 1,
      img: pro1,
      img2: pro2,
      title: "Men's Quarter-Zip Polar",
      desc:"Zip polar black fleece jacket",
      oldPrice: 19,
      price: 13,
    },
    {
      id: 2,
      img: black1,
      img2: black2,
      title: "Women's Cot T-shirt",
      desc:"Full cotton black fleece t-shirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: blonde1,
      img2: blonde2,
      title: "SumMMR feelSummer",
      desc:"Silk precious summer woman shirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: shirt1,
      img2: shirt2,
      title: "WHTY Shirt Womn",
      desc:"Full cotton woman cool shirt",
      oldPrice: 19,
      price: 12,
    },
  ];

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const info = [
    "100% Polyester",
    "Imported",
    "Zipper closure",
    "Machine Wash",
    "Easy through chest and tapered through waist",
    "Soft, warm and fuzzy mid-weight polar fleece fabric",
    "Quarter-zip front",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
          <img src={images[2]} alt="" onClick={(e) => setSelectedImg(2)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Men's Quarter-Zip Polar Fleece Jacket</h1>
        <span className="price">$99</span>
        <ul>
          {info?.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => {
              setQuantity((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>

        <button className="add">
          <MdAddShoppingCart />
          <span>ADD TO CART</span>
        </button>
        <div className="link">
          <div className="item">
            <BsHeart /> <span> ADD TO WISHLIST </span>
          </div>
        </div>
        <div className="details">
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}
