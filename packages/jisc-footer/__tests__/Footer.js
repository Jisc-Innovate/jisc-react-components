import React from "react"
import { mount, shallow } from "enzyme"

import Footer from "../src/Footer.jsx"
import FooterDescription from "../src/FooterDescription.jsx"
import FooterMenu from "../src/FooterMenu.jsx"

const props = {
  minimal: false,
  copyright: "testCopyright"
}

describe( "Footer", ( ) => {
  it( "accepts props", ( ) => {
    const footer = mount( <Footer
                            minimal={props.minimal}
                            copyright={props.copyright} /> )

    expect( footer.props( ).minimal ).toBe( props.minimal )
    expect( footer.props( ).copyright ).toBe( props.copyright )
  })

  it( "renders DOM elements", ( ) => {
    const footer = shallow( <Footer /> )

    expect( footer.find( "footer" ).length ).toBe( 1 )
    expect( footer.find( "div" ).length ).toBe( 5 )
    expect( footer.find( FooterDescription ).length ).toBe( 1 )
    expect( footer.find( FooterMenu ).length ).toBe( 1 )
  })

  it( "has expected classes", ( ) => {
    const footer = shallow( <Footer /> )

    expect( footer.find( "footer" ).prop( "role" ) ).toBe( "contentinfo" )
    expect( footer.find( "footer" ).hasClass( "site-footer" ) ).toBe( true )

    expect( footer.find( "div" ).at( 0 ).hasClass( "inner" ) ).toBe( true )
    expect( footer.find( "div" ).at( 0 ).hasClass( "l-pull-left" ) ).toBe( true )
    expect( footer.find( "div" ).at( 0 ).hasClass( "medium" ) ).toBe( true )
    expect( footer.find( "div" ).at( 0 ).hasClass( "l-gutter--top" ) ).toBe( true )
    expect( footer.find( "div" ).at( 0 ).hasClass( "bottom-section" ) ).toBe( true )

    expect( footer.find( "div" ).at( 1 ).hasClass( "l-centre-offset" ) ).toBe( true )
    expect( footer.find( "div" ).at( 1 ).hasClass( "row" ) ).toBe( true )

    expect( footer.find( "div" ).at( 2 ).hasClass( "inner" ) ).toBe( true )
    expect( footer.find( "div" ).at( 2 ).hasClass( "l-pull-left" ) ).toBe( true )
    expect( footer.find( "div" ).at( 2 ).hasClass( "heavy" ) ).toBe( true )

    expect( footer.find( "div" ).at( 3 ).hasClass( "l-centre-offset" ) ).toBe( true )
    expect( footer.find( "div" ).at( 3 ).hasClass( "row" ) ).toBe( true )
    expect( footer.find( "div" ).at( 3 ).hasClass( "cc-wrap" ) ).toBe( true )

    expect( footer.find( "div" ).at( 4 ).hasClass( "cc" ) ).toBe( true )
    expect( footer.find( "div" ).at( 4 ).hasClass( "duo" ) ).toBe( true )
  })

  it( "shows copyright from props", ( ) => {
    const footer = mount( <Footer
                            copyright={props.copyright} /> )

    expect( footer.find( { className: "cc duo" } ).text( ) ).toBe( props.copyright )
  })

  it( "hides description and menu when minimal", ( ) => {
    const footer = shallow( <Footer
                              minimal /> )

    expect( footer.find( FooterDescription ).length ).toBe( 0 )
    expect( footer.find( FooterMenu ).length ).toBe( 0 )
  })

  it( "shows JISC logo", ( ) => {
    const footer = mount( <Footer /> )

    expect( footer.find( "img" ).prop( "src" ) ).toBe( "/images/jisc-logo.png" )
    expect( footer.find( "img" ).prop( "alt" ) ).toBe( "Jisc logo" )
  })
})
