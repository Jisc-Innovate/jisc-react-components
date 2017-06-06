// @flow

import React from "react"

type Props = {
  title: string,
  description: string,
  url?: string
}

const Copy = ({title, description, url = "#"}: Props) =>
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

Copy.defaultProps = {
  url: "#"
}

export default Copy
