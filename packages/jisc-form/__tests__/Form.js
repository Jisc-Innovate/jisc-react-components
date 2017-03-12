import React from "react"
import sinon from "sinon"
import { mount, render } from "enzyme"
import Form from "../src/Form.jsx"

const props = {
  noValidate: false,
  submit: sinon.spy( )
}

describe( "Form", ( ) => {
  it( "accepts props", ( ) => {
    const form = mount( <Form
                          submit={props.submit}
                          noValidate={props.noValidate} /> )

    expect( typeof form.props( ).submit ).toBe( "function" )
    expect( form.props( ).noValidate ).toBe( props.noValidate )
  })

  it( "renders DOM elements", ( ) => {
    const form = render( <Form /> )

    expect( form.find( "form" ).length ).toBe( 1 )
  })

  it( "renders DOM children elements", ( ) => {
    const form = render( <Form>
                           <div className="testClass">Test</div>
                         </Form> )

    expect( form.find( "form" ).length ).toBe( 1 )
    expect( form.find( "div" ).length ).toBe( 1 )
    expect( form.find( "div" ).hasClass( "testClass" ) ).toBe( true )
    expect( form.find( "div" ).text( ) === "Test" ).toBe( true )
  })

  it( "has class form", ( ) => {
    const form = render( <Form /> )

    expect( form.find( "form" ).hasClass( "form" ) ).toBe( true )
  })

  it( "has method post", ( ) => {
    const form = render( <Form /> )

    expect( form.find( "form" ).prop( "method" ) ).toBe( "post" )
  })

  it( "submits form", ( ) => {
    const form = mount( <Form
                           submit={props.submit} /> )

    form.find( "form" ).simulate( "submit" )
    expect( props.submit.callCount ).toBe( 1 )
  })
})
