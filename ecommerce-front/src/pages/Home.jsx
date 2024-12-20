import React from "react"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Annoucements from "../components/Annoucements"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0, width: "100%" }}>
      <Annoucements />
      <Navbar />
      <Slider />
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
