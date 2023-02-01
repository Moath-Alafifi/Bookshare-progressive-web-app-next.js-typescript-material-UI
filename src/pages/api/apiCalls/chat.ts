import axios from 'axios'

export const getConversation = async () => {
  const { data: conversation } = await axios.get(
    'http://localhost:3000/api/conversation'
  )
  return conversation
}
