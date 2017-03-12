import React from "react"
import { mount, shallow } from "enzyme"

import FooterMenu from "../src/FooterMenu.jsx"

describe( "FooterMenu", ( ) => {
  it( "renders DOM elements", ( ) => {
    const footerMenu = mount( <FooterMenu /> )

    expect( footerMenu.find( "div" ).length ).toBe( 3 )
    expect( footerMenu.find( "h3" ).length ).toBe( 1 )
    expect( footerMenu.find( "ul" ).length ).toBe( 1 )
  })

  it( "has expected classes", ( ) => {
    const footerMenu = shallow( <FooterMenu /> )

    expect( footerMenu.find( "div" ).at( 0 ).hasClass( "col" ) ).toBe( true )
    expect( footerMenu.find( "div" ).at( 0 ).hasClass( "span-6" ) ).toBe( true )

    expect( footerMenu.find( "div" ).at( 1 ).hasClass( "linklist" ) ).toBe( true )
    expect( footerMenu.find( "div" ).at( 1 ).hasClass( "linklist--2col" ) ).toBe( true )

    expect( footerMenu.find( "div" ).at( 2 ).hasClass( "linklist__title" ) ).toBe( true )
    expect( footerMenu.find( "div" ).at( 2 ).hasClass( "v-pad-small-mobile" ) ).toBe( true )
  })

  it( "shows expected title", ( ) => {
    const footerMenu = shallow( <FooterMenu /> )

    expect( footerMenu.find( "h3" ).text( ) ).toBe( "Network & IT services" )
  })
})
