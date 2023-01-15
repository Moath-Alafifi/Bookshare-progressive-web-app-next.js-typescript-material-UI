import IUserLocation from './interfaces'
import { BlackLocation } from '@/constants'
import SCChip from '../Chip'

const SCUserLocation = ({ userLocation }: IUserLocation) => {
  return (
    <SCChip
      icon={BlackLocation}
      label={`${userLocation}`}
      styles={{ '& .MuiChip-label': { p: 'unset', fontSize: '.875rem' } }}
    />
  )
}

export default SCUserLocation
