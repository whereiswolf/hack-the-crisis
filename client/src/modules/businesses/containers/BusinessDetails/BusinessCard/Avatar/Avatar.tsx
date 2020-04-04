import React from 'react'
import { Avatar as AvatarImg } from './Avatar.style'

interface AvatarProps {
  url: string
}

const Avatar: React.FC<AvatarProps> = ({ url }) => {
  return <AvatarImg src={url} />
}

export default Avatar
