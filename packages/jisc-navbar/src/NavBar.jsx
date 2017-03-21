// @flow

import React, { PropTypes } from "react"

import Top from "Top"
import Main from "Main"
import Tab from "Tab"

import {TabType} from "types/Tab"

class NavBar extends React.Component {
  renderTabs( tabs: Array<TabType> ) {
    return tabs
            .map( ( tab, i ) => {
              const { name, link } = tab,
                    active = tab.active ? "active" : "",
                    hide = tab.show ? "" : "js-hide"

              return(
                <Tab
                  name={name}
                  link={link}
                  active={active}
                  hide={hide}
                  key={i} />
              )
            })
  }

  render( ) {
    const { title, primary, secondary, focussed, focussedTitle, focussedItems,
            renderTabs } = this.props,
          className = focussed ? "masthead--focussed" : "masthead"

    return(
      <header className={`${className}`} role="banner" data-mobilemenu>
        <Top
          focussed={focussed}
          focussedTitle={focussedTitle}
          focussedItems={focussedItems} />

        { !focussed &&
          <Main
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
  title: PropTypes.string,

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
  focussedTitle: PropTypes.string,

  focussedItems: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    name: PropTypes.string.isRequired
  }).isRequired),

  renderTabs: PropTypes.func,
}

export default NavBar
