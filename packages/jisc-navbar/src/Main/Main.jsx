// @flow

import Primary from "Main/Primary"
import React from "react"
import Secondary from "Main/Secondary"

type Props = {
  primary: Array<TabType>,
  renderTabs: RenderTabsFunction,
  secondary: Array<TabType>,
  title: string
}

const Main = function Main ({
  renderTabs,
  primary,
  secondary,
  title
}: Props) {

    return (
      <div className="masthead__main masthead__main--with-content">
        <div className="inner">
          <p className="masthead__title masthead__title--short">
            {title}
          </p>

          <div className="nav-wrapper">
            <Primary
              renderTabs={renderTabs}
              tabs={primary}
            />

            <Secondary
              renderTabs={renderTabs}
              tabs={secondary}
            />
          </div>
        </div>
      </div>
    )

}

export default Main
