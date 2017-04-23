// @flow

import {InputClearIcon, InputLabeAboveClearIcon, InputLabelAbove}
  from "./styled"
import React from "react"

type Props = {
  name: string,
  value: ?string,
  placeholder: string,
  required: bool,
  labelAbove: ?bool,
  clearIcon: ?bool,
  onChange: ?() => void
}

const FormInputText = function FormInputText ({
  name,
  value,
  placeholder,
  onChange,
  clearIcon,
  required,
  labelAbove
}: Props) {

  if (labelAbove) {

    if (clearIcon) {

      return (
        <InputLabeAboveClearIcon
          className="input--large"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          type="text"
          value={value}
        />
      )

    }

    return (
      <InputLabelAbove
        className="input--large"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type="text"
        value={value}
      />
    )

  }

  return (
    <InputClearIcon
      className="input--large"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      type="text"
      value={value}
    />
  )

}

export default FormInputText
