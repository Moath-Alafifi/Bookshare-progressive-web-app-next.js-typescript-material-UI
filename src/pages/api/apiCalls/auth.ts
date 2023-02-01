import axios from 'axios'

export const getAuth = async () => {
  const { data: user } = await axios.get(
    'http://localhost:3000/api/authUser'
  )
  return user
}
