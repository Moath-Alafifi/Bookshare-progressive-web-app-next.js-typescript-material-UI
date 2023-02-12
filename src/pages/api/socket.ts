import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io
    let users = []

    const addUser = (userId, socketId) => {
      !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId })
    }

    const getUser = (userId) => {
      return users.find((user) => user.userId === userId)
    }

    io.on('connection', (socket: any) => {
      //take userId and socketId from user
      socket.on('addUser', (userId) => {
        addUser(userId, socket?.id)
        io.emit('getUsers', users)
      })
      socket.on('sendMessage', ({ senderId, text ,  reserverId }) => {
       let reserver = getUser(reserverId)
        socket.to(reserver?.socketId).emit('getMessage', {
          senderId,
          text,

        })
        console.log(users)
       
      })
    })
  }
  res.end()
}

export default SocketHandler
