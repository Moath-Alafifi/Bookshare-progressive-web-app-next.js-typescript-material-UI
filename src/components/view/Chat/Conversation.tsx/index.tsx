import { SCUserAvatar } from '@/components/shared'
import { ROUTES } from '@/constants'
import { Badge, Stack, Typography } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { STActiveBadge, STInActiveBadge, STMessageText, STTime } from './styles'
 

const Conversation = ({conversation,currentUser}:any) => {
    const [conversationMembers, setConversationMembers] = useState(null);
    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);
 
        const getUser = async () => {
          try {
            const res = await axios("http://localhost:3000/api/users/" + friendId);
            setConversationMembers(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getUser();
      }, [currentUser, conversation])
 
  return ( 
    <>
    {conversationMembers?.map(friend=> 

    <Link href={`${ROUTES.chat.UserChat}/${1}`}>
  <Badge
    sx={true ? STActiveBadge : STInActiveBadge}
    overlap="circular"
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    variant="dot"
  >
    <SCUserAvatar avatar={''} size="md" />
  </Badge>

<Stack sx={{ flexDirection: 'column', minWidth: 0 }} gap={1}>
  <Typography component="p" variant="subtitle1">
    {friend?.userName}
  </Typography>
  <Typography component="p" sx={STMessageText} variant="subtitle2">
    {'user.lastMessage'}
  </Typography>
</Stack>

<Typography variant="subtitle1" component="p" sx={STTime}>
  {'user.time'}
</Typography>
</Link>
    )}
    </>
  )
}

export default Conversation