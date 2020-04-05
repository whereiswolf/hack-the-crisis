import React from 'react'
import { ButtonBase, Typography, Grid, makeStyles } from '@material-ui/core'
import { Voucher } from 'types'
import styles, { getImageStyles } from './HorizontalCard.style'

const useStyles = makeStyles(styles)

interface HorizontalCardProps {
  data: Voucher
  onClick?: () => void
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  data: { price = null, imageUrl, name },
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
                {price !== null && (
                  <Typography
                    className={classes.subtitle}
                  >{`€ ${price}`}</Typography>
                )}
              </>
            )}
          </div>
        </div>
      </ButtonBase>
    </Grid>
  )
}

export default HorizontalCard
