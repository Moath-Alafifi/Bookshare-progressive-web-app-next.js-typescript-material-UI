import { AuthContext } from '@/contexts/AuthContext'
 
import { useContext, useEffect, useState } from 'react'
import { io } from 'Socket.io-client'

const useSocket = () => {
  const [socket, setSocket] = useState(null)
 
  
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
 



  return { socket  }
}

export default useSocket
