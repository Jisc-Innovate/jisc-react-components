import React, { PropTypes } from "react"

class FormLegend extends React.Component {
  render( ) {
    const { text } = this.props

    return(
      <legend className="legend-text">
        <span>
          {text}
        </span>
      </legend>
    )
  }
}

FormLegend.propTypes = {
  text: PropTypes.string.isRequired
}

export default FormLegend
