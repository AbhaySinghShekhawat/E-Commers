import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Pages/Hero'
import NewArrivals from './Pages/NewArrivals'
import Categories from './Pages/Categories'
import FandomSlider from './Pages/FandomSlider'
import ThreadsOfTradition from './Pages/ThreadsOfTradition'
import ShopForSection from './Pages/ShopForSection'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <NewArrivals />
      <Categories />
      <FandomSlider />
      <ThreadsOfTradition />
      <ShopForSection />
      <Footer />
    </div>
  )
}
