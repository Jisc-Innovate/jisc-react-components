import React from "react"

class NavBarTopDefault extends React.Component {
  render( ) {
    return(
      <nav
       className="masthead__topnav"
       aria-label="Main menu"
       role="navigation">

        <ul className="topnav__list" id="nav" data-dropdown>
        </ul>

      </nav>
    )
  }
}

export default NavBarTopDefault
