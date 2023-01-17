import IUserLocation from './interfaces'
import { BlackLocation } from '@/constants'
import SCChip from '../Chip'
import { STUserLocation } from './styles'

const SCUserLocation = ({ userLocation }: IUserLocation) => {
  return (
    <SCChip
      icon={BlackLocation}
      label={`${userLocation}`}
      styles={STUserLocation}
    />
  )
}

export default SCUserLocation
