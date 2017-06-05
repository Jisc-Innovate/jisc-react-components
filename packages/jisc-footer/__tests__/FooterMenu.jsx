/* eslint-disable init-declarations */

import FooterMenu from "../src/FooterMenu.jsx"
import React from "react"
import {shallow} from "enzyme"

describe("FooterMenu", () => {

  let footerMenu

  beforeEach(() => {

    footerMenu = shallow(<FooterMenu />)

  })

  it("renders DOM elements", () => {

    expect(footerMenu.find("div").length).toBe(3)
    expect(footerMenu.find("h3").length).toBe(1)
    expect(footerMenu.find("ul").length).toBe(1)

  })

  it("has expected classes", () => {

    expect(footerMenu.find("div").at(0).hasClass("col")).toBe(true)
    expect(footerMenu.find("div").at(0).hasClass("span-6")).toBe(true)

    expect(footerMenu.find("div").at(1).hasClass("linklist")).toBe(true)
    expect(footerMenu.find("div").at(1).hasClass("linklist--2col")).toBe(true)

    expect(footerMenu.find("div").at(2).hasClass("linklist__title")).toBe(true)
    expect(footerMenu.find("div").at(2).hasClass("v-pad-small-mobile")).toBe(true)

  })

  it("shows expected title", () => {

    expect(footerMenu.find("h3").text()).toBe("Network & IT services")

  })

})
