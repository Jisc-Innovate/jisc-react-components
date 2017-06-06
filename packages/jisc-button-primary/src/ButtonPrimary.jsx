// @flow

import React from "react"

type Props = {
  onClick?: () => void,
  type?: string,
  disabled?: boolean,
  text: string
}

const ButtonPrimary = ({onClick, type, disabled, text}: Props) =>
  <button
    className="btn btn--3d btn--primary"
    disabled={Boolean(disabled)}
    onClick={onClick}
    type={type}
  >
    {text}
  </button>

ButtonPrimary.defaultProps = {
  disabled: false,
  onClick: () => null,
  type: ""
}

export default ButtonPrimary
