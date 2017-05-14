// @flow

import Main from "Main"
import React from "react"
import Top from "Top"

type Props = {
  focussed?: boolean,
  focussedTitle?: string,
  focussedItems?: Array<FocussedItem>,

  primary?: Array<TabType>,
  renderTabs: RenderTabsFunction,
  secondary?: Array<TabType>,
  title: string
}

const NavBar = function NavBar ({
  title,
  primary = [],
  secondary = [],
  focussed = false,
  focussedTitle = "",
  focussedItems = [],
  renderTabs
}: Props) {

    let className = "masthead"

    if (!focussed) {

      className = "masthead--focussed"

    }

    return (
      <header
        className={`${className}`}
        data-mobilemenu
        role="banner"
      >
        <Top
          focussed={focussed}
          focussedItems={focussedItems}
          focussedTitle={focussedTitle}
        />

        <If condition={!focussed}>
          <Main
            primary={primary}
            renderTabs={renderTabs}
            secondary={secondary}
            title={title}
          />
        </If>
      </header>
    )

}

NavBar.defaultProps = {
  focussed: false,
  focussedItems: [],
  focussedTitle: "",

  primary: [],
  secondary: []
}

export default NavBar
