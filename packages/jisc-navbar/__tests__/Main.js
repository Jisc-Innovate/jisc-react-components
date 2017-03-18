import React from "react"
import { mount, shallow } from "enzyme"
import sinon from "sinon"

import Main from "../src/Main.jsx"
import Primary from "../src/Primary.jsx"
import Secondary from "../src/Secondary.jsx"

const props = {
  title: "testTitle",
  renderTabs: sinon.spy( ),
  primary: [
    { name: "testName1", link: "testLink1", active: true, show: true }
  ],
  secondary: [
    { name: "testName2", link: "testLink2", active: true, show: true }
  ]
}

describe( "Main", ( ) => {
  it( "accepts props", ( ) => {
    const main = mount( <Main
                                title={props.title}
                                renderTabs={props.renderTabs}
                                primary={props.primary}
                                secondary={props.secondary} /> )

    expect( main.props( ).title ).toBe( props.title )
    expect( main.props( ).renderTabs ).toBe( props.renderTabs )
    expect( main.props( ).primary ).toBe( props.primary )
    expect( main.props( ).secondary ).toBe( props.secondary )
  })

  it( "renders DOM elements", ( ) => {
    const main = shallow( <Main
                                  title={props.title}
                                  renderTabs={props.renderTabs}
                                  primary={props.primary}
                                  secondary={props.secondary} /> )

    expect( main.find( "div" ).length ).toBe( 3 )
    expect( main.find( "p" ).length ).toBe( 1 )
    expect( main.find( Primary ).length ).toBe( 1 )
    expect( main.find( Secondary ).length ).toBe( 1 )
  })

  it( "has expected classes", ( ) => {
    const main = shallow( <Main
                                  title={props.title}
                                  renderTabs={props.renderTabs}
                                  primary={props.primary}
                                  secondary={props.secondary} /> )

    expect( main.find( "div" ).at( 0 ).hasClass( "masthead__main" ) )
      .toBe( true )
    expect( main.find( "div" ).at( 0 )
      .hasClass( "masthead__main--with-content" ) ).toBe( true )
    expect( main.find( "div" ).at( 1 ).hasClass( "inner" ) ).toBe( true )
    expect( main.find( "div" ).at( 2 ).hasClass( "nav-wrapper" ) )
      .toBe( true )
    expect( main.find( "p" ).hasClass( "masthead__title" ) )
      .toBe( true )
    expect( main.find( "p" ).hasClass( "masthead__title--short" ) )
      .toBe( true )
  })

  it( "displays title from props", ( ) => {
    const main = mount( <Main
                                title={props.title}
                                renderTabs={props.renderTabs}
                                primary={props.primary}
                                secondary={props.secondary} /> )

    expect( main.find( "p" ).text( ) ).toBe( props.title )
  })

  it( "passes expected props to components", ( ) => {
    const main = shallow( <Main
                                  title={props.title}
                                  renderTabs={props.renderTabs}
                                  primary={props.primary}
                                  secondary={props.secondary} /> )

    expect( main.find( Primary ).prop( "tabs" ) )
      .toBe( props.primary )
    expect( main.find( Primary ).prop( "renderTabs" ) )
      .toBe( props.renderTabs )
    expect( main.find( Secondary ).prop( "tabs" ) )
      .toBe( props.secondary )
    expect( main.find( Secondary ).prop( "renderTabs" ) )
      .toBe( props.renderTabs )
  })
})
