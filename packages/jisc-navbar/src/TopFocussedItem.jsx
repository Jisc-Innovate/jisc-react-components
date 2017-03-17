import React, { PropTypes } from "react"

class Item extends React.Component {
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

Item.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default Item
