import React from "react"
import Icon from "../lib/Icon"
import "../styles/HeaderIcons.css"

const HeaderIcons = props => {
  return (
    <div className="icons">
      <Icon icon="facebook" />
      <Icon icon="feed" />
      <Icon icon="twitter" />
      <Icon icon="youtube" />
    </div>
  )
}

export default HeaderIcons
