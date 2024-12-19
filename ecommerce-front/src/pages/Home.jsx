import React from "react"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Annoucements from "../components/Annoucements"

const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0, width: "100%" }}>
      <Annoucements />
      <Navbar />
      <Slider />
    </div>
  )
}

export default Home
