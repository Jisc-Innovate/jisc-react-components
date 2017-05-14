// @flow

import React from "react"

type Props = {
  tabs: Array<React.Element<any>>
}

const Secondary = function Secondary ({
  tabs
}: Props) {

  return (
    <nav
       className="masthead__nav masthead__nav--secondary"
       data-dropdown
       role="navigation"
    >

      <ul>
        {tabs}
      </ul>

      </nav>
  )

}

export default Secondary
