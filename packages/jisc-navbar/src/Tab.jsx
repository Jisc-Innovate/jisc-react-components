// @flow

import React from "react"
import { Link } from "react-router"

import {TabType} from "types/Tab"

class Tab extends React.Component {
  props: TabType;

  render( ) {
    const { name, link, active, hide } = this.props

    return(
      <li className={`nav__item ${active} ${hide}`}>
        <Link to={link}>
          {name}
        </Link>
      </li>
    )
  }
}

export default Tab
