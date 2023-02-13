import { getConversation } from '@/pages/api/apiCalls/conversations'
import { useQuery } from 'react-query'

const useGetConversation = () => {
  const conversations = useQuery('getConversation', getConversation)
  return conversations as any
}

export default useGetConversation
