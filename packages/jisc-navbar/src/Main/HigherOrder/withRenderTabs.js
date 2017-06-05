// @flow

import {withProps} from "recompose"

const tabs = (props) => ({
  tabs: props.renderTabs(props.tabs)
})

export default withProps(tabs)
