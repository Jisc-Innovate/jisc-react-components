import React from "react"
import sinon from "sinon"
import { shallow, mount } from "enzyme"
import FormInputText from "../src/FormInputText.jsx"

const props = {
  label: "Test",
  name: "test",
  value: "test",
  placeholder: "Test",
  required: true,
  labelAbove: true,
  clearIcon: false,
  onClear: sinon.spy( ),
  onChange: sinon.spy( )
}

describe( "FormInputText", ( ) => {
  it( "accepts props", ( ) => {
    const input = mount( <FormInputText
                           label={props.label}
                           name={props.name}
                           value={props.value}
                           placeholder={props.placeholder}
                           required={props.required}
                           labelAbove={props.labelAbove}
                           clearIcon={props.clearIcon}
                           onClear={props.onClear}
                           onChange={props.onChange} /> )

     expect( input.props( ).label ).toBe( props.label )
     expect( input.props( ).name ).toBe( props.name )
     expect( input.props( ).value ).toBe( props.value )
     expect( input.props( ).placeholder ).toBe( props.placeholder )
     expect( input.props( ).required ).toBe( props.required )
     expect( input.props( ).labelAbove ).toBe( props.labelAbove )
     expect( input.props( ).clearIcon ).toBe( props.clearIcon )
     expect( input.props( ).onClear ).toBe( props.onClear )
     expect( input.props( ).onChange ).toBe( props.onChange )
  })

  it( "renders DOM elements", ( ) => {
    const input = shallow( <FormInputText
                             label={props.label}
                             name={props.name}
                             placeholder={props.placeholder}
                             required={props.required} /> )

    expect( input.find( "li" ).length ).toBe( 1 )
    expect( input.find( "label" ).length ).toBe( 1 )
    expect( input.find( "div" ).length ).toBe( 1 )
    expect( input.find( "input" ).length ).toBe( 1 )
  })

  it( "has expected classes", ( ) => {
    const input = shallow( <FormInputText
                             label={props.label}
                             name={props.name}
                             placeholder={props.placeholder}
                             required={props.required} /> )

    expect( input.find( "li" ).hasClass( "form-input-text" ) ).toBe( true )
    expect( input.find( "li" ).hasClass( "form-fields__item--text" ) )
      .toBe( true )
    expect( input.find( "div" ).hasClass( "form-fields__label-text" ) )
      .toBe( true )
    expect( input.find( "input" ).hasClass( "input--large" ) ).toBe( true )

    input.setProps( { labelAbove: props.labelAbove } )

    expect( input.find( "div" ).hasClass( "form-fields__label-text--above" ) )
      .toBe( true )
    expect( input.find( "input" ).hasClass( "input--large--label-above" ) )
      .toBe( true )
  })

  it( "renders a clear icon when clearIcon is true", ( ) => {
    const input = shallow( <FormInputText
                           label={props.label}
                           name={props.name}
                           placeholder={props.placeholder}
                           required={props.required}
                           clearIcon={true} /> )

    expect( input.find( "span.icon.icon-close" ).length ).toBe( 1 )
  })

  it( "doesn't render a clear icon when clearIcon is false", ( ) => {
    const input = shallow( <FormInputText
                           label={props.label}
                           name={props.name}
                           placeholder={props.placeholder}
                           required={props.required}
                           clearIcon={props.clearIcon} /> )

    expect( input.find( "span.icon.icon-close" ).length ).toBe( 0 )
  })

  it( "has type text", ( ) => {
    const input = shallow( <FormInputText
                             label={props.label}
                             name={props.name}
                             placeholder={props.placeholder}
                             required={props.required} /> )

    expect( input.find( "input" ).prop( "type" ) ).toBe( "text" )
  })

  it( "has a value from props", ( ) => {
    const input = shallow( <FormInputText
                            label={props.label}
                            name={props.name}
                            placeholder={props.placeholder}
                            required={props.required}
                            value={props.value} /> )

    expect( input.find( "input" ).prop( "value" ) ).toBe( props.value )
  })

  it( "shows label", ( ) => {
    const input = shallow( <FormInputText
                             label={props.label}
                             name={props.name}
                             placeholder={props.placeholder}
                             required={props.required} /> )

    expect( input.find( "div" ).text( ) ).toBe( props.label )
  })

  it( "handles text change", ( ) => {
    const input = mount( <FormInputText
                          label={props.label}
                          name={props.name}
                          placeholder={props.placeholder}
                          required={props.required}
                          onChange={props.onChange} /> )

    input.find( "input" ).simulate( "change" )

    expect( props.onChange.callCount ).toBe( 1 )
  })

  it( "handles a click on clear icon", ( ) => {
    const input = mount( <FormInputText
                          label={props.label}
                          name={props.name}
                          placeholder={props.placeholder}
                          required={props.required}
                          clearIcon={true}
                          onClear={props.onClear} /> )

    input.find( "span.icon.icon-close" ).simulate( "click" )

    expect( props.onClear.callCount ).toBe( 1 )
  })
})
