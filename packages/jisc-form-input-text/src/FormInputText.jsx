// @flow

import React from "react"

import "./FormInputText.scss"

type Props = {
  label: string,
  name: string,
  value: ?string,
  placeholder: string,
  required: bool,
  labelAbove: ?bool,
  clearIcon: ?bool,
  onClear: ?( ) => void,
  onChange: ?( ) => void
}

class FormInputText extends React.Component {
  props: Props;

  render( ) {
    const { label, name, value, placeholder, onChange, clearIcon,
            required, labelAbove, onClear } = this.props,
          labelClass = labelAbove ? "form-fields__label-text--above" : "",
          inputClass = labelAbove ? clearIcon ?
            "input--large--label-above input--large--clear-icon"
            : "input--large--label-above" : "",
          clearIconClass = labelAbove ? "icon--inner" : "icon--outer"

    return(
      <li className="form-input-text form-fields__item--text">
        <label>

          <div className={`form-fields__label-text ${labelClass}`}>
            {label}
          </div>

          <div className="form-input-text__container">
            <input
              className={`input--large ${inputClass}`}
              name={name}
              value={value}
              type="text"
              placeholder={placeholder}
              onChange={onChange}
              required={required} />

            { clearIcon &&
              <span
                className={`icon ${clearIconClass} icon-close`}
                onClick={onClear}>
              </span>
            }
          </div>
        </label>
      </li>
    )
  }
}

export default FormInputText
