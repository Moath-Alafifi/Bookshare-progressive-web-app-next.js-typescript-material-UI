import axios from 'axios'

export const getUsers = async () => {
  const { data: users } = await axios.get(
    'http://localhost:3000/api/users'
  )
  return users
}
