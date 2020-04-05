import React from 'react'
import StarRatings from 'react-star-ratings'
import { colors } from 'config'

interface RatingProps {
  value: number
}

const starPath =
  'M14.0026 4.33633C13.901 4.09126 13.6618 3.93138 13.3971 3.93138H9.87047L8.08619 0.362159C7.86406 -0.0814538 7.13606 -0.0814538 6.91392 0.362159L5.12899 3.93138H1.60236C1.33764 3.93138 1.09846 4.09126 0.996898 4.33633C0.895988 4.58074 0.951685 4.86316 1.13909 5.04991L4.14282 8.05364L2.93844 12.2703C2.86309 12.5343 2.96007 12.8174 3.1822 12.9793C3.40434 13.1418 3.70379 13.1477 3.93182 12.995L7.49973 10.6164L11.0676 12.995C11.1784 13.0684 11.3048 13.1051 11.4313 13.1051C11.5669 13.1051 11.7026 13.0631 11.8179 12.9793C12.0394 12.8174 12.137 12.5343 12.0617 12.2703L10.8566 8.05364L13.8604 5.04991C14.0478 4.86316 14.1041 4.58074 14.0026 4.33633Z'

const Rating: React.FC<RatingProps> = ({ value }) => (
  <StarRatings
    rating={value}
    numberOfStars={5}
    starEmptyColor={colors.text[100]}
    svgIconPath={starPath}
    svgIconViewBox="0 0 15 14"
    starDimension="13px"
    starSpacing="4px"
    starRatedColor={colors.yellow}
  />
)

export default Rating
