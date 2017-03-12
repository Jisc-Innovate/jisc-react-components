import React, { PropTypes } from "react"

import FooterDescription from "./FooterDescription"
import FooterMenu from "./FooterMenu"

class Footer extends React.Component {
  createMarkup( html ) {
     return {
       __html: html
     }
  }

  render( ) {
    const { minimal, copyright } = this.props

    return(
      <footer role="contentinfo" className="footer site-footer">
        { !minimal &&
          <div className="inner l-pull-left medium l-gutter--top bottom-section">
            <div className="l-centre-offset row">
              <FooterDescription />

              <FooterMenu />
            </div>
          </div>
        }

        <div className="inner l-pull-left heavy">
          <div className="l-centre-offset row cc-wrap">
            <div
              className="cc duo"
              dangerouslySetInnerHTML={this.createMarkup(copyright)}>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  minimal: PropTypes.bool,
  copyright: PropTypes.string
}

export default Footer
