import React, { PropTypes } from "react"
import { Link } from "react-router"

class NavBarTab extends React.Component {
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

NavBarTab.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  hide: PropTypes.string.isRequired
}

export default NavBarTab