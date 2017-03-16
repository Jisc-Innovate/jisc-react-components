import React, { PropTypes } from "react"

class TopFocussed extends React.Component {
  renderItems( ) {
    const { items } = this.props

    return items
      .map( ( item, i ) => {
        const { link, name } = this.props

        return(
          <li
            key={i}
            className="masthead__nav__item">
              <a href={`${link}`}>
                {name}
              </a>
          </li>
        )
      })
  }

  render( ) {
    const { title } = this.props

    return(
      <div>
        <div id="nav" className="title-nav" data-dropdown>
          <div className="has-popup masthead__nav__item" data-dropdown-item>
            <h1 className="masthead__title masthead__title--long">
              <a href="/">
                {title}
              </a>
            </h1>
          </div>
        </div>

        <nav
          className="masthead__nav masthead__nav--primary"
          role="navigation"
          data-dropdown>
            <ul>
              {this.renderItems( )}
            </ul>
        </nav>
      </div>
    )
  }
}

TopFocussed.propTypes = {
  title: PropTypes.string,

  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    name: PropTypes.string.isRequired
  }).isRequired)
}

export default TopFocussed
