// @flow

import React from "react"

import {FocussedItem} from "types/Item"

class Item extends React.Component {
  props: FocussedItem;

  render( ) {
    const { link, name } = this.props

    return (
      <li
        className="masthead__nav__item">
          <a href={`${link}`}>
            {name}
          </a>
      </li>
    )
  }
}

export default Item
