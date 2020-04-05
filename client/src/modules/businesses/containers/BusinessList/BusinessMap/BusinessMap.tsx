import React from 'react'
import GoogleMapReact from 'google-map-react'
import config from 'config'
import { usePosition } from 'use-position'
import styles from './styles.json'

interface Props {}

const DEFAULT_CENTER = {
  lat: 59.332652,
  lng: 18.069259,
}
const DEFAULT_ZOOM = 14

const useDefaultCenter = () => {
  const { latitude: lat, longitude: lng } = usePosition(false)
  return lat === undefined || lng === undefined ? DEFAULT_CENTER : { lat, lng }
}

const BusinessMap = (props: Props) => {
  const defaultCenter = useDefaultCenter()
  const handleApiLoaded = (map: any) => map.panTo(defaultCenter)

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: config.MAPS_KEY }}
      defaultCenter={defaultCenter}
      center={defaultCenter}
      defaultZoom={DEFAULT_ZOOM}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map }) => handleApiLoaded(map)}
      options={{ styles }}
    >
      {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
    </GoogleMapReact>
  )
}

export default BusinessMap
