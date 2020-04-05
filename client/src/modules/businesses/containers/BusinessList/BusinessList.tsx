import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from '@material-ui/core'
import { CardList } from 'components'
import { useHistory } from 'react-router'
import { queries } from './BusinessList.utils'
import { CardListWrapper } from './BusinessList.style'
import Filtering, { Filters } from './Filtering'
import { ListType } from 'types'
import BusinessMap from './BusinessMap'

interface BusinessListProps {}

const defaultFilters: Filters = {
  category: null,
  businessType: null,
  name: null,
}

const BusinessList: React.FC<BusinessListProps> = () => {
  const { data = { businesses: [] }, refetch } = useQuery(queries.BUSINESSES, {
    variables: defaultFilters,
  })
  const { businesses } = data
  const defaultType = (localStorage.getItem('listType') as ListType) || 'list'
  const [listType, setListType] = useState<ListType>(defaultType)
  const history = useHistory()
  const handleListTypeChange = (type: ListType) => {
    setListType(type)
    localStorage.setItem('listType', type)
  }
  return (
    <Grid container style={{ height: '100%' }}>
      <Grid item md={5}>
        <Filtering
          onFind={refetch}
          onListTypeChange={handleListTypeChange}
          listType={listType}
        />
      </Grid>
      <Grid item md={7}>
        {listType === 'list' ? (
          <CardListWrapper>
            <CardList
              type="business"
              items={businesses}
              onClick={({ id }) => history.push(`/businesses/${id}`)}
            />
          </CardListWrapper>
        ) : (
          <BusinessMap />
        )}
      </Grid>
    </Grid>
  )
}

export default BusinessList
