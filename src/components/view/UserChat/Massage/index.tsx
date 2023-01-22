import { SCSvgIcons } from '@/components/shared'
import { Info } from '@/constants'
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
import React, { useEffect, useRef, useState } from 'react'
import { io } from 'Socket.io-client'
let socket

const Massage = () => {
  const [massage, setMassage] = useState([])

  useEffect(() => {
    socketInitializer()
  }, [])
  const socketInitializer = async () => {
    await fetch('/api/socket')
    socket = io()
 
    socket.on('connect', () => {
      setMassage([`connected to ${socket.id}`])
    })
    socket.on('update-massage', (msg: React.SetStateAction<any[]>) => {
      setMassage(msg)
    })
  }
  const onChangeHandler = (e: any) => {
    if (e.keyCode === 13) {
      socket.emit('massage-change', [...massage, e.target.value])
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
          <ListSubheader>{`I'm sticky  `}</ListSubheader>
          {massage.map((mag, i) => (
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
              {mag}
            </ListItem>
          ))}
        </List>

        <Paper
          onSubmit={(e) => e.preventDefault()}
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
            onKeyDown={onChangeHandler}
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

export default Massage
