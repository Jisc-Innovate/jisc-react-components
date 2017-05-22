// @flow

import React from "react"
import TopDefault from "TopDefault"
import TopFocussed from "TopFocussed"

type Props = {
  focussed: boolean,
  focussedItems: Array<FocussedItem>,
  focussedTitle: string
}

const Top = function Top ({
  focussed,
  focussedTitle,
  focussedItems
}: Props) {

    return (
      <div className="masthead__top">
        <div className="inner">

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
    )

}

export default Top
