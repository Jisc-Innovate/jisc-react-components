import React, { PropTypes } from "react"

class TeaserArrow extends React.Component {
  render( ) {
    const { title, description, url } = this.props

    return(
      <article className="teaser">

       <div className="teaser__copy has-arrow">
         <h2 className="teaser__title">
           <a href={url}>
             {title}
           </a>
         </h2>
         <p>
           {description}
         </p>
       </div>


       <a href={url} className="teaser__arrow">
         <span className="visuallyhidden">
           Read more
         </span>
       </a>
     </article>
    )
  }
}

TeaserArrow.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default TeaserArrow
