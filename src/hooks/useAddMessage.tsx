import { addMessage } from '@/pages/api/apiCalls/message'

import { useQuery } from 'react-query'
const useAddMessage = () => {
  const users = useQuery('addConversation', addMessage)
  return users
}

export default useAddMessage
