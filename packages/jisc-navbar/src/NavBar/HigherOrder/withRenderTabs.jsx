// @flow

import React from "react"
import Tab from "Tab"
import {withProps} from "recompose"

const renderTabsDefault = (tabs: Array<TabType>) =>
  tabs.map((tab) => {

    const {name, link} = tab

    let active = ""

    if (tab.active) {

      active = "active"

    }

    let hide = "js-hide"

    if (tab.show) {

      hide = ""

    }

    return <Tab
      active={active}
      hide={hide}
      key={link}
      link={link}
      name={name}
           />

  })

type Props = {
  renderTabs: RenderTabsFunction
}

const renderTabs = function renderTabs (props: Props) {

  return {
    renderTabs: props.renderTabs || renderTabsDefault
  }

}

export default withProps(renderTabs)
