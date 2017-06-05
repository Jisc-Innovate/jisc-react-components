// @flow

import React from "react"
import TopFocussedItem from "TopFocussedItem"

type Props = {
  items: Array<FocussedItem>
}

const Items = ({items}: Props) =>
  <ul>
    {items.map(({link, name}) =>
      <TopFocussedItem
        key={name}
        link={link}
        name={name}
      />
    )}
  </ul>

export default Items
