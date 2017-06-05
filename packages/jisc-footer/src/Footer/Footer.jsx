// @flow

import FooterDescription from "FooterDescription"
import FooterMenu from "FooterMenu"
import React from "react"
import createMarkup from "utilities/createMarkup"

type Props = {
  copyright: string,
  minimal?: boolean
}

const Footer = ({
  copyright,
  minimal = false
}: Props) =>
  <footer
    className="footer site-footer"
    role="contentinfo"
  >
    <If condition={!minimal}>
      <div className="inner l-pull-left medium l-gutter--top bottom-section">
        <div className="l-centre-offset row">
          <FooterDescription />

          <FooterMenu />
        </div>
      </div>
    </If>

      <div className="inner l-pull-left heavy">
        <div className="l-centre-offset row cc-wrap">
          <div
            className="cc duo"
            dangerouslySetInnerHTML={createMarkup(copyright)}
          />
        </div>
      </div>
  </footer>

Footer.defaultProps = {
  minimal: false
}

export default Footer
