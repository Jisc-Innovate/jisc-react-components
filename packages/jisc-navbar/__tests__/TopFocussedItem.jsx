/* eslint-disable init-declarations */

import React from "react"
import TopFocussedItem from "../src/TopFocussedItem"
import {shallow} from "enzyme"

const props = {
    link: "testLink",
    name: "testName"
}

const LI_LENGTH = 1
const A_LENGTH = 1

describe("TopFocussedItem", () => {

    let topFocussedItem

    beforeEach(() => {

      topFocussedItem = shallow(<TopFocussedItem
                                    link={props.link}
                                    name={props.name}
                                />)

    })

  it("renders DOM elements", () => {

    expect(topFocussedItem.find("li").length).toBe(LI_LENGTH)
    expect(topFocussedItem.find("a").length).toBe(A_LENGTH)

  })

  it("has expected classes and props", () => {

    expect(topFocussedItem.find("a").prop("href")).toBe(props.link)
    expect(topFocussedItem.find("li")
      .hasClass("masthead__nav__item")).toBe(true)

  })

  it("displays name from props", () => {

    expect(topFocussedItem.find("a").text()).toBe(props.name)

  })

})
