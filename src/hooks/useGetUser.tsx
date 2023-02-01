import { getUsers } from '@/pages/api/apiCalls/users'
import { useQuery } from 'react-query'
const useGetUser = () => {
  const  users = useQuery('getUser', getUsers)
  return users
}

export default useGetUser
