import { createContext, useEffect, useReducer } from 'react'
import AuthReducer from './AuthReducer'
let getUser

if (typeof window !== 'undefined') {
  getUser = JSON.parse(localStorage.getItem('user'))
}
const INITIAL_STATE = {
  user: getUser || null,
  isLoading: false,
  isError: false,
  dispatch: undefined,
}

export const AuthContext = createContext(INITIAL_STATE)

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
  }, [state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        isError: state.isError,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
