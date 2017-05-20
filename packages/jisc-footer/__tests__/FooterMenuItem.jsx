/* eslint-disable init-declarations */

import FooterMenuItem from "../src/FooterMenuItem.jsx"
import React from "react"
import {shallow} from "enzyme"

const props = {
  itemOne: "testItem1",
  itemTwo: ["testItem2", "testItem3"]
}

describe("FooterMenuItem", () => {

  let footerMenuItem

  beforeEach(() => {

    footerMenuItem = shallow(<FooterMenuItem item={props.itemOne} />)

  })

  it("renders DOM elements", () => {

    expect(footerMenuItem.find("li").length).toBe(1)
    expect(footerMenuItem.find("a").length).toBe(1)
    expect(footerMenuItem.find("span").length).toBe(1)

    footerMenuItem = shallow(<FooterMenuItem
                                    item={props.itemTwo}
                             />)

    expect(footerMenuItem.find("span").length).toBe(2)

  })

  it("has expected classes", () => {

    expect(footerMenuItem.find("li").hasClass("linklist__item")).toBe(true)

    footerMenuItem = shallow(<FooterMenuItem
                                item={props.itemTwo}
                             />)

    expect(footerMenuItem.find("span").at(1).hasClass("linklist__item__break")).toBe(true)

  })

  it("renders expected text", () => {

    expect(footerMenuItem.find("span").text()).toBe(props.itemOne)

    footerMenuItem = shallow(<FooterMenuItem
                                item={props.itemTwo}
                             />)

    expect(footerMenuItem.find("span").at(0).text()).toBe(props.itemTwo[0])
    expect(footerMenuItem.find("span").at(1).text()).toBe(props.itemTwo[1])

  })

})
