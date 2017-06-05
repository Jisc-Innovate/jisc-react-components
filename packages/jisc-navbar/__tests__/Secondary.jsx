/* eslint-disable init-declarations */

import Secondary from "../src/Main/Secondary/Secondary"
import React from "react"
import {shallow} from "enzyme"

const props = {
  tabs: [
    React.createElement("div")
  ]
}

const NAV_LENGTH = 1
const UL_LENGTH = 1

describe("Secondary", () => {

  let secondary

  beforeEach(() => {

    secondary = shallow(<Secondary
                          tabs={props.tabs}
                        />)

  })

  it("renders DOM elements", () => {

    expect(secondary.find("nav").length).toBe(NAV_LENGTH)
    expect(secondary.find("ul").length).toBe(UL_LENGTH)

  })

  it("has expected classes and props", () => {

    expect(secondary.find("nav").hasClass("masthead__nav"))
      .toBe(true)
    expect(secondary.find("nav").hasClass("masthead__nav--secondary"))
      .toBe(true)
    expect(secondary.find("nav").prop("role")).toBe("navigation")

  })

})
