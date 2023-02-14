import { Stack, Typography, Divider } from '@mui/material'
import { STContainer, STInviteFriend, STTitle } from './styles'
import React, { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import ChatMembers from './ChatMembers.tsx'
import useGetConversation from '@/hooks/useGetConversation'

const ChatView = () => {
  const { user } = useContext(AuthContext)

  const conversations = useGetConversation(user?._id)
 
  return (
    <>
      <Typography component="p" variant="h2" sx={STTitle}>
        Chat History
      </Typography>

      {conversations?.data?.map((c) => (
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
