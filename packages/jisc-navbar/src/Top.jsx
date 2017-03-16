import React, { PropTypes } from "react"
import { Link } from "react-router"
import image from "url-loader!./logo.png"

import TopDefault from "./TopDefault.jsx"
import TopFocussed from "./TopFocussed.jsx"

class Top extends React.Component {
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
  focussed: PropTypes.bool,
  focussedTitle: PropTypes.string,

  focussedItems: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    name: PropTypes.string.isRequired
  }).isRequired)
}

export default Top
