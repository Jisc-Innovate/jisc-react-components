// @flow

import React from "react"

type Props = {
  title: string,
  description: string,
  url: string
}

const TeaserArrow = function TeaserArrow ({
  title,
  description,
  url
}: Props) {

  return (
    <article className="teaser">

     <div className="teaser__copy has-arrow">
       <h2 className="teaser__title">
         <a href={url}>
           {title}
         </a>
       </h2>

       <p>
         {description}
       </p>
     </div>


     <a
        className="teaser__arrow"
        href={url}
     >
       <span className="visuallyhidden">
         {`Read more`}
       </span>
     </a>
   </article>
  )

}

export default TeaserArrow
