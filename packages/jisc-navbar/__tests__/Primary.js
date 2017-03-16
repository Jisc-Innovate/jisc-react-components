import React from "react"
import { mount, shallow } from "enzyme"
import sinon from "sinon"

import Primary from "../src/Primary.jsx"

const props = {
  tabs: [
    { name: "testName1", link: "testLink1", active: true, show: true }
  ],
  renderTabs: sinon.spy( )
}

describe( "Primary", ( ) => {
  it( "accepts props", ( ) => {
    const primary = mount( <Primary
                             tabs={props.tabs}
                             renderTabs={props.renderTabs} /> )

    expect( primary.props( ).tabs ).toBe( props.tabs )
    expect( primary.props( ).renderTabs ).toBe( props.renderTabs )
  })

  it( "renders DOM elements", ( ) => {
    const primary = shallow( <Primary
                               tabs={props.tabs}
                               renderTabs={props.renderTabs} /> )

    expect( primary.find( "nav" ).length ).toBe( 1 )
    expect( primary.find( "ul" ).length ).toBe( 1 )
  })

  it( "has expected classes and props", ( ) => {
    const primary = shallow( <Primary
                               tabs={props.tabs}
                               renderTabs={props.renderTabs} /> )

    expect( primary.find( "nav" ).hasClass( "masthead__nav" ) )
      .toBe( true )
    expect( primary.find( "nav" ).hasClass( "header__nav--primary" ) )
      .toBe( true )
    expect( primary.find( "nav" ).prop( "role" ) ).toBe( "navigation" )
  })

  it( "calls renderTabs on render", ( ) => {
    shallow( <Primary
               tabs={props.tabs}
               renderTabs={props.renderTabs} /> )

    expect( props.renderTabs.callCount ).toBe( 4 )
  })
})
