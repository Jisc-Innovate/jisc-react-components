// @flow

import React from "react"

import Primary from "./Primary.jsx"
import Secondary from "./Secondary.jsx"

import {TabType} from "types/Tab"

type Props = {
  title: string,
  renderTabs: ( ) => void,

  primary: Array<TabType>,

  secondary: Array<TabType>
}

class Main extends React.Component {
  props: Props;

  render( ) {
    const { title, renderTabs, primary, secondary } = this.props

    return(
      <div className="masthead__main masthead__main--with-content">
        <div className="inner">
          <p className="masthead__title masthead__title--short">
            {title}
          </p>

          <div className="nav-wrapper">
            <Primary
              tabs={primary}
              renderTabs={renderTabs} />

            <Secondary
              tabs={secondary}
              renderTabs={renderTabs} />
          </div>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
}

export default Main
