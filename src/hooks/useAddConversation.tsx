import { addConversation } from '@/pages/api/apiCalls/conversation'
 
import { useQuery } from 'react-query'
const useAddConversation = () => {
  const  users = useQuery('addConversation', addConversation)
  return users
}

export default useAddConversation
