/* eslint-disable init-declarations */

import FooterMenuItem from "FooterMenuItem.jsx"
import React from "react"
import {shallow} from "enzyme"

const props = {
  itemOne: ["testItem1"],
  itemTwo: ["testItem2", "testItem3"]
}

const LI_LENGTH = 1
const A_LENGTH = 1
const SPAN_LENGTH = 1
const MULTIPLE_SPAN_LENGTH = 2

const FIRST_SPAN = 0
const SECOND_SPAN = 1

const FIRST_ITEM = 0
const SECOND_ITEM = 1

describe("FooterMenuItem", () => {

  let footerMenuItem

  beforeEach(() => {

    footerMenuItem = shallow(<FooterMenuItem item={props.itemOne} />)

  })

  it("renders DOM elements", () => {

    expect(footerMenuItem.find("li").length).toBe(LI_LENGTH)
    expect(footerMenuItem.find("a").length).toBe(A_LENGTH)
    expect(footerMenuItem.find("span").length).toBe(SPAN_LENGTH)

    footerMenuItem.setProps({item: props.itemTwo})

    expect(footerMenuItem.find("span").length).toBe(MULTIPLE_SPAN_LENGTH)

  })

  it("has expected classes", () => {

    expect(footerMenuItem.find("li").hasClass("linklist__item")).toBe(true)

    footerMenuItem.setProps({item: props.itemTwo})

    expect(footerMenuItem.find("span").at(SECOND_SPAN)
      .hasClass("linklist__item__break")).toBe(true)

  })

  it("renders expected text", () => {

    expect(footerMenuItem.find("span").text()).toBe(props.itemOne[FIRST_ITEM])

    footerMenuItem.setProps({item: props.itemTwo})

    expect(footerMenuItem.find("span").at(FIRST_SPAN)
      .text()).toBe(props.itemTwo[FIRST_ITEM])
    expect(footerMenuItem.find("span").at(SECOND_SPAN)
      .text()).toBe(props.itemTwo[SECOND_ITEM])

  })

})
