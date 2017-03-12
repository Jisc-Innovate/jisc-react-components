import React, { PropTypes } from "react"

class FooterMenuItem extends React.Component {
  renderItem( ) {
    const { item } = this.props

    if( typeof item === "string" ) {
      return(
        <span>
          {item}
        </span>
      )
    }

    if( Array.isArray( item ) ) {
      return(
        item
         .map( ( item, i ) => {
           const className = i === 0 ? "" : "linklist__item__break"

           return(
             <span
               key={i}
               className={className}>
                 {item}
             </span>
           )
         })
      )
    }
  }

  render( ) {
    return(
      <li className="linklist__item">
        <a href="#">
          {this.renderItem( )}
        </a>
      </li>
    )
  }
}

FooterMenuItem.propTypes = {
  item: PropTypes.oneOfType(
    [ PropTypes.string, PropTypes.arrayOf( PropTypes.string ) ]
  )
}

export default FooterMenuItem
