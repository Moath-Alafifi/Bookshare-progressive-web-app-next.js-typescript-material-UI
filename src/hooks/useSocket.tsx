import { useEffect, useState } from 'react'
import { io } from 'Socket.io-client'

const useSocket = () => {
  const [socket, setSocket] = useState(null)
  useEffect(() => {
    fetch('/api/socket').finally(() => {
      const socketIo = io()
      socketIo.on('connect', () => {
        console.log('connect')
      })
      socketIo.on('disconnect', () => {
        console.log('disconnect')
      })
      setSocket(socketIo)
    })
    const cleanup = () => {
      socket?.disconnect()
    }
    return cleanup
  }, [])

  return socket
}

export default useSocket
