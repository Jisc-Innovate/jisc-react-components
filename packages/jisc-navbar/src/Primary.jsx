import React, { PropTypes } from "react"

class Primary extends React.Component {
  render( ) {
    const { renderTabs } = this.props,
          tabs = renderTabs( this.props.tabs )

    return(
      <nav
         className="masthead__nav header__nav--primary"
         role="navigation"
         data-dropdown>

          <ul>
            {tabs}
          </ul>

      </nav>
    )
  }
}

Primary.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    show: PropTypes.bool
  })).isRequired,

  renderTabs: PropTypes.func.isRequired
}

export default Primary
