import React from "react";
import Card from "../Card/Card";
import "./FeaturedPRoducts.scss";
import black1 from "../../assets/black1.jpg"
import black2 from "../../assets/black2.jpg"
import pro1 from "../../assets/pro1.jpg"
import pro2 from "../../assets/pro2.jpg"
import blonde1 from "../../assets/blonde1.jpg"
import blonde2 from "../../assets/blonde2.jpg"
import shirt1 from "../../assets/shirt1.jpg"
import shirt2 from "../../assets/shirt2.jpg"

export default function FeaturedProducts({ type, content }) {
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
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <div><p>
          {content}
        </p></div>
      </div>
      <div className="bottom">
        {data.map((item)=>{
          return <Card item={item} key={item.id}/>
        })}
      </div>
    </div>
  );
}
