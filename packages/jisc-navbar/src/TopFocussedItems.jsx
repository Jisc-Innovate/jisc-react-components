import React, { PropTypes } from "react"

import TopFocussedItem from "./TopFocussedItem"

class Items extends React.Component {
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

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    name: PropTypes.string.isRequired
  }).isRequired)
}

export default Items
