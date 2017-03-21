// @flow

import React from "react"

import TopFocussedItem from "TopFocussedItem"

import {FocussedItem} from "types/Item"

type Props = {
  items: Array<FocussedItem>
}

class Items extends React.Component {
  props: Props;

  render( ) {
    const { items } = this.props

    return (
      <ul>
        {items
          .map( ( item, i ) => {
            const { link, name } = item

            return (
              <TopFocussedItem
                key={i}
                link={link}
                name={name} />
            )
          })
        }
      </ul>
    )
  }
}

export default Items
