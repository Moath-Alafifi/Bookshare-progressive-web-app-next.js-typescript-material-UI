 
import { getConversation } from '@/pages/api/utils/chat'
import { useQuery } from 'react-query'
const useGetConversation = () => {
  const getConversations = useQuery('getConversation', getConversation)
  return getConversations
}

export default useGetConversation
