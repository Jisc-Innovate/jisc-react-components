// @flow

import React from "react"

const Item = function Item ({
  link = "#",
  name
}: FocussedItem) {

  return (
    <li
      className="masthead__nav__item"
    >
      <a href={`${link}`}>
        {name}
      </a>
    </li>
  )

}

export default Item
