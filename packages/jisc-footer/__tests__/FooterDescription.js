import React from "react"
import { mount, shallow } from "enzyme"

import FooterDescription from "../src/FooterDescription.jsx"

describe( "FooterDescription", ( ) => {

  it( "renders DOM elements", ( ) => {
    const footerDescription = shallow( <FooterDescription /> )

    expect( footerDescription.find( "div" ).length ).toBe( 5 )
    expect( footerDescription.find( "img" ).length ).toBe( 1 )
    expect( footerDescription.find( "p" ).length ).toBe( 2 )
    expect( footerDescription.find( "a" ).length ).toBe( 1 )
  })

  it( "shows JISC logo", ( ) => {
    const footerDescription = mount( <FooterDescription /> )

    expect( footerDescription.find( "img" ).prop( "src" ) ).toBe( "/images/jisc-logo.png" )
    expect( footerDescription.find( "img" ).prop( "alt" ) ).toBe( "Jisc logo" )
    expect( footerDescription.find( "img" ).prop( "width" ) ).toBe( "158" )
    expect( footerDescription.find( "img" ).prop( "height" ) ).toBe( "93" )
  })

  it( "links to JISC home page", ( ) => {
    const footerDescription = mount( <FooterDescription /> )

    expect( footerDescription.find( "a" ).prop( "href" ) ).toBe( "https://www.jisc.ac.uk/" )
    expect( footerDescription.find( "a" ).prop( "target" ) ).toBe( "_blank" )
  })
})
