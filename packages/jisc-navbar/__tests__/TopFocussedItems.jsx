/* eslint-disable init-declarations */

import React from "react"
import TopFocussedItem from "../src/TopFocussedItem"
import TopFocussedItems from "../src/TopFocussedItems"
import {shallow} from "enzyme"

const props = {
  items: [
    {link: "testLink1",
     name: "testName1"},
    {link: "testLink2",
     name: "testName2"}
  ]
}

const UL_LENGTH = 1
const TOP_FOCUSSED_ITEM_LENGTH = 2

describe("TopFocussedItems", () => {

    let topFocussedItems

    beforeEach(() => {

      topFocussedItems = shallow(<TopFocussedItems
                                  items={props.items}
                                 />)

    })

  it("renders DOM elements", () => {

    expect(topFocussedItems.find("ul").length).toBe(UL_LENGTH)
    expect(topFocussedItems.find(TopFocussedItem).length)
      .toBe(TOP_FOCUSSED_ITEM_LENGTH)

  })

})
