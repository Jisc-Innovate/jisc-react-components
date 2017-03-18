import React, { PropTypes } from "react"

import "./FormInputText.scss"

class FormInputText extends React.Component {
  render( ) {
    const { label, name, value, placeholder, onChange,
            clearIcon, required, labelAbove, onClear } = this.props,
          labelClass = labelAbove ? "form-fields__label-text--above" : ""

    return(
      <li className="form-input-text form-fields__item--text">
        <label>

          <div className={`form-fields__label-text ${labelClass}`}>
            {label}
          </div>

          <input
            className="input--large"
            name={name}
            value={value}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            required={required} />

          { clearIcon === true ?
            <span
              className="icon icon-close"
              onClick={onClear}>
            </span>
            : null }
        </label>
      </li>
    )
  }
}

FormInputText.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  labelAbove: PropTypes.bool,
  clearIcon: PropTypes.bool,
  onClear: PropTypes.func,
  onChange: PropTypes.func
}

export default FormInputText
