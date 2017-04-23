import {mount, shallow} from "enzyme"
import ClearIcon from "../src/ClearIcon.jsx"
import {Container} from "../src/styled.jsx"
import FormInputText from "../src/FormInputText.jsx"
import Input from "../src/Input.jsx"
import Label from "../src/Label.jsx"
import React from "react"  // eslint-disable-line no-unused-vars
import sinon from "sinon"

const props = {
  clearIcon: false,
  label: "Test",
  labelAbove: true,
  name: "test",
  onChange: sinon.spy(),
  onClear: sinon.spy(),
  placeholder: "Test",
  required: true,
  value: "test"
}
/* eslint-disable capitalized-comments */
const MAX_LI = 1
const MAX_LABEL = 1
const MAX_LABEL_COMPONENT = 1
const MAX_INPUT_COMPONENT = 1
const MAX_CONTAINER_COMPONENT = 1
const MAX_CLEARICON_COMPONENT = 1

// const FIRST_DIV = 0

// const NO_ELEMENTS = 0
// const ONE_ELEMENT = 1

// const ONE_CALL = 1
// const TWO_CALLS = 2

/* eslint-disable max-statements */

describe("FormInputText", () => {

  it("accepts props", () => {

    const input = mount(<FormInputText
                          clearIcon={props.clearIcon}
                           label={props.label}
                           labelAbove={props.labelAbove}
                           name={props.name}
                           onChange={props.onChange}
                           onClear={props.onClear}
                           placeholder={props.placeholder}
                           required={props.required}
                           value={props.value}
                        />)

     expect(input.props().label).toBe(props.label)
     expect(input.props().name).toBe(props.name)
     expect(input.props().value).toBe(props.value)
     expect(input.props().placeholder).toBe(props.placeholder)
     expect(input.props().required).toBe(props.required)
     expect(input.props().labelAbove).toBe(props.labelAbove)
     expect(input.props().clearIcon).toBe(props.clearIcon)
     expect(input.props().onClear).toBe(props.onClear)
     expect(input.props().onChange).toBe(props.onChange)

  })

  it("renders DOM elements", () => {

    const input = shallow(<FormInputText
                             label={props.label}
                             name={props.name}
                             placeholder={props.placeholder}
                             required={props.required}
                          />)

    expect(input.find("li").length).toBe(MAX_LI)
    expect(input.find("label").length).toBe(MAX_LABEL)
    expect(input.find(Label).length).toBe(MAX_LABEL_COMPONENT)
    expect(input.find(Container).length).toBe(MAX_CONTAINER_COMPONENT)
    expect(input.find(Input).length).toBe(MAX_INPUT_COMPONENT)
    expect(input.find(ClearIcon).length).toBe(MAX_CLEARICON_COMPONENT)

  })

  it("has expected classes", () => {

    const input = shallow(<FormInputText
                             label={props.label}
                             name={props.name}
                             placeholder={props.placeholder}
                             required={props.required}
                          />)

    expect(input.find("li").hasClass("form-input-text")).toBe(true)
    expect(input.find("li").hasClass("form-fields__item--text"))
      .toBe(true)
    expect(input.find(Container).hasClass("form-input-text__container"))
      .toBe(true)

    // expect(input.find("div").at(FIRST_DIV)
    //   .hasClass("form-fields__label-text")).toBe(true)
    // expect(input.find("input").hasClass("input--large")).toBe(true)

    // input.setProps({labelAbove: props.labelAbove})

    // expect(input.find("div").at(FIRST_DIV)
    //   .hasClass("form-fields__label-text--above")).toBe(true)
    // expect(input.find("input").hasClass("input--large--label-above"))
    //   .toBe(true)

  })

  // it("renders an outer clear icon when clearIcon is true", () => {
  //
  //   const input = shallow(<FormInputText
  //                          clearIcon
  //                          label={props.label}
  //                          name={props.name}
  //                          placeholder={props.placeholder}
  //                          required={props.required}
  //                         />)
  //
  //   expect(input.find("span.icon.icon--outer.icon-close").length)
  //     .toBe(ONE_ELEMENT)
  //
  // })

  // it("doesn't render an outer clear icon when clearIcon is false", () => {
  //
  //   const input = shallow(<FormInputText
  //                          clearIcon={props.clearIcon}
  //                          label={props.label}
  //                          name={props.name}
  //                          placeholder={props.placeholder}
  //                          required={props.required}
  //                         />)
  //
  //   expect(input.find("span.icon.icon--outer.icon-close").length)
  //     .toBe(NO_ELEMENTS)
  //
  // })

  // it("renders an inner clear icon when clearIcon and labelAbove are true",
  //  () => {
  //
  //   const input = shallow(<FormInputText
  //                          clearIcon
  //                          label={props.label}
  //                          labelAbove
  //                          name={props.name}
  //                          placeholder={props.placeholder}
  //                          required={props.required}
  //                         />)
  //
  //   expect(input.find("span.icon.icon--inner.icon-close").length)
  //     .toBe(ONE_ELEMENT)
  //
  // })

  // it(`doesn't render an inner
  //      clear icon when clearIcon is true and label above
  //      is false`, () => {
  //
  //   const input = shallow(<FormInputText
  //                          clearIcon
  //                          label={props.label}
  //                          labelAbove={false}
  //                          name={props.name}
  //                          placeholder={props.placeholder}
  //                          required={props.required}
  //                         />)
  //
  //   expect(input.find("span.icon.icon--inner.icon-close").length)
  //     .toBe(NO_ELEMENTS)
  //
  // })

  // it("has type text", () => {
  //
  //   const input = shallow(<FormInputText
  //                            label={props.label}
  //                            name={props.name}
  //                            placeholder={props.placeholder}
  //                            required={props.required}
  //                         />)
  //
  //   expect(input.find("input").prop("type")).toBe("text")
  //
  // })

  it("has a value from props", () => {

    const input = shallow(<FormInputText
                            label={props.label}
                            name={props.name}
                            placeholder={props.placeholder}
                            required={props.required}
                            value={props.value}
                          />)

    expect(input.find(Input).prop("value")).toBe(props.value)

  })

  // it("shows label", () => {
  //
  //   const input = shallow(<FormInputText
  //                            label={props.label}
  //                            name={props.name}
  //                            placeholder={props.placeholder}
  //                            required={props.required}
  //                         />)
  //
  //   expect(input.find("div").at(FIRST_DIV)
  //     .text()).toBe(props.label)
  //
  // })

  // it("handles text change", () => {
  //
  //   const input = mount(<FormInputText
  //                         label={props.label}
  //                         name={props.name}
  //                         onChange={props.onChange}
  //                         placeholder={props.placeholder}
  //                         required={props.required}
  //                       />)
  //
  //   input.find("input").simulate("change")
  //
  //   expect(props.onChange.callCount).toBe(ONE_CALL)
  //
  // })
  //
  // it("handles a click on outer clear icon", () => {
  //
  //   const input = mount(<FormInputText
  //                         clearIcon
  //                         label={props.label}
  //                         name={props.name}
  //                         onClear={props.onClear}
  //                         placeholder={props.placeholder}
  //                         required={props.required}
  //                       />)
  //
  //   input.find("span.icon.icon--outer.icon-close").simulate("click")
  //
  //   expect(props.onClear.callCount).toBe(ONE_CALL)
  //
  // })
  //
  // it("handles a click on inner clear icon", () => {
  //
  //   const input = mount(<FormInputText
  //                         clearIcon
  //                         label={props.label}
  //                         labelAbove={props.labelAbove}
  //                         name={props.name}
  //                         onClear={props.onClear}
  //                         placeholder={props.placeholder}
  //                         required={props.required}
  //                       />)
  //
  //   input.find("span.icon.icon--inner.icon-close").simulate("click")
  //
  //   expect(props.onClear.callCount).toBe(TWO_CALLS)
  //
  // })

})

/* eslint-enable max-statements */
