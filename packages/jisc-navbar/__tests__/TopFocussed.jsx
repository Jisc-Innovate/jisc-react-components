/* eslint-disable init-declarations */

import React from "react"
import TopFocussed from "../src/TopFocussed"
import TopFocussedItems from "../src/TopFocussedItems"
import {shallow} from "enzyme"

const props = {
  items: [
    {link: "testLink1",
     name: "testName1"},
    {link: "testLink2",
     name: "testName2"}
  ],
  title: "testTitle"
}

const DIV_LENGTH = 3
const H1_LENGTH = 1
const A_LENGTH = 1
const NAV_LENGTH = 1
const TOP_FOCUSSED_ITEMS_LENGTH = 1

const SECOND_DIV = 1
const THIRD_DIV = 2

describe("TopFocussed", () => {

  let topFocussed

  beforeEach(() => {

    topFocussed = shallow(<TopFocussed
                            items={props.items}
                            title={props.title}
                          />)

  })

  it("renders DOM elements", () => {

    expect(topFocussed.find("div").length).toBe(DIV_LENGTH)
    expect(topFocussed.find("h1").length).toBe(H1_LENGTH)
    expect(topFocussed.find("a").length).toBe(A_LENGTH)
    expect(topFocussed.find("nav").length).toBe(NAV_LENGTH)
    expect(topFocussed.find(TopFocussedItems).length)
      .toBe(TOP_FOCUSSED_ITEMS_LENGTH)

})

  it("has expected classes and props", () => {

    expect(topFocussed.find("div").at(SECOND_DIV)
      .hasClass("title-nav")).toBe(true)
    expect(topFocussed.find("div").at(SECOND_DIV)
      .prop("id")).toBe("nav")

    expect(topFocussed.find("div").at(THIRD_DIV)
      .hasClass("has-popup")).toBe(true)
    expect(topFocussed.find("div").at(THIRD_DIV)
      .hasClass("masthead__nav__item")).toBe(true)

    expect(topFocussed.find("h1").hasClass("masthead__title"))
      .toBe(true)
    expect(topFocussed.find("h1").hasClass("masthead__title--long"))
      .toBe(true)

    expect(topFocussed.find("a").prop("href")).toBe("/")

    expect(topFocussed.find("nav").hasClass("masthead__nav")).toBe(true)
    expect(topFocussed.find("nav")
      .hasClass("masthead__nav--primary")).toBe(true)
    expect(topFocussed.find("nav").prop("role")).toBe("navigation")

  })

  it("displays title from props", () => {

    expect(topFocussed.find("a").text()).toBe(props.title)

  })

})
