import axios from 'axios'

export const addMessage = async (data) => {
  const { data: message } = await axios.post(
    'http://localhost:3000/api/message',data
  )
  return message
}
