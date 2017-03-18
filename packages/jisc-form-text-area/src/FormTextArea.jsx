import React, { PropTypes } from "react"

class FormTextArea extends React.Component {
  render( ) {
    const { label, name, value, placeholder, onChange, required,
            rows } = this.props

    return(
      <li className="form-fields__item--textarea">
        <label>
          <span className="form-fields__label-text">
            {label}
          </span>

          <textarea
            className="input--large"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows} />

        </label>
      </li>
    )
  }
}

FormTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  rows: PropTypes.number,
  onChange: PropTypes.func
}

export default FormTextArea
