import { Badge } from '@mui/material'
import { Bell } from '@/constants'
import { SCSvgIcons } from '@/components/shared'

const SCNotificationsBell = () => {
  return (
    <Badge badgeContent={4} color='primary' >
      <SCSvgIcons icon={Bell} color='inherit'  />
    </Badge>
  )
}

export default SCNotificationsBell
