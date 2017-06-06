import React from "react" // eslint-disable-line no-unused-vars
import { action, storiesOf } from "@kadira/storybook"
import NavBar from "../packages/jisc-navbar/src/NavBar"
import ButtonPrimary from "../packages/jisc-button-primary/src/ButtonPrimary"
import Footer from "../packages/jisc-footer/src/Footer"
import FormInputText from "../packages/jisc-form-input-text"
import TeaserArrow from "../packages/jisc-teaser-arrow/src/TeaserArrow"

storiesOf("ButtonPrimary", module).add("with text", () =>
  (<ButtonPrimary onClick={action("clicked")}
    text="Hello Button" />)
)

storiesOf("Footer", module)
  .add("expanded", () => <Footer copyright="Copyright Jisc &copy; 2017" />)
  .add("minimal", () => (<Footer minimal
    copyright="Copyright Jisc &copy; 2017" />))

storiesOf("FormInputText", module)
  .add("standard", () =>
    (<ul className="form-fields">
      <FormInputText
        label="Name"
        name="name"
        required={false}
        placeholder="Enter your name"
        onChange={action("changed")}
      />
    </ul>)
  )
  .add("clear icon", () =>
    (<ul className="form-fields">
      <FormInputText
        label="Name"
        name="name"
        required={false}
        clearIcon
        placeholder="Enter your name"
        onClear={action("cleared")}
      />
    </ul>)
  )
  .add("label above", () =>
    (<ul className="form-fields">
      <FormInputText
        label="Name"
        name="name"
        required={false}
        labelAbove
        placeholder="Enter your name"
        onChange={action("changed")}
      />
    </ul>)
  )
  .add("label above and clear icon", () =>
    (<ul className="form-fields">
      <FormInputText
        label="Name"
        name="name"
        required={false}
        labelAbove
        clearIcon
        placeholder="Enter your name"
        onClear={action("cleared")}
      />
    </ul>)
  )

storiesOf("NavBar", module)
  .add("standard", () => <NavBar title="Hello NavBar!" />)
  .add("focussed", () => (<NavBar focussed
    focussedTitle="Focussed NavBar" />))

storiesOf("TeaserArrow", module).add("with text", () =>
  (<TeaserArrow
    title="Hello Teaser Arrow"
    description="This is an awesome teaser arrow with amazing features"
    url="http://jisc.ac.uk"
  />)
)
