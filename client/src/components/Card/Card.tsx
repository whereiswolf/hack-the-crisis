import React from 'react'
import { ButtonBase, Typography, Grid, makeStyles } from '@material-ui/core'
import { Voucher } from 'types'
import styles, { getImageStyles } from './Card.style'

const useStyles = makeStyles(styles)

interface CardProps {
  data: Voucher
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({
  data: { price, imageUrl, name },
  onClick,
  children,
  ...props
}) => {
  const classes = useStyles()
  return (
    <Grid item>
      <ButtonBase onClick={onClick} className={classes.buttonBase}>
        <div className={classes.wrapper} {...props}>
          <div className={classes.image} style={getImageStyles(imageUrl)} />
          <div className={classes.content}>
            {children || (
              <>
                <Typography className={classes.title}>{name}</Typography>
                <Typography
                  className={classes.subtitle}
                >{`€ ${price}`}</Typography>
              </>
            )}
          </div>
        </div>
      </ButtonBase>
    </Grid>
  )
}

export default Card
