// @flow

import {LabelAbove} from "./styled"
import React from "react"

type Props = {
  label: string,
  above: ?bool
}

const Label = function Label ({
  label,
  above
}: Props) {

  if (above) {

    return (
      <LabelAbove className="form-fields__label-text">
        {label}
      </LabelAbove>
    )

  }

  return (
    <div className="form-fields__label-text">
      {label}
    </div>
  )

}

export default Label
