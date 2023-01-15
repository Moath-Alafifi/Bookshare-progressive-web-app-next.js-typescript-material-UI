import IUserReadingLevel from './interfaces'
import { NoviceReaderBadge } from '@/constants'
import SCChip from '../Chip'

const SCUserReadingLevel = ({ userReadingLevel }: IUserReadingLevel) => {
  return <SCChip icon={NoviceReaderBadge} label={`${userReadingLevel}`} />
}

export default SCUserReadingLevel
