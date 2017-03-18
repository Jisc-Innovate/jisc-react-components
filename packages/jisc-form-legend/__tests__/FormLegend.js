import React from "react"
import { shallow, mount } from "enzyme"

import FormLegend from "../src/FormLegend.jsx"

const props = {
  text: "test"
}

describe( "FormLegend", ( ) => {
  it( "accepts props", ( ) => {
    const legend = mount( <FormLegend
                           text={props.text} /> )

     expect( legend.props( ).text ).toBe( "test" )
  })

  it( "renders DOM elements", ( ) => {
    const legend = shallow( <FormLegend
                             text={props.text} /> )

    expect( legend.find( "legend" ).length ).toBe( 1 )
    expect( legend.find( "span" ).length ).toBe( 1 )
  })

  it( "has class legend-text", ( ) => {
    const legend = shallow( <FormLegend
                             text={props.text} /> )

    expect( legend.find( "legend" ).hasClass( "legend-text" ) ).toBe( true )
  })

  it( "shows text", ( ) => {
    const legend = shallow( <FormLegend
                           text={props.text} /> )

    expect( legend.find( "span" ).text( ) ).toBe( props.text )
  })
})
