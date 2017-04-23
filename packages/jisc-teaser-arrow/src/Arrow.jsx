// @flow

import React from "react"

type Props = {
  url?: string
}

const Arrow = function Arrow ({
  url
}: Props) {

  return (
     <a
        className="teaser__arrow"
        href={url}
     >
       <span className="visuallyhidden">
         {`Read more`}
       </span>
     </a>
  )

}

Arrow.defaultProps = {
  url: "#"
}

export default Arrow
