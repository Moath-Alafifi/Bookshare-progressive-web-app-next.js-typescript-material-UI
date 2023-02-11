import { Stack, Typography, Divider, Badge } from '@mui/material'
import { STContainer, STInviteFriend, STTitle } from './styles'
 
import { IMAGES, ROUTES } from '@/constants'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'

import useSocket from '@/hooks/useSocket'
import axios from 'axios'
import { AuthContext } from '@/contexts/AuthContext'
import Conversation from './ChatMembers.tsx'
import ChatMembers from './ChatMembers.tsx'
 
const ChatView = () => {
  const { user } = useContext(AuthContext)
  const { conversations,socket } = useSocket()
  // useEffect(()=>{

  //   socket?.emit('addUser', user?._id )
  // },[user?._id])
  return (
    <>
      <Typography component="p" variant="h2" sx={STTitle}>
        Chat History
      </Typography>

      {conversations.map((c) => (
        <React.Fragment key={c._id}>
          <Stack sx={STContainer}>
            <ChatMembers conversation={c} currentUser={user} />
          </Stack>
          {conversations[conversations.length - 1] !== c && <Divider />}
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
