import React, { PropTypes } from "react"

class ButtonPrimary extends React.Component {
  render( ) {
    const { onClick, type, disabled, text } = this.props

    return(
      <button
        onClick={onClick}
        type={type}
        disabled={disabled ? true : false}
        className="btn btn--3d btn--primary">
          {text}
      </button>
    )
  }
}

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool
}

export default ButtonPrimary
