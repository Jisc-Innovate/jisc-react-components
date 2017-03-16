import React from "react"
import { Link } from "react-router"
import image from "url-loader!./logo.png"

class NavBarTop extends React.Component {
  render( ) {
    return(
      <div className="masthead__top">
        <div className="inner">
          <Link className="masthead__logo" to="/">
            <img src={image} alt="Jisc logo" />
          </Link>

          <nav
           className="masthead__topnav"
           aria-label="Main menu"
           role="navigation">

            <ul className="topnav__list" id="nav" data-dropdown>
            </ul>

          </nav>
        </div>
      </div>
    )
  }
}

export default NavBarTop
