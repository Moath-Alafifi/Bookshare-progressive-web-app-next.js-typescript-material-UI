import axios from 'axios'

export const getConversation = async (userId: any) => {
  const { data: conversation } = await axios.get(
    'http://localhost:3000/api/conversation/' + userId
  )
  return conversation
}

export const addConversation = async (data) => {
  const { data: conversation } = await axios.post(
    'http://localhost:3000/api/conversation',
    data
  )
  return conversation
}
