import { Server } from 'Socket.IO'
import { instrument } from '@socket.io/admin-ui'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)

    res.socket.server.io = io
    io.on('connection', (socket) => {
      socket.on('massage-change', (msg) => {
        io.emit('update-massage', msg)
      })
    })

    // instrument(io, { auth: false })
  }
  res.end()
}

export default SocketHandler
