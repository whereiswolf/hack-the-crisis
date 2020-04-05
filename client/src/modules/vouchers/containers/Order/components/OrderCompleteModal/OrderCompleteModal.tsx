import React from 'react'
import { Modal } from '@material-ui/core'
import { Button } from 'components'
import { makeStyles, Avatar } from '@material-ui/core'
import styles, {
  Wrapper,
  Description,
  AvatarWrapper,
  TitleWrapper,
  Subtitle,
  Title,
  Heart,
} from './OrderCompleteModal.style'

interface OrderCompleteModalProps {
  isOpen: boolean
  description?: string
  imageUrl?: string
  onClick: () => void
}

const placeholder = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Thank you from BingoBong team!;`

const useStyles = makeStyles(styles)

const OrderCompleteModal: React.FC<OrderCompleteModalProps> = ({
  isOpen = false,
  description = placeholder,
  imageUrl,
  onClick,
}) => {
  const classes = useStyles()
  return (
    <Modal open={isOpen}>
      <Wrapper
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <AvatarWrapper container justify="center" alignItems="center">
          <Avatar src={imageUrl} className={classes.avatar} />
        </AvatarWrapper>
        <TitleWrapper>
          <Subtitle>Thank you for</Subtitle>
          <Title>
            supporting us!
            <Heart />
            <Heart />
            <Heart />
          </Title>
        </TitleWrapper>
        <Description>{description}</Description>
        <Button variant="contained" onClick={onClick}>
          Find other amazing deals!
        </Button>
      </Wrapper>
    </Modal>
  )
}

export default OrderCompleteModal
