import { Badge } from '@mui/material'
import { Bell } from '@/constants'
import { SCSvgIcons } from '@/components/shared'
import INotificationsBell from './interfaces'

const SCNotificationsBell = ({notificationNum}:INotificationsBell) => {
  return (
    <Badge badgeContent={notificationNum} color='primary' >
      <SCSvgIcons icon={Bell} color='inherit'  />
    </Badge>
  )
}

export default SCNotificationsBell
