import React from "react"
import Header from "./Header"
import Banner from "./Banner"
import "../styles/Main.css"

const Main = props => {
  return (
    <div className="main-container">
      <Header />
      <Banner />
    </div>
  )
}

export default Main
