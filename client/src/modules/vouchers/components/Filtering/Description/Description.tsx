import React from 'react'
import { Typography } from '@material-ui/core'
import { Trans, useTranslation } from 'react-i18next'
import strings from 'modules/vouchers/strings'
import { Title } from './Description.style'

interface DescriptionProps {}

const Description = (props: DescriptionProps) => {
  const { t } = useTranslation()
  return (
    <>
      <Title color="textPrimary" variant="h2">
        <Trans
          defaults={strings.BEST_IN_AREA}
          values={{ item: t(strings.VOUCHERS) }}
          components={[<em>item</em>]}
        />
      </Title>
      <br />
      <Typography color="textSecondary" variant="body1">
        {t(strings.BEST_IN_AREA_SUBTITLE)}
      </Typography>
    </>
  )
}

export default Description
