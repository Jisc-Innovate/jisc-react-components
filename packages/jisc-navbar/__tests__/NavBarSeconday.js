import React from "react"
import { mount, shallow, render } from "enzyme"
import sinon from "sinon"

import NavBarSecondary from "../src/NavBarSecondary.jsx"

const props = {
  tabs: [
    { name: "testName1", link: "testLink1", active: true, show: true }
  ],
  renderTabs: sinon.spy( )
}

describe( "NavBarSecondary", ( ) => {
  it( "accepts props", ( ) => {
    const navBarSecondary = mount( <NavBarSecondary
                                   tabs={props.tabs}
                                   renderTabs={props.renderTabs} /> )

    expect( navBarSecondary.props( ).tabs ).toBe( props.tabs )
    expect( navBarSecondary.props( ).renderTabs ).toBe( props.renderTabs )
  })

  it( "renders DOM elements", ( ) => {
    const navBarSecondary = shallow( <NavBarSecondary
                                     tabs={props.tabs}
                                     renderTabs={props.renderTabs} /> )

    expect( navBarSecondary.find( "nav" ).length ).toBe( 1 )
    expect( navBarSecondary.find( "ul" ).length ).toBe( 1 )
  })

  it( "has expected classes and props", ( ) => {
    const navBarSecondary = shallow( <NavBarSecondary
                                     tabs={props.tabs}
                                     renderTabs={props.renderTabs} /> )

    expect( navBarSecondary.find( "nav" ).hasClass( "masthead__nav" ) )
      .toBe( true )
    expect( navBarSecondary.find( "nav" ).hasClass( "masthead__nav--secondary" ) )
      .toBe( true )
    expect( navBarSecondary.find( "nav" ).prop( "role" ) ).toBe( "navigation" )
  })

  it( "calls renderTabs on render", ( ) => {
    const navBarSecondary = shallow( <NavBarSecondary
                                     tabs={props.tabs}
                                     renderTabs={props.renderTabs} /> )

    expect( props.renderTabs.callCount ).toBe( 4 )
  })
})
