/* eslint-disable init-declarations */

import Footer from "../src/Footer/Footer"
import FooterMenu from "../src/FooterMenu"
import React from "react"
import {shallow} from "enzyme"

jest.mock("../src/FooterDescription.jsx", () => "FooterDescription")

const FooterDescription = require("../src/FooterDescription.jsx")

const props = {
  copyright: "testCopyright",
  minimal: false
}

const FOOTER_LENGTH = 1
const DIV_LENGTH = 5
const FOOTER_DESCRIPTION_LENGTH = 1
const FOOTER_MENU_LENGTH = 1

const MINIMAL_FOOTER_LENGTH = 0

const FIRST_DIV = 0
const SECOND_DIV = 1
const THIRD_DIV = 2
const FOURTH_DIV = 3
const FIFTH_DIV = 4

describe("Footer", () => {

  let footer

  beforeEach(() => {

    footer = shallow(<Footer {...props} />)

  })

  it("renders DOM elements", () => {

    expect(footer.find("footer").length).toBe(FOOTER_LENGTH)
    expect(footer.find("div").length).toBe(DIV_LENGTH)
    expect(footer.find(FooterDescription).length)
      .toBe(FOOTER_DESCRIPTION_LENGTH)
    expect(footer.find(FooterMenu).length).toBe(FOOTER_MENU_LENGTH)

  })

  it("has expected classes", () => {

    expect(footer.find("footer").prop("role")).toBe("contentinfo")
    expect(footer.find("footer").hasClass("site-footer")).toBe(true)

    expect(footer.find("div").at(FIRST_DIV)
      .hasClass("inner")).toBe(true)
    expect(footer.find("div").at(FIRST_DIV)
      .hasClass("l-pull-left")).toBe(true)
    expect(footer.find("div").at(FIRST_DIV)
      .hasClass("medium")).toBe(true)
    expect(footer.find("div").at(FIRST_DIV)
      .hasClass("l-gutter--top")).toBe(true)
    expect(footer.find("div").at(FIRST_DIV)
      .hasClass("bottom-section")).toBe(true)

    expect(footer.find("div").at(SECOND_DIV)
      .hasClass("l-centre-offset")).toBe(true)
    expect(footer.find("div").at(SECOND_DIV)
      .hasClass("row")).toBe(true)

    expect(footer.find("div").at(THIRD_DIV)
      .hasClass("inner")).toBe(true)
    expect(footer.find("div").at(THIRD_DIV)
      .hasClass("l-pull-left")).toBe(true)
    expect(footer.find("div").at(THIRD_DIV)
      .hasClass("heavy")).toBe(true)

    expect(footer.find("div").at(FOURTH_DIV)
      .hasClass("l-centre-offset")).toBe(true)
    expect(footer.find("div").at(FOURTH_DIV)
      .hasClass("row")).toBe(true)
    expect(footer.find("div").at(FOURTH_DIV)
      .hasClass("cc-wrap")).toBe(true)

    expect(footer.find("div").at(FIFTH_DIV)
      .hasClass("cc")).toBe(true)
    expect(footer.find("div").at(FIFTH_DIV)
      .hasClass("duo")).toBe(true)

  })

  it("hides description and menu when minimal", () => {

    footer.setProps({minimal: true})

    expect(footer.find(FooterDescription).length).toBe(MINIMAL_FOOTER_LENGTH)
    expect(footer.find(FooterMenu).length).toBe(MINIMAL_FOOTER_LENGTH)

  })

})
