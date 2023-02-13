import React from 'react'
import Categories from '../../components/Categories/Categories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'

export default function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="Featured"/>
      <Categories />
      <FeaturedProducts type="Trending" />
    </div>
  )
}
