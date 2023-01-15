import { Chip, ChipProps } from '@mui/material'
import { SCSvgIcons } from '@/components/shared'
import IChip from './interfaces'
import { STChip } from './styles'

const SCChip = ({ icon, iconColor, styles, ...Props }: IChip & ChipProps) => (
  <Chip
    avatar={<SCSvgIcons icon={icon} color={iconColor} />}
    variant="outlined"
    sx={{ ...STChip, ...styles }}
    {...Props}
  />
)

export default SCChip
