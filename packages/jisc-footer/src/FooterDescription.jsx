// @flow

import React from "react"
import image from "url-loader!./jisc-logo.png"

const FooterDescription = () =>
  <div className="col span-6">
    <div className="l-gutter--right">
      <div className="divisional-info">
        <div className="divisional-info__side">
          <img
            alt="Jisc logo"
            height="93"
            src={image}
            width="158"
          />
        </div>

        <div className="divisional-info__body">
          <p>
            {`Our suite of network and IT services enable close-knit
            communities of academics, researchers and students to
            connect and collaborate.`}
          </p>
          <p>
            <a
              href="https://www.jisc.ac.uk/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {`Find out more at jisc.ac.uk`}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

export default FooterDescription
