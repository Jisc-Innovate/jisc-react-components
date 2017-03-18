import React, { PropTypes } from "react"

class Secondary extends React.Component {
  render( ) {
    const { renderTabs } = this.props,
          tabs = renderTabs( this.props.tabs )

    return(
      <nav
         className="masthead__nav masthead__nav--secondary"
         role="navigation"
         data-dropdown>

          <ul>
            {tabs}
          </ul>

      </nav>
    )
  }
}

Secondary.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    show: PropTypes.bool
  })).isRequired,

  renderTabs: PropTypes.func.isRequired
}

export default Secondary
