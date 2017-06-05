// @flow

import {Link} from "react-router"
import React from "react"
import TopDefault from "TopDefault"
import TopFocussed from "TopFocussed"
import image from "url-loader!./logo.png"

type Props = {
  focussed: boolean,
  focussedItems: Array<FocussedItem>,
  focussedTitle: string
}

const Top = ({focussed, focussedTitle, focussedItems}: Props) =>
  <div className="masthead__top">
    <div className="inner">
      <Link
        className="masthead__logo"
        to="/"
      >
        <img
          alt="Jisc logo"
          src={image}
        />
      </Link>

      <Choose>
        <When condition={focussed}>
          <TopFocussed
            items={focussedItems}
            title={focussedTitle}
          />
        </When>

        <Otherwise>
          <TopDefault />
        </Otherwise>
      </Choose>
    </div>
  </div>

export default Top
