// @flow

import React from "react"
import { Link } from "react-router"
import image from "url-loader!./logo.png"

import TopDefault from "TopDefault"
import TopFocussed from "TopFocussed"

import {FocussedItem} from "types/Item"

type Props = {
  focussed: ?bool,
  focussedTitle: string,
  focussedItems: Array<FocussedItem>
}

class Top extends React.Component {
  props: Props;

  render( ) {
    const { focussed, focussedTitle, focussedItems } = this.props

    return(
      <div className="masthead__top">
        <div className="inner">
          <Link className="masthead__logo" to="/">
            <img src={image} alt="Jisc logo" />
          </Link>

          { focussed ?
            <TopFocussed
              title={focussedTitle}
              items={focussedItems} />
            :
            <TopDefault />
          }
        </div>
      </div>
    )
  }
}

Top.propTypes = {
}

export default Top
