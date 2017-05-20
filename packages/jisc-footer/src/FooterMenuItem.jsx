// @flow

import React from "react"

const FIRST_ITEM = 0

type Props = {
  item: Array<string>
}

const FooterMenuItem = ({
  item
}: Props) =>
  <span>
    {item
     .map((text, index) =>
       <Choose
         key={text}
       >
         <When condition={index === FIRST_ITEM}>
          <span
            key={text}
          >
            {text}
          </span>
         </When>
         <Otherwise>
          <span
            className="linklist__item__break"
          >
            {text}
          </span>
         </Otherwise>
       </Choose>
     )}
  </span>

export default FooterMenuItem
