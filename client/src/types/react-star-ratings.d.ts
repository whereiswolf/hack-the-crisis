declare module 'react-star-ratings' {
  import * as React from 'react'

  interface ReactStarRatingsProps {
    rating: number
    numberOfStars: number
    changeRating?: () => void
    starRatedColor: string
    starEmptyColor: string
    starHoverColor?: string
    starDimension?: string
    starSpacing?: string
    gradientPathName?: string
    ignoreInlineStyles?: boolean
    svgIconPath?: string
    svgIconViewBox?: string
    name?: string
  }

  class ReactStarRatings extends React.Component<ReactStarRatingsProps> {}

  export default ReactStarRatings
}
