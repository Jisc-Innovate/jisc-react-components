import React from "react"
import { mount, shallow, render } from "enzyme"
import sinon from "sinon"

import NavBarMain from "../src/NavBarMain.jsx"
import NavBarPrimary from "../src/NavBarPrimary.jsx"
import NavBarSecondary from "../src/NavBarSecondary.jsx"

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

describe( "NavBarMain", ( ) => {
  it( "accepts props", ( ) => {
    const navBarMain = mount( <NavBarMain
                                title={props.title}
                                renderTabs={props.renderTabs}
                                primary={props.primary}
                                secondary={props.secondary} /> )

    expect( navBarMain.props( ).title ).toBe( props.title )
    expect( navBarMain.props( ).renderTabs ).toBe( props.renderTabs )
    expect( navBarMain.props( ).primary ).toBe( props.primary )
    expect( navBarMain.props( ).secondary ).toBe( props.secondary )
  })

  it( "renders DOM elements", ( ) => {
    const navBarMain = shallow( <NavBarMain
                                  title={props.title}
                                  renderTabs={props.renderTabs}
                                  primary={props.primary}
                                  secondary={props.secondary} /> )

    expect( navBarMain.find( "div" ).length ).toBe( 3 )
    expect( navBarMain.find( "p" ).length ).toBe( 1 )
    expect( navBarMain.find( NavBarPrimary ).length ).toBe( 1 )
    expect( navBarMain.find( NavBarSecondary ).length ).toBe( 1 )
  })

  it( "has expected classes", ( ) => {
    const navBarMain = shallow( <NavBarMain
                                  title={props.title}
                                  renderTabs={props.renderTabs}
                                  primary={props.primary}
                                  secondary={props.secondary} /> )

    expect( navBarMain.find( "div" ).at( 0 ).hasClass( "masthead__main" ) )
      .toBe( true )
    expect( navBarMain.find( "div" ).at( 0 )
      .hasClass( "masthead__main--with-content" ) ).toBe( true )
    expect( navBarMain.find( "div" ).at( 1 ).hasClass( "inner" ) ).toBe( true )
    expect( navBarMain.find( "div" ).at( 2 ).hasClass( "nav-wrapper" ) )
      .toBe( true )
    expect( navBarMain.find( "p" ).hasClass( "masthead__title" ) )
      .toBe( true )
    expect( navBarMain.find( "p" ).hasClass( "masthead__title--short" ) )
      .toBe( true )
  })

  it( "displays title from props", ( ) => {
    const navBarMain = mount( <NavBarMain
                                title={props.title}
                                renderTabs={props.renderTabs}
                                primary={props.primary}
                                secondary={props.secondary} /> )

    expect( navBarMain.find( "p" ).text( ) ).toBe( props.title )
  })

  it( "passes expected props to components", ( ) => {
    const navBarMain = shallow( <NavBarMain
                                  title={props.title}
                                  renderTabs={props.renderTabs}
                                  primary={props.primary}
                                  secondary={props.secondary} /> )

    expect( navBarMain.find( NavBarPrimary ).prop( "tabs" ) )
      .toBe( props.primary )
    expect( navBarMain.find( NavBarPrimary ).prop( "renderTabs" ) )
      .toBe( props.renderTabs )
    expect( navBarMain.find( NavBarSecondary ).prop( "tabs" ) )
      .toBe( props.secondary )
    expect( navBarMain.find( NavBarSecondary ).prop( "renderTabs" ) )
      .toBe( props.renderTabs )
  })
})
