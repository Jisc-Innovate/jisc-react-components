import React from "react"

class FooterDescription extends React.Component {
  render( ) {
    return(
      <div className="col span-6">
        <div className="l-gutter--right">
          <div className="divisional-info">
            <div className="divisional-info__side">
              <img
                 alt="Jisc logo"
                 src="/images/jisc-logo.png"
                 width="158"
                 height="93"/>
            </div>

            <div className="divisional-info__body">
              <p>
                Our suite of network and IT services enable close-knit
                communities of academics, researchers and students to
                connect and collaborate.
              </p>
              <p>
                <a target="_blank" href="https://www.jisc.ac.uk/">
                  Find out more at jisc.ac.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterDescription
