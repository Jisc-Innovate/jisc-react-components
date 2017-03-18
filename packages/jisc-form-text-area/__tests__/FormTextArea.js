import React from "react"
import sinon from "sinon"
import { shallow, mount } from "enzyme"
import FormTextArea from "../src/FormTextArea.jsx"

const props = {
  label: "testLabel",
  name: "testName",
  value: "testValue",
  placeholder: "testPlaceholder",
  required: true,
  rows: 20,
  onChange: sinon.spy( )
}

describe( "FormTextArea", ( ) => {
  it( "accepts props", ( ) => {
    const textArea = mount( <FormTextArea
                             label={props.label}
                             name={props.name}
                             value={props.value}
                             placeholder={props.placeholder}
                             required={props.required}
                             rows={props.rows}
                             onChange={props.onChange} /> )

     expect( textArea.props( ).label ).toBe( props.label )
     expect( textArea.props( ).name ).toBe( props.name )
     expect( textArea.props( ).value ).toBe( props.value )
     expect( textArea.props( ).placeholder ).toBe( props.placeholder )
     expect( textArea.props( ).required ).toBe( props.required )
     expect( textArea.props( ).rows ).toBe( props.rows )
     expect( textArea.props( ).onChange ).toBe( props.onChange )
  })

  it( "renders DOM elements", ( ) => {
    const textArea = shallow( <FormTextArea
                               label={props.label}
                               name={props.name}
                               placeholder={props.placeholder}
                               required={props.required} /> )

    expect( textArea.find( "li" ).length ).toBe( 1 )
    expect( textArea.find( "label" ).length ).toBe( 1 )
    expect( textArea.find( "span" ).length ).toBe( 1 )
    expect( textArea.find( "textarea" ).length ).toBe( 1 )
  })

  it( "has expected classes", ( ) => {
    const textArea = shallow( <FormTextArea
                               label={props.label}
                               name={props.name}
                               placeholder={props.placeholder}
                               required={props.required} /> )

    expect( textArea.find( "li" ).hasClass( "form-fields__item--textarea" ) )
      .toBe( true )
    expect( textArea.find( "span" ).hasClass( "form-fields__label-text" ) )
      .toBe( true )
    expect( textArea.find( "textarea" ).hasClass( "input--large" ) )
      .toBe( true )
  })

  it( "shows label", ( ) => {
    const textArea = shallow( <FormTextArea
                               label={props.label}
                               name={props.name}
                               placeholder={props.placeholder}
                               required={props.required} /> )

    expect( textArea.find( "span" ).text( ) ).toBe( props.label )
  })

  it( "handles text change", ( ) => {
    const textArea = mount( <FormTextArea
                              label={props.label}
                              name={props.name}
                              placeholder={props.placeholder}
                              required={props.required}
                              onChange={props.onChange} /> )

    textArea.find( "textarea" ).simulate( "change" )

    expect( props.onChange.callCount ).toBe( 1 )
  })
})
