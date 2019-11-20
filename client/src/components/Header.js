import React from "react"
import '../styles/Header.css'
import HeaderIcons from "./HeaderIcons"
import HeaderNav from "./HeaderNav"

const Header = props => {
  return (
    <div>
      <section className="social-media-header">
        <h4>Subscribe</h4>
        <HeaderIcons />
      </section>
      <HeaderNav />
    </div>
  )
}

export default Header
