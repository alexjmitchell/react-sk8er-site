import React from "react"
import Icon from "../lib/Icon"
import "../styles/HeaderNav.css"

const HeaderNav = props => {
  return (
    <div>
      <ul className="nav">
        <li>
          <Icon icon="minus" /> sk8t news <Icon icon="minus" />
        </li>
        <li>
          <Icon icon="minus" /> skateboarders <Icon icon="minus" />
        </li>
        <li>
          <Icon icon="minus" /> board design <Icon icon="minus" />
        </li>
        <li>
          <Icon icon="minus" /> contact us <Icon icon="minus" />
        </li>
      </ul>
    </div>
  )
}

export default HeaderNav
