// @flow

import Arrow from "./Arrow"
import Copy from "./Copy"
import React from "react"

type Props = {
  title: string,
  description: string,
  url?: string
}

const TeaserArrow = function TeaserArrow ({
  title,
  description,
  url
}: Props) {

  return (
    <article className="teaser">

     <Copy
       description={description}
       title={title}
       url={url}
     />

     <Arrow
       url={url}
     />
   </article>
  )

}

TeaserArrow.defaultProps = {
  url: "#"
}

export default TeaserArrow
