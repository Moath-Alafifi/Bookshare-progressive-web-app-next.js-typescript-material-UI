import { SCSvgIcons } from '@/components/shared'
import { IMAGES, Info } from '@/constants'
import { AuthContext } from '@/contexts/AuthContext'
import useGetConversation from '@/hooks/useGetConversation'
import useGetUser from '@/hooks/useGetUser'
import useSocket from '@/hooks/useSocket'
import { getConversation } from '@/pages/api/apiCalls/chat'

import {
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListSubheader,
  Paper,
  Stack,
} from '@mui/material'
import axios from 'axios'

import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

const Message = () => {
  const [messages, setMessages] = useState([])

  const [socketId, setSocketId] = useState('')
  const [newMessage, setNewMessage] = useState(null)
 

  const { user } = useContext(AuthContext)
  const { socket, conversations } = useSocket()

  socket?.on('connect', () => {
 
    setSocketId(socket.id)
  })
 
  
   socket?.on('getMessage', ({ senderId, text }) => {
     setNewMessage({ senderId, text })
   })
 
 
  const onSubmitHandler = async (e: any) => {
    e.preventDefault()
  }

 
 
  const messageHandler = (e) => {
    if (e.target.value === '') return
    
    if (e.keyCode === 13) {
      const reserverId   = conversations.map((m) => m.members.find(m=> m !== user._id) )
      console.log(reserverId)
        socket?.emit('sendMessage', {
          senderId: user?._id,
          text: e.target.value,
          reserverId:reserverId[0]  
        })
      e.target.value = null
    }
  }
 
  return (
    <>
      <Stack sx={{ flexDirection: 'column', width: '100%', height: 350 }}>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            height: '100%',
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          <ListSubheader>{socketId}</ListSubheader>
        
            <ListItem
            
              sx={{
                fontSize: 13,
                backgroundColor: 'primary.light',
                borderRadius: 2,
                maxWidth: '75%',
                width: 'fit-content',
                p: 1,
                m: '4px 16px 4px 16px',
              }}
            >
             {newMessage?.text}  ////
             {newMessage?.senderId}
            </ListItem>
  
        </List>

        <Paper
          onSubmit={onSubmitHandler}
          component="form"
          variant="outlined"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            height: 42,
            width: '100%',
          }}
        >
          <InputBase
            type="text"
            onKeyDown={messageHandler}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Message..."
            inputProps={{ 'aria-label': 'Message...' }}
          />

          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SCSvgIcons icon={Info} />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: '10px' }}
            aria-label="directions"
          >
            <SCSvgIcons icon={Info} />
          </IconButton>
        </Paper>
      </Stack>
    </>
  )
}

export default Message
