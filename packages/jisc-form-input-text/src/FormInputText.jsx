// @flow

import ClearIcon from "./ClearIcon"
import {Container} from "./styled"
import Input from "./Input"
import Label from "./Label"
import React from "react"

type Props = {
  label: string,
  name: string,
  value: ?string,
  placeholder: string,
  required: boolean,
  labelAbove: ?boolean,
  clearIcon: ?boolean,
  onClear: ?() => void,
  onChange: ?() => void
}

const FormInputText = function FormInputText ({
  label,
  name,
  value,
  placeholder,
  onChange,
  clearIcon,
  required,
  labelAbove,
  onClear
}: Props) {

  return (
    <li className="form-input-text form-fields__item--text">
      <label>

        <Label
          above={labelAbove}
          label={label}
        />

        <Container className="form-input-text__container">
          <Input
            clearIcon={clearIcon}
            labelAbove={labelAbove}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            type="text"
            value={value}
          />

          <ClearIcon
            above={labelAbove}
            clearIcon={clearIcon}
            onClear={onClear}
          />
        </Container>
      </label>
    </li>
  )

}

export default FormInputText
