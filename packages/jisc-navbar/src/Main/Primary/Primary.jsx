// @flow

import React from "react"

type Props = {
  tabs: Array<React.Element<any>>
}

const Primary = ({tabs}: Props) =>
  <nav
    className="masthead__nav header__nav--primary"
    data-dropdown
    role="navigation"
  >

    <ul>
      {tabs}
    </ul>

  </nav>

export default Primary
