import React from "react"
import { mount, render } from "enzyme"
import TeaserArrow from "../src/TeaserArrow.jsx"

const props = {
  url: "testUrl",
  title: "testTitle",
  description: "testDescription",
}

describe( "TeaserArrow", ( ) => {
  it( "accepts props", ( ) => {
    const teaserArrow = mount( <TeaserArrow
                                  url={props.url}
                                  title={props.title}
                                  description={props.description} />)

    expect( teaserArrow.props( ).url ).toBe( props.url )
    expect( teaserArrow.props( ).title ).toBe( props.title )
    expect( teaserArrow.props( ).description ).toBe( props.description )
  })

  it( "renders DOM elements", ( ) => {
    const teaserArrow = render( <TeaserArrow
                                  url={props.url}
                                  title={props.title}
                                  description={props.description} /> )

    expect( teaserArrow.find( "article" ).length ).toBe( 1 )
    expect( teaserArrow.find( "div" ).length ).toBe( 1 )
    expect( teaserArrow.find( "h2" ).length ).toBe( 1 )
    expect( teaserArrow.find( "a" ).length ).toBe( 2 )
    expect( teaserArrow.find( "p" ).length ).toBe( 1 )
    expect( teaserArrow.find( "span" ).length ).toBe( 1 )
  })

  it( "has expected classes", ( ) => {
    const teaserArrow = render( <TeaserArrow
                                  url={props.url}
                                  title={props.title}
                                  description={props.description} /> )

    expect( teaserArrow.find( "article" ).hasClass( "teaser" ) ).toBe( true )
    expect( teaserArrow.find( "div" ).hasClass( "teaser__copy" ) ).toBe( true )
    expect( teaserArrow.find( "div" ).hasClass( "has-arrow" ) ).toBe( true )
    expect( teaserArrow.find( "a" ).hasClass( "teaser__arrow" ) ).toBe( true )
    expect( teaserArrow.find( "span" ).hasClass( "visuallyhidden" ) )
      .toBe( true )
  })

  it( "shows text from props", ( ) => {
    const teaserArrow = mount( <TeaserArrow
                                  url={props.url}
                                  title={props.title}
                                  description={props.description} /> )

    expect( teaserArrow.find( "a" ).at( 0 ).text( ) ).toBe( props.title )
    expect( teaserArrow.find( "p" ).text( ) ).toBe( props.description )
  })

  it( "links to url from props", ( ) => {
    const teaserArrow = mount( <TeaserArrow
                                  url={props.url}
                                  title={props.title}
                                  description={props.description} /> )

    expect( teaserArrow.find( "a" ).at( 0 ).prop( "href" ) ).toBe( props.url )
    expect( teaserArrow.find( "a" ).at( 1 ).prop( "href" ) ).toBe( props.url )
  })
})
