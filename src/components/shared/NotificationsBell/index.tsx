import { Badge } from '@mui/material'
import { Bell } from '@/constants'
import { SCSvgIcons } from '@/components/shared'

const SCNotificationsBell = () => {
  return (
    <Badge badgeContent={4} color="info">
      <SCSvgIcons icon={Bell} color='primary' />
    </Badge>
  )
}

export default SCNotificationsBell
