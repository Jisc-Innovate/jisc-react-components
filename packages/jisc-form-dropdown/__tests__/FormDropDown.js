import React from "react" // eslint-disable-line no-unused-vars
import sinon from "sinon"
import { shallow, mount } from "enzyme"
import FormDropDown from "../src/FormDropDown.jsx"

const props = {
  label: "testLabel",
  options: [
    { name: "testName0", value: "testValue0" },
    { name: "testName1", value: "testValue1", group: "testGroup1" },
    { name: "testName2", value: "testValue2", group: "testGroup2" }
  ],
  groups: [
    { name: "testGroup1" },
    { name: "testGroup2" }
  ],
  grouped: true,
  required: true,
  selectedOption: "testValue1",
  onChange: sinon.spy( )
}

describe( "FormDropDown", ( ) => {
  it( "accepts props", ( ) => {
    const dropDown = mount( <FormDropDown
                               label={props.label}
                               options={props.options}
                               groups={props.groups}
                               required={props.required}
                               grouped={props.grouped}
                               selectedOption={props.selectedOption}
                               onChange={props.onChange} /> )

     expect( dropDown.props( ).label ).toBe( props.label )
     expect( dropDown.props( ).required ).toBe( props.required )
     expect( dropDown.props( ).options[ 0 ] )
       .toEqual( props.options[ 0 ] )
     expect( dropDown.props( ).options[ 1 ] )
       .toEqual( props.options[ 1 ] )
     expect( dropDown.props( ).groups[ 0 ] )
       .toEqual( props.groups[ 0 ] )
     expect( dropDown.props( ).groups[ 1 ] )
       .toEqual( props.groups[ 1 ] )
     expect( dropDown.props( ).selectedOption ).toBe( props.selectedOption )
     expect( dropDown.props( ).onChange ).toBe( props.onChange )
  })

  it( "renders DOM elements", ( ) => {
    const dropDown = shallow( <FormDropDown
                                options={props.options}
                                groups={props.groups}
                                grouped={props.grouped}
                                selectedOption={props.selectedOption} /> )

    expect( dropDown.find( "li" ).length ).toBe( 1 )
    expect( dropDown.find( "label" ).length ).toBe( 1 )
    expect( dropDown.find( "span" ).length ).toBe( 2 )
    expect( dropDown.find( "div" ).length ).toBe( 1 )
    expect( dropDown.find( "select" ).length ).toBe( 1 )
    expect( dropDown.find( "option" ).length ).toBe( 3 )
    expect( dropDown.find( "optgroup" ).length ).toBe( 2 )
  })

  it( "has expected classes", ( ) => {
    const dropDown = shallow( <FormDropDown
                                options={props.options}
                                selectedOption={props.selectedOption} /> )

    expect( dropDown.find( "li" ).hasClass( "form-fields__item--select" ) )
      .toBe( true )
    expect( dropDown.find( "span" ).at( 0 ).hasClass( "form-fields__label-text" ) )
      .toBe( true )
    expect( dropDown.find( "div" ).hasClass( "selector" ) ).toBe( true )
  })

  it( "passes props to options", ( ) => {
    const dropDown = shallow( <FormDropDown
                                options={props.options}
                                groups={props.groups}
                                grouped={props.grouped}
                                selectedOption={props.selectedOption} /> )

    expect( dropDown.find( "option" ).at( 0 ).prop( "value" ) )
      .toBe( props.options[ 0 ].value )
    expect( dropDown.find( "option" ).at( 0 ).text( ) )
      .toBe( props.options[ 0 ].name )
    expect( dropDown.find( "option" ).at( 1 ).prop( "value" ) )
      .toBe( props.options[ 1 ].value )
    expect( dropDown.find( "option" ).at( 1 ).text( ) )
      .toBe( props.options[ 1 ].name )
    expect( dropDown.find( "optgroup" ).at( 0 ).prop( "label" ) )
      .toBe( props.groups[ 0 ].name )
    expect( dropDown.find( "optgroup" ).at( 1 ).prop( "label" ) )
      .toBe( props.groups[ 1 ].name )
  })

  it( "shows label", ( ) => {
    const dropDown = shallow( <FormDropDown
                                label={props.label}
                                options={props.options}
                                selectedOption={props.selectedOption} /> )

    expect( dropDown.find( "span.form-fields__label-text" ).text( ) )
      .toBe( props.label )
  })

  it( "shows default selected option", ( ) => {
    sinon.spy( FormDropDown.prototype, "getLabel" )

    const dropDown = mount( <FormDropDown
                              label={props.label}
                              options={props.options}
                              groups={props.groups}
                              grouped={props.grouped}
                              selectedOption={props.selectedOption}
                              onChange={props.onChange} /> )

    expect( FormDropDown.prototype.getLabel.callCount ).toBe( 1 )
    expect( dropDown.find( "span" ).at( 1 ).text( ) )
      .toBe( props.options[ 1 ].name )
  })

  it( "handles select change", ( ) => {
    const dropDown = mount( <FormDropDown
                           options={props.options}
                           selectedOption={props.selectedOption}
                           onChange={props.onChange} /> )

    dropDown.find( "select" ).simulate( "change" )

    expect( props.onChange.callCount ).toBe( 1 )
  })
})
