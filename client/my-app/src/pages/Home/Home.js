import React from "react";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts
        type="Trend"
        content="Welcome to our website's trending clothes section, where you will find a carefully curated selection of the most popular and stylish clothing items, footwear, and accessories at affordable prices. We understand the importance of both quality and value, which is why we only feature products that offer the perfect combination of both.

Our team of experts scours the market to bring you the latest fashion trends and customer favorites, ensuring that you have access to the best products available. We also take into account customer reviews to make sure that the products we feature meet or exceed our customers' expectations.

Our featured products are updated regularly, so you can always stay on top of the latest fashion trends and must-have items. We know that staying stylish doesn't have to break the bank, which is why we offer unbeatable quality at affordable prices.

We take pride in offering a hassle-free online shopping experience and outstanding customer service. So, whether you're looking for a new outfit for a special occasion or just want to update your wardrobe, our featured products page is the perfect place to start. Don't miss out on the chance to discover amazing deals and top-quality products that are sure to impress."
      />
      <Categories />
      <FeaturedProducts
        type="Featured"
        content="You will find featured products on our website that offer the best
          combination of quality and value. These products are carefully
          selected based on their popularity, customer reviews, and overall
          value. Whether you're looking for stylish clothing, comfortable
          footwear, or must-have accessories, you'll find it all here at
          affordable prices. Our featured products are updated regularly to
          ensure you always have access to the latest trends and top-selling
          items. So, don't miss out on the chance to discover amazing deals and
          unbeatable quality on our featured products page."
      />
      <Contact />
    </div>
  );
}
