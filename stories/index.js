import React from "react" // eslint-disable-line no-unused-vars
import { storiesOf, action, linkTo } from "@kadira/storybook"
import Welcome from "./Welcome"

import ButtonPrimary from "../packages/jisc-button-primary"
import Footer from "../packages/jisc-footer"
import FormInputText from "../packages/jisc-form-input-text"
import TeaserArrow from "../packages/jisc-teaser-arrow"

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

storiesOf("TeaserArrow", module)
  .add("with text", () => (
    <TeaserArrow
      title="Hello Teaser Arrow"
      description="This is an awesome teaser arrow with amazing features"
      url="http://jisc.ac.uk"
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
  .add("clear icon", () => (
    <ul className="form-fields">
      <FormInputText
        label="Name"
        name="name"
        required={false}
        clearIcon
        placeholder="Enter your name"
        onClear={action( "cleared" )}
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
  .add("label above and clear icon", () => (
    <ul className="form-fields">
      <FormInputText
        label="Name"
        name="name"
        required={false}
        labelAbove
        clearIcon
        placeholder="Enter your name"
        onClear={action( "cleared" )}
        />
    </ul>
  ))
