// @flow

import React from "react"
import TopFocussedItem from "TopFocussedItem"

type Props = {
  items: Array<FocussedItem>
}

const Items = function Items ({
  items
}: Props) {

  return (
    <ul>
      {items
        .map(({link, name}) =>

          <TopFocussedItem
            key={name}
            link={link}
            name={name}
          />

        )
      }
    </ul>
  )

}

export default Items
