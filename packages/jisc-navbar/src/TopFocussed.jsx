// @flow

import React from "react"

import TopFocussedItems from "./TopFocussedItems"

import {FocussedItem} from "types/Item"

type Props = {
  title: ?string,
  items: Array<FocussedItem>
}

class TopFocussed extends React.Component {
  props: Props;

  render( ) {
    const { title, items } = this.props

    return(
      <div>
        <div id="nav" className="title-nav" data-dropdown>
          <div className="has-popup masthead__nav__item" data-dropdown-item>
            <h1 className="masthead__title masthead__title--long">
              <a href="/">
                {title}
              </a>
            </h1>
          </div>
        </div>

        <nav
          className="masthead__nav masthead__nav--primary"
          role="navigation"
          data-dropdown>
            <TopFocussedItems
              items={items} />
        </nav>
      </div>
    )
  }
}

export default TopFocussed
