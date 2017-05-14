/* eslint-disable init-declarations */

import Primary from "../src/Main/Primary/Primary"
import React from "react"
import {shallow} from "enzyme"

const props = {
  tabs: [
    React.createElement("div")
  ]
}

const NAV_LENGTH = 1
const UL_LENGTH = 1

describe("Primary", () => {

  let primary

  beforeEach(() => {

    primary = shallow(<Primary
                        tabs={props.tabs}
                      />)

  })

  it("renders DOM elements", () => {

    expect(primary.find("nav").length).toBe(NAV_LENGTH)
    expect(primary.find("ul").length).toBe(UL_LENGTH)

  })

  it("has expected classes and props", () => {

    expect(primary.find("nav").hasClass("masthead__nav"))
      .toBe(true)
    expect(primary.find("nav").hasClass("header__nav--primary"))
      .toBe(true)
    expect(primary.find("nav").prop("role")).toBe("navigation")

  })

})
