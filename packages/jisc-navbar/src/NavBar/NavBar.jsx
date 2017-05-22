// @flow

import Main from "Main"
import React from "react"
import Top from "Top"

type Props = {
  focussed?: boolean,
  focussedClassname: string,
  focussedTitle?: string,
  focussedItems?: Array<FocussedItem>,

  primary?: Array<TabType>,
  renderTabs: RenderTabsFunction,
  secondary?: Array<TabType>,
  title?: string
}

const NavBar = function NavBar ({
  focussed = false,
  focussedClassname,
  focussedTitle = "",
  focussedItems = [],
  renderTabs,
  primary = [],
  secondary = [],
  title = ""
}: Props) {

    return (
      <header
        className={`${focussedClassname}`}
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
  secondary: [],

  title: ""
}

export default NavBar
