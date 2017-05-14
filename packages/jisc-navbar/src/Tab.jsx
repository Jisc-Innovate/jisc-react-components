// @flow

import {Link} from "react-router"
import React from "react"

type Props = {
  active: string,
  hide: string,
  link: string,
  name: string
}

const Tab = function Tab ({
  name,
  link,
  active,
  hide
}: Props) {

    return (
      <li className={`nav__item ${active} ${hide}`}>
        <Link to={link}>
          {name}
        </Link>
      </li>
    )

}

export default Tab
