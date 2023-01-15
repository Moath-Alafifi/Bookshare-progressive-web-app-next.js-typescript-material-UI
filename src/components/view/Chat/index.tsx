import { Stack, Typography, Divider, Badge } from '@mui/material'
import {
  STActiveBadge,
  STContainer,
  STInActiveBadge,
  STInviteFriend,
  STTime,
  STTitle,
} from './styles'
import { SCUserAvatar } from '@/components/shared'
import { IMAGES } from '@/constants'
import React from 'react'

const ChatData = [
  {
    id: 1,
    verb: 'followed',
    avatar: IMAGES.avatarPlaceholder,
    userName: 'Maria Benson ',
    readingLevel: 'Novice Reader',
    time: '10:10',
  },
  {
    id: 2,
    avatar: IMAGES.avatarPlaceholder,
    userName: 'Maria Benson ',
    readingLevel: 'Novice Reader',
    date: new Date().toDateString().toString(),
    time: '10:10',
  },
  {
    id: 3,
    avatar: IMAGES.avatarPlaceholder,
    cover: IMAGES.bookCoverPlaceholder,
    userName: 'Maria Benson ',
    readingLevel: 'Novice Reader',
    time: '10:10',
  },
]
const ChatView = () => {
  return (
    <>
      <Typography component="p" variant="h2" sx={STTitle}>
        Chat History
      </Typography>

      {ChatData.map((user) => (
        <React.Fragment key={user.id}>
          <Stack sx={STContainer}>
            <Badge
              sx={true ? STActiveBadge : STInActiveBadge}
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <SCUserAvatar avatar={user.avatar} size="md" />
            </Badge>

            <Stack
              sx={{ flexDirection: 'column' }}
              gap={0.5}
              color="primary.main"
            >
              <Typography component="p" variant="subtitle1">
                {user.userName}
              </Typography>
              <Typography component="p" variant="subtitle1">
                {user.readingLevel}
              </Typography>
            </Stack>

            <Typography variant="subtitle1" component="p" sx={STTime}>
              {user.time}
            </Typography>
          </Stack>
          {ChatData[ChatData.length - 1] !== user && <Divider />}
        </React.Fragment>
      ))}
      <Stack justifyContent="center">
        <Stack sx={STInviteFriend}>
          <Typography
            sx={{ color: 'primary.main' }}
            variant="subtitle1"
            component="p"
          >
            Invite a friend in your BookHood and earn
            <Typography
              sx={{ color: '#0288d1', pl: 1 }}
              variant="subtitle1"
              component="span"
            >
              credits
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default ChatView
