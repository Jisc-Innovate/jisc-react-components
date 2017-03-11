import React from "react"
import { mount, render } from "enzyme"
import sinon from "sinon"

jest.dontMock( "../src/ButtonPrimary.jsx" )

const ButtonPrimary = require( "../src/ButtonPrimary.jsx" ).default

const props = {
  text: "testText",
  onClick: sinon.spy( ),
  type: "testType",
  disabled: false
}

describe( "ButtonPrimary", ( ) => {
  it( "accepts props", ( ) => {
    const buttonPrimary = mount( <ButtonPrimary
                                  text={props.text}
                                  onClick={props.onClick}
                                  type={props.type}
                                  disabled={props.disabled} /> )

    expect( buttonPrimary.props( ).text ).toBe( props.text )
    expect( buttonPrimary.props( ).onClick ).toBe( props.onClick )
    expect( buttonPrimary.props( ).type ).toBe( props.type )
    expect( buttonPrimary.props( ).disabled ).toBe( props.disabled )
  })

  it( "renders DOM elements", ( ) => {
    const buttonPrimary = render( <ButtonPrimary /> )

    expect( buttonPrimary.find( "button" ).length ).toBe( 1 )
  })

  it( "has expected classes", ( ) => {
    const buttonPrimary = render( <ButtonPrimary /> )

    expect( buttonPrimary.find( "button" ).hasClass( "btn" ) ).toBe( true )
    expect( buttonPrimary.find( "button" ).hasClass( "btn--3d" ) ).toBe( true )
    expect( buttonPrimary.find( "button" ).hasClass( "btn--primary" ) )
      .toBe( true )
  })

  it( "shows text from props", ( ) => {
    const buttonPrimary = mount( <ButtonPrimary
                                  text={props.text} /> )

    expect( buttonPrimary.find( "button" ).text( ) ).toBe( props.text )
  })

  it( "has type from props", ( ) => {
    const buttonPrimary = mount( <ButtonPrimary
                                  type={props.type} /> )

    expect( buttonPrimary.find( "button" ).prop( "type" ) ).toBe( props.type )
  })

  it( "can be disabled from props", ( ) => {
    const buttonPrimary = mount( <ButtonPrimary
                                  disabled={props.disabled} /> )

    expect( buttonPrimary.find( "button" ).prop( "disabled" ) ).toBe( props.disabled )
  })

  it( "handles click", ( ) => {
    const buttonPrimary = mount( <ButtonPrimary
                                  onClick={props.onClick} /> )

    buttonPrimary.find( "button" ).simulate( "click" )

    expect( props.onClick.callCount ).toBe( 1 )
  })

  it( "doesn't click when disabled", ( ) => {
    const buttonPrimary = mount( <ButtonPrimary
                                  disabled={true}
                                  onClick={props.onClick} /> )

    buttonPrimary.find( "button" ).simulate( "click" )

    expect( props.onClick.callCount ).toBe( 1 )
  })
})
