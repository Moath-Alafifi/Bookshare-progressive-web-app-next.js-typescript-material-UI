import { AuthContext } from '@/contexts/AuthContext'
import { getConversation } from '@/pages/api/apiCalls/conversations'
import { useContext } from 'react'
import { useQuery } from 'react-query'

const useGetConversation = (userId) => {
  const conversations = useQuery(['getConversation', userId], () =>
    getConversation(userId)
  )
  return conversations as unknown as any 
}

export default useGetConversation
