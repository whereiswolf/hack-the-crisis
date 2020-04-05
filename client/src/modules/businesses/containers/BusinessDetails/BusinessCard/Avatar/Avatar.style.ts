import styled from 'styled-components'

const AVATAR_SIZE = 122

export const Avatar = styled.div`
  box-sizing: border-box;
  border: 5px solid ${(p) => p.theme.palette.info.dark};
  min-width: ${AVATAR_SIZE}px;
  width: ${AVATAR_SIZE}px;
  height: ${AVATAR_SIZE}px;
  min-height: ${AVATAR_SIZE}px;
  border-radius: 100px;
  background-image: url('${(p: { src: string }) => p.src}');
  background-size: cover;
  background-position: center center;
`
