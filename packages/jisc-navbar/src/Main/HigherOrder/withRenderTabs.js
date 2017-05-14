// @flow

import {withProps} from "recompose"

const tabs = function tabs (props) {

  return {
    tabs: props.renderTabs(props.tabs)
  }

}

export default withProps(tabs)
