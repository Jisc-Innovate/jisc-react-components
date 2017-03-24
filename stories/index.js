import React from "react" // eslint-disable-line no-unused-vars
import { storiesOf, action, linkTo } from "@kadira/storybook"
import Welcome from "./Welcome"

import ButtonPrimary from "../packages/jisc-button-primary"
import Footer from "../packages/jisc-footer"
import FormInputText from "../packages/jisc-form-input-text"

import "../packages/jisc-form-input-text/lib/jisc-form-input-text.css"

storiesOf("Welcome", module)
  .add("to Storybook", () => (
    <Welcome showApp={linkTo("Button")}/>
  ))

storiesOf("ButtonPrimary", module)
  .add("with text", () => (
    <ButtonPrimary
      onClick={action("clicked")}
      text="Hello Button"
      />
  ))

storiesOf("Footer", module)
  .add("expanded", () => (
    <Footer
      copyright="Copyright Jisc &copy; 2017"
      />
  ))
  .add("minimal", () => (
    <Footer
      minimal
      copyright="Copyright Jisc &copy; 2017"
      />
  ))

storiesOf("FormInputText", module)
  .add("standard", () => (
    <ul className="form-fields">
      <FormInputText
        label="Name"
        name="name"
        required={false}
        placeholder="Enter your name"
        onChange={action( "changed" )}
        />
    </ul>
  ))
  .add("label above", () => (
    <ul className="form-fields">
      <FormInputText
        label="Name"
        name="name"
        required={false}
        labelAbove
        placeholder="Enter your name"
        onChange={action( "changed" )}
        />
    </ul>
  ))