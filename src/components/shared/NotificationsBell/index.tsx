import { Badge } from '@mui/material'
import { Bell } from '@/constants'
import { SCSvgIcons } from '@/components/shared'
import INotificationsBell from './interfaces'
import Link from 'next/link'
import { ROUTES } from '@/constants'

const SCNotificationsBell = ({ notificationNum }: INotificationsBell) => {
  return (
    <Link href={ROUTES.home.notification}>
      <Badge badgeContent={notificationNum} color="primary">
        <SCSvgIcons icon={Bell} color="inherit" />
      </Badge>
    </Link>
  )
}

export default SCNotificationsBell
