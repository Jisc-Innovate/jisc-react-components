// @flow

import {withProps} from "recompose"

type Props = {
  focussed: boolean
}

const focussedClassname = function focussedClassname ({focussed}: Props) {

      let className = "masthead"

      if (focussed) {

        className = "masthead--focussed"

      }

      return {
        focussedClassname: className
      }

}

export default withProps(focussedClassname)
