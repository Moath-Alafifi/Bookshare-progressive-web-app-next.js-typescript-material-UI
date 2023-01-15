import { SvgIcon } from '@mui/material'
import ISvgIcon from './interfaces'

const SCSvgIcons = ({ icon, color = 'info' }: ISvgIcon) => {
  return (
    <SvgIcon
      component={icon}
      sx={{ width: 'unset', height: 'unset' }}
      inheritViewBox={true}
      color={color}
    />
  )
}

export default SCSvgIcons
