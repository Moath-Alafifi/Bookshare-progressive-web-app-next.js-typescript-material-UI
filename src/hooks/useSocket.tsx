import { AuthContext } from '@/contexts/AuthContext'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { io } from 'Socket.io-client'

const useSocket = () => {
  const [socket, setSocket] = useState(null)
  const [conversations, setConversations] = useState([])
  const { user } = useContext(AuthContext)
  
  useEffect(() => {
    const socketInitializer  = async () => {
      await fetch('/api/socket')
      const socketIo = io()
      setSocket(socketIo)
    }
    socketInitializer ()

    const cleanup = () => {
      socket?.disconnect()
    }
    return cleanup
  }, [])
 
  useEffect(() => {
    socket?.emit('addUser', user?._id )
    const getConversations = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/conversation/${user?._id}`
        )
        setConversations(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getConversations()
  }, [user?._id])


  return { socket, conversations }
}

export default useSocket
