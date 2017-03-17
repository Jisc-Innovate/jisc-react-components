import React from "react"
import { mount, shallow } from "enzyme"

import TopFocussedItem from "../src/TopFocussedItem"

const props = {
    link: "testLink",
    name: "testName"
}

describe( "TopFocussedItem", ( ) => {
  it( "accepts props", ( ) => {
    const topFocussedItem = mount( <TopFocussedItem
                                      link={props.link}
                                      name={props.name} /> )

    expect( topFocussedItem.props( ).link ).toBe( props.link )
    expect( topFocussedItem.props( ).name ).toBe( props.name )
  })

  it( "renders DOM elements", ( ) => {
    const topFocussedItem = shallow( <TopFocussedItem
                                        link={props.link}
                                        name={props.name} /> )

    expect( topFocussedItem.find( "li" ).length ).toBe( 1 )
    expect( topFocussedItem.find( "a" ).length ).toBe( 1 )
  })

  it( "has expected classes and props", ( ) => {
    const topFocussedItem = shallow( <TopFocussedItem
                                        link={props.link}
                                        name={props.name} /> )

    expect( topFocussedItem.find( "a" ).prop( "href" ) ).toBe( props.link )
    expect( topFocussedItem.find( "li" )
      .hasClass( "masthead__nav__item" ) ).toBe( true )
  })

  it( "displays name from props", ( ) => {
    const topFocussedItem = shallow( <TopFocussedItem
                                        link={props.link}
                                        name={props.name} /> )

    expect( topFocussedItem.find( "a" ).text( ) ).toBe( props.name )
  })
})
