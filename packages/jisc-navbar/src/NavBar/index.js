// @flow

import NavBar from "NavBar/NavBar"
import {compose} from "recompose"

import withFocussed from "./HigherOrder/withFocussed"
import withRenderTabs from "./HigherOrder/withRenderTabs"

export default compose(withFocussed, withRenderTabs)(NavBar)
