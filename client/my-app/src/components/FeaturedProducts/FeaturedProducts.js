import React from "react";
import Card from "../Card/Card";
import "./FeaturedPRoducts.scss";

export default function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img: "img1",
      img2: "img12",
      title: "title1",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "img2",
      img2: "img22",
      title: "title2",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "img3",
      img2: "img32",
      title: "title3",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "img4",
      img2: "img42",
      title: "title4",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <div><p>
          You will find featured products on our website that offer the best
          combination of quality and value. These products are carefully
          selected based on their popularity, customer reviews, and overall
          value. Whether you're looking for stylish clothing, comfortable
          footwear, or must-have accessories, you'll find it all here at
          affordable prices. Our featured products are updated regularly to
          ensure you always have access to the latest trends and top-selling
          items. So, don't miss out on the chance to discover amazing deals and
          unbeatable quality on our featured products page.
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
