import React, { useState } from "react";
import "./Product.scss";
import pro1 from "../../assets/pro1.jpg";
import pro2 from "../../assets/pro2.jpg";
import pro3 from "../../assets/pro3.jpg";
import { MdAddShoppingCart } from "react-icons/md";
import { BsHeart } from "react-icons/bs";


export default function Product() {
  const images = [pro1, pro2, pro3];
  

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
