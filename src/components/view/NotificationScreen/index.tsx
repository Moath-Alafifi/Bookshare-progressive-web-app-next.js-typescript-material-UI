import { SCBackButton, SCDivider, SCUserAvatar } from '@/components/shared'
import { IMAGES } from '@/constants'
import { Typography, Stack } from '@mui/material'
import React from 'react'
import { STActivityContainer, STActivityText, STPeriodText } from './styles'

const NotificationsData = [
  {
    id: 1,
    avatar: IMAGES.avatarPlaceholder,
    activity: 'Sophie requested your book.',
    time: ' 10 mins ago',
  },
  {
    id: 2,
    avatar: IMAGES.avatarPlaceholder,
    activity: 'Sophie requested your book.',
    time: ' 10 mins ago',
  },
  {
    id: 3,
    avatar: IMAGES.avatarPlaceholder,
    activity: 'Sophie requested your book.',
    time: ' 10 mins ago',
  },
]

const NotificationScreenView = () => {
  return (
    <>
      <SCBackButton />
      <Typography component="p" variant="h1" sx={STPeriodText}>
        This Week
      </Typography>
      {NotificationsData.map((notification) => (
        <React.Fragment key={notification.id}>
          <Stack sx={STActivityContainer}>
            <SCUserAvatar avatar={notification.avatar} size="sm" />
            <Typography component="p" variant="subtitle1" sx={STActivityText}>
              {notification.activity}
            </Typography>
            <Typography
              component="p"
              variant="subtitle2"
              color="text.secondary"
            >
              {notification.time}
            </Typography>
          </Stack>
          <SCDivider />
        </React.Fragment>
      ))}
    </>
  )
}

export default NotificationScreenView
