/* eslint-disable init-declarations */

import Main from "../src/Main/Main"
import Primary from "../src/Main/Primary"
import React from "react"
import Secondary from "../src/Main/Secondary"
import {shallow} from "enzyme"
import sinon from "sinon"

const props = {
  primary: [
    {active: true,
     link: "testLink1",
     name: "testName1",
     show: true}
  ],
  renderTabs: sinon.spy(),
  secondary: [
    {active: true,
     link: "testLink2",
     name: "testName2",
     show: true}
  ],
  title: "testTitle"
}

const DIV_LENGTH = 3
const P_LENGTH = 1
const PRIMARY_LENGTH = 1
const SECONDARY_LENGTH = 1

const FIRST_DIV = 0
const SECOND_DIV = 1
const THIRD_DIV = 2

describe("Main", () => {

  let main

  beforeEach(() => {

    main = shallow(<Main
                    primary={props.primary}
                    renderTabs={props.renderTabs}
                    secondary={props.secondary}
                    title={props.title}
                   />)

  })

  it("renders DOM elements", () => {

    expect(main.find("div").length).toBe(DIV_LENGTH)
    expect(main.find("p").length).toBe(P_LENGTH)
    expect(main.find(Primary).length).toBe(PRIMARY_LENGTH)
    expect(main.find(Secondary).length).toBe(SECONDARY_LENGTH)

  })

  it("has expected classes", () => {

    expect(main.find("div").at(FIRST_DIV)
      .hasClass("masthead__main")).toBe(true)
    expect(main.find("div").at(FIRST_DIV)
      .hasClass("masthead__main--with-content")).toBe(true)
    expect(main.find("div").at(SECOND_DIV)
      .hasClass("inner")).toBe(true)
    expect(main.find("div").at(THIRD_DIV)
      .hasClass("nav-wrapper")).toBe(true)
    expect(main.find("p").hasClass("masthead__title"))
      .toBe(true)
    expect(main.find("p").hasClass("masthead__title--short"))
      .toBe(true)

  })

  it("displays title from props", () => {

    expect(main.find("p").text()).toBe(props.title)

  })

  it("passes expected props to components", () => {

    expect(main.find(Primary).prop("tabs"))
      .toBe(props.primary)
    expect(main.find(Primary).prop("renderTabs"))
      .toBe(props.renderTabs)
    expect(main.find(Secondary).prop("tabs"))
      .toBe(props.secondary)
    expect(main.find(Secondary).prop("renderTabs"))
      .toBe(props.renderTabs)

  })

})
