import React, { PropTypes } from "react"

import NavBarTop from "./NavBarTop.jsx"
import NavBarMain from "./NavBarMain.jsx"
import NavBarTab from "./NavBarTab.jsx"

class NavBar extends React.Component {
  renderTabs( tabs ) {
    return tabs
            .map( ( tab, i ) => {
              const { name, link } = tab,
                    active = tab.active ? "active" : "",
                    hide = tab.show ? "" : "js-hide"

              return(
                <NavBarTab
                  name={name}
                  link={link}
                  active={active}
                  hide={hide}
                  key={i} />
              )
            })
  }
  
  render( ) {
    const { title, primary, secondary, focussed, renderTabs } = this.props,
          className = focussed ? "masthead--focussed" : "masthead"

    return(
      <header className={`${className}`} role="banner" data-mobilemenu>
        <NavBarTop />

        { !focussed &&
          <NavBarMain
            title={title}
            primary={primary}
            secondary={secondary}
            renderTabs={renderTabs || this.renderTabs.bind( this )} />
        }
      </header>
    )
  }
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,

  primary: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    show: PropTypes.bool
  })),
  secondary: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    show: PropTypes.bool
  })),

  focussed: PropTypes.bool,
  renderTabs: PropTypes.func,
}

export default NavBar
