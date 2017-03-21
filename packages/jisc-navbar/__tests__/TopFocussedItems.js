import React from "react"  // eslint-disable-line no-unused-vars
import { mount, shallow } from "enzyme"

import TopFocussedItems from "../src/TopFocussedItems"
import TopFocussedItem from "../src/TopFocussedItem"

const props = {
  items: [
    { name: "testName1", link: "testLink1" },
    { name: "testName2", link: "testLink2" }
  ]
}

describe( "TopFocussedItems", ( ) => {
  it( "accepts props", ( ) => {
    const topFocussedItems = mount( <TopFocussedItems
                                      items={props.items} /> )

    expect( topFocussedItems.props( ).items ).toBe( props.items )
  })

  it( "renders DOM elements", ( ) => {
    const topFocussedItems = shallow( <TopFocussedItems
                                      items={props.items} /> )

    expect( topFocussedItems.find( "ul" ).length ).toBe( 1 )
    expect( topFocussedItems.find( TopFocussedItem ).length ).toBe( 2 )
  })
})
