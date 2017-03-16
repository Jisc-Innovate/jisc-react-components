import React, { PropTypes } from "react"

import NavBarPrimary from "./NavBarPrimary.jsx"
import NavBarSecondary from "./NavBarSecondary.jsx"

class NavBarMain extends React.Component {
  render( ) {
    const { title, renderTabs, primary, secondary } = this.props

    return(
      <div className="masthead__main masthead__main--with-content">
        <div className="inner">
          <p className="masthead__title masthead__title--short">
            {title}
          </p>

          <div className="nav-wrapper">
            <NavBarPrimary
              tabs={primary}
              renderTabs={renderTabs} />

            <NavBarSecondary
              tabs={secondary}
              renderTabs={renderTabs} />
          </div>
        </div>
      </div>
    )
  }
}

NavBarMain.propTypes = {
  title: PropTypes.string.isRequired,
  renderTabs: PropTypes.func.isRequired,

  primary: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    show: PropTypes.bool
  })).isRequired,

  secondary: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    show: PropTypes.bool
  })).isRequired
}

export default NavBarMain
