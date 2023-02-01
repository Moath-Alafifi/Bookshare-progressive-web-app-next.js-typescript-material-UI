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
  const [newMessage, setNewMessage] = useState('')
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const [currentChat, setCurrentChat] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])

  const router = useRouter()
  const { user } = useContext(AuthContext)
  const socket = useSocket()

  useEffect(() => {
    socket?.emit('addUser', user._id)
    socket?.on('getUsers', (users) => {
      console.log(users.filter((f) => f.userId === user?._id))
      setOnlineUsers(users.filter((f) => f.userId === user?._id))
    })
  }, [user])
  useEffect(() => {
   
    socket?.on('getMessage',(data)=>{
      setArrivalMessage(data);
    })
  }, [])
 console.log(arrivalMessage)
  const onSubmitHandler = async (e: any) => {
    e.preventDefault()
    
      const message = {
        sender: user._id,
        text: newMessage,
        conversationId: currentChat._id,
      };
  
      const receiverId = currentChat.members.find(
        (member) => member !== user._id
      );
  
      socket.emit("sendMessage", {
        senderId: user._id,
        receiverId,
        text: newMessage,
      });
  
      try {
        const res = await axios.post("/messages", message);
        setMessages([...messages, res.data]);
        setNewMessage("");
      } catch (err) {
        console.log(err);
      }
    };
  
  const messageHandler = (e) => {
    if (e.target.value === '') return
    setNewMessage(e.target.value)
    if (e.keyCode === 13) {
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
          {messages.map((msg, i) => (
            <ListItem
              key={i}
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
              {msg}
            </ListItem>
          ))}
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
