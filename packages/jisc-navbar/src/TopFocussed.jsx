// @flow

import React from "react"
import TopFocussedItems from "TopFocussedItems"

type Props = {
  items: Array<FocussedItem>,
  title: string
}

const TopFocussed = function TopFocussed ({
  items,
  title
}: Props) {

  return (
      <div>
        <div
          className="title-nav"
          data-dropdown
          id="nav"
        >
          <div
            className="has-popup masthead__nav__item"
            data-dropdown-item
          >
            <h1 className="masthead__title masthead__title--long">
              <a href="/">
                {title}
              </a>
            </h1>
          </div>
        </div>

        <nav
          className="masthead__nav masthead__nav--primary"
          data-dropdown
          role="navigation"
        >
            <TopFocussedItems
              items={items}
            />
        </nav>
      </div>
    )

}

export default TopFocussed
