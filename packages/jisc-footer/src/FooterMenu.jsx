import React from "react"

import FooterMenuItem from "./FooterMenuItem"

const items = [
  "Security",
  "Cloud",
  "Connectivity",
  "Email",
  [ "Access and identity", "management" ],
  [ "Internet and IP", "services" ],
  "Procurement",
  "Telecoms",
  "Videoconferencing"
]

class FooterMenu extends React.Component {
  render( ) {
    return(
      <div className="col span-6">
        <div className="linklist linklist--2col">
          <div className="linklist__title v-pad-small-mobile">
            <h3>Network & IT services</h3>
          </div>

          <ul>
            { items
                .map( ( item, i ) => {
                  return (
                    <FooterMenuItem
                      key={i}
                      item={item}
                      />
                  )
                })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default FooterMenu
