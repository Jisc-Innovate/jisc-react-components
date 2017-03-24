// @flow

import React from "react"

import {TabType} from "types/Tab"

type Props = {
  tabs: Array<TabType>,
  renderTabs: ( ) => void
}

class Secondary extends React.Component {
  props: Props;

  render( ) {
    const { renderTabs } = this.props,
          tabs = renderTabs( this.props.tabs )

    return(
      <nav
         className="masthead__nav masthead__nav--secondary"
         role="navigation"
         data-dropdown>

          <ul>
            {tabs}
          </ul>

      </nav>
    )
  }
}

export default Secondary
