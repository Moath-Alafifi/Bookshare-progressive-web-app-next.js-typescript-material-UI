import { Stack, Typography, Divider, Badge } from '@mui/material'
import {
  STActiveBadge,
  STContainer,
  STInActiveBadge,
  STInviteFriend,
  STMessageText,
  STTime,
  STTitle,
} from './styles'
import { SCUserAvatar } from '@/components/shared'
import { IMAGES, ROUTES } from '@/constants'
import React from 'react'
import Link from 'next/link'

const ChatData = [
  {
    id: 1,
    verb: 'followed',
    avatar: IMAGES.avatarPlaceholder,
    userName: 'Maria Benson ',
    lastMessage: 'Speaking of which, Peter really…',
    time: '10:10',
  },
  {
    id: 2,
    avatar: IMAGES.avatarPlaceholder,
    userName: 'Maria Benson ',
    lastMessage: 'Speaking of which, Peter really…',
    date: new Date().toDateString().toString(),
    time: '10:10',
  },
  {
    id: 3,
    avatar: IMAGES.avatarPlaceholder,
    cover: IMAGES.bookCoverPlaceholder,
    userName: 'Maria Benson ',
    lastMessage:
      'Speaking of whiching of which, Ping of which, P, Peter really ',
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
            <Link href={`${ROUTES.chat.UserChat}/${user.id}`}>
              <Badge
                sx={true ? STActiveBadge : STInActiveBadge}
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <SCUserAvatar avatar={user.avatar} size="md" />
              </Badge>
            </Link>

            <Stack sx={{ flexDirection: 'column', minWidth: 0 }} gap={1}>
              <Typography component="p" variant="subtitle1">
                {user.userName}
              </Typography>
              <Typography component="p" sx={STMessageText} variant="subtitle2">
                {user.lastMessage}
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
          <Typography variant="subtitle1" component="p">
            Invite a friend in your BookHood and earn
            <Typography
              sx={{ pl: 1, color: 'primary.main' }}
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
