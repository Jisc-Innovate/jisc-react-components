import React from "react"
import { mount, shallow } from "enzyme"

import TopFocussed from "../src/TopFocussed"
import TopFocussedItems from "../src/TopFocussedItems"

const props = {
  title: "testTitle",
  items: [
    { name: "testName1", link: "testLink1" },
    { name: "testName2", link: "testLink2" }
  ]
}

describe( "TopFocussed", ( ) => {
  it( "accepts props", ( ) => {
    const topFocussed = mount( <TopFocussed
                                  title={props.title}
                                  items={props.items} /> )

    expect( topFocussed.props( ).title ).toBe( props.title )
    expect( topFocussed.props( ).items ).toBe( props.items )
  })

  it( "renders DOM elements", ( ) => {
    const topFocussed = shallow( <TopFocussed
                                    title={props.title}
                                    items={props.items} /> )

    expect( topFocussed.find( "div" ).length ).toBe( 3 )
    expect( topFocussed.find( "h1" ).length ).toBe( 1 )
    expect( topFocussed.find( "a" ).length ).toBe( 1 )
    expect( topFocussed.find( "nav" ).length ).toBe( 1 )
    expect( topFocussed.find( TopFocussedItems ).length ).toBe( 1 )
  })

  it( "has expected classes and props", ( ) => {
    const topFocussed = shallow( <TopFocussed
                                    title={props.title}
                                    items={props.items} /> )

    expect( topFocussed.find( "div" ).at( 1 ).hasClass( "title-nav" ) )
      .toBe( true )
    expect( topFocussed.find( "div" ).at( 1 ).prop( "id" ) ).toBe( "nav" )

    expect( topFocussed.find( "div" ).at( 2 ).hasClass( "has-popup" ) )
      .toBe( true )
    expect( topFocussed.find( "div" ).at( 2 )
      .hasClass( "masthead__nav__item" ) ).toBe( true )

    expect( topFocussed.find( "h1" ).hasClass( "masthead__title" ) )
      .toBe( true )
    expect( topFocussed.find( "h1" ).hasClass( "masthead__title--long" ) )
      .toBe( true )

    expect( topFocussed.find( "a" ).prop( "href" ) ).toBe( "/" )

    expect( topFocussed.find( "nav" ).hasClass( "masthead__nav" ) ).toBe( true )
    expect( topFocussed.find( "nav" )
      .hasClass( "masthead__nav--primary" ) ).toBe( true )
    expect( topFocussed.find( "nav" ).prop( "role" ) ).toBe( "navigation" )
  })

  it( "displays title from props", ( ) => {
    const topFocussed = shallow( <TopFocussed
                                  title={props.title}
                                  items={props.items} /> )

    expect( topFocussed.find( "a" ).text( ) ).toBe( props.title )
  })
})
