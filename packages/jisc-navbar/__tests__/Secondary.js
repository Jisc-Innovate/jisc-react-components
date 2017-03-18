import React from "react"
import { mount, shallow } from "enzyme"
import sinon from "sinon"

import Secondary from "../src/Secondary.jsx"

const props = {
  tabs: [
    { name: "testName1", link: "testLink1", active: true, show: true }
  ],
  renderTabs: sinon.spy( )
}

describe( "Secondary", ( ) => {
  it( "accepts props", ( ) => {
    const secondary = mount( <Secondary
                               tabs={props.tabs}
                               renderTabs={props.renderTabs} /> )

    expect( secondary.props( ).tabs ).toBe( props.tabs )
    expect( secondary.props( ).renderTabs ).toBe( props.renderTabs )
  })

  it( "renders DOM elements", ( ) => {
    const secondary = shallow( <Secondary
                                 tabs={props.tabs}
                                 renderTabs={props.renderTabs} /> )

    expect( secondary.find( "nav" ).length ).toBe( 1 )
    expect( secondary.find( "ul" ).length ).toBe( 1 )
  })

  it( "has expected classes and props", ( ) => {
    const secondary = shallow( <Secondary
                                 tabs={props.tabs}
                                 renderTabs={props.renderTabs} /> )

    expect( secondary.find( "nav" ).hasClass( "masthead__nav" ) )
      .toBe( true )
    expect( secondary.find( "nav" ).hasClass( "masthead__nav--secondary" ) )
      .toBe( true )
    expect( secondary.find( "nav" ).prop( "role" ) ).toBe( "navigation" )
  })

  it( "calls renderTabs on render", ( ) => {
    shallow( <Secondary
               tabs={props.tabs}
               renderTabs={props.renderTabs} /> )

    expect( props.renderTabs.callCount ).toBe( 4 )
  })
})
