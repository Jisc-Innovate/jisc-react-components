import React, { PropTypes } from "react"

class Form extends React.Component {
  render( ) {
    const { submit, noValidate, children } = this.props

    return(
      <form
        className="form"
        onSubmit={submit}
        method="post"
        noValidate={noValidate}>

        {children}

      </form>
    )
  }
}

Form.propTypes = {
  submit: PropTypes.func,
  noValidate: PropTypes.bool
}

export default Form
