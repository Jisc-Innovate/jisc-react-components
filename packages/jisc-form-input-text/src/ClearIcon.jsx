// @flow

import {ClearIconInner, ClearIconOuter} from "./styled"
import React from "react"

type Props = {
  above: ?boolean,
  clearIcon: ?boolean,
  onClear: ?() => void
}

const ClearIcon = function ClearIcon ({
  above,
  clearIcon,
  onClear
}: Props) {

  if (clearIcon) {

    if (above) {

      return (
        <ClearIconInner
          className="icon icon-close"
          onClick={onClear}
        />
      )

    }

    return (
      <ClearIconOuter
        className="icon icon-close"
        onClick={onClear}
      />
    )

  }

  return null

}

export default ClearIcon
