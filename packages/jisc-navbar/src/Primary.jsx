// @flow

import React from "react"

import {TabType} from "types/Tab"

type Props = {
  tabs: Array<TabType>,
  renderTabs: ( ) => void
}

class Primary extends React.Component {
  props: Props;

  render( ) {
    const { renderTabs } = this.props,
          tabs = renderTabs( this.props.tabs )

    return(
      <nav
         className="masthead__nav header__nav--primary"
         role="navigation"
         data-dropdown>

          <ul>
            {tabs}
          </ul>

      </nav>
    )
  }
}

export default Primary
