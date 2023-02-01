import axios from 'axios'

export const addConversation = async (data) => {
  const { data: conversation } = await axios.post(
    'http://localhost:3000/api/conversation',data
  )
  return conversation
}
