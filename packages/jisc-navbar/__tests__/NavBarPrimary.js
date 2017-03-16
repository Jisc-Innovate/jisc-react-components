import React from "react"
import { mount, shallow, render } from "enzyme"
import sinon from "sinon"

import NavBarPrimary from "../src/NavBarPrimary.jsx"

const props = {
  tabs: [
    { name: "testName1", link: "testLink1", active: true, show: true }
  ],
  renderTabs: sinon.spy( )
}

describe( "NavBarPrimary", ( ) => {
  it( "accepts props", ( ) => {
    const navBarPrimary = mount( <NavBarPrimary
                                   tabs={props.tabs}
                                   renderTabs={props.renderTabs} /> )

    expect( navBarPrimary.props( ).tabs ).toBe( props.tabs )
    expect( navBarPrimary.props( ).renderTabs ).toBe( props.renderTabs )
  })

  it( "renders DOM elements", ( ) => {
    const navBarPrimary = shallow( <NavBarPrimary
                                     tabs={props.tabs}
                                     renderTabs={props.renderTabs} /> )

    expect( navBarPrimary.find( "nav" ).length ).toBe( 1 )
    expect( navBarPrimary.find( "ul" ).length ).toBe( 1 )
  })

  it( "has expected classes and props", ( ) => {
    const navBarPrimary = shallow( <NavBarPrimary
                                     tabs={props.tabs}
                                     renderTabs={props.renderTabs} /> )

    expect( navBarPrimary.find( "nav" ).hasClass( "masthead__nav" ) )
      .toBe( true )
    expect( navBarPrimary.find( "nav" ).hasClass( "header__nav--primary" ) )
      .toBe( true )
    expect( navBarPrimary.find( "nav" ).prop( "role" ) ).toBe( "navigation" )
  })

  it( "calls renderTabs on render", ( ) => {
    const navBarPrimary = shallow( <NavBarPrimary
                                     tabs={props.tabs}
                                     renderTabs={props.renderTabs} /> )

    expect( props.renderTabs.callCount ).toBe( 4 )
  })
})
