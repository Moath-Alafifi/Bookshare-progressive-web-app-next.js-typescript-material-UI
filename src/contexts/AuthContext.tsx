import { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
  user:   {
    _id: "63d3f80dfa02327b2375445d",
    userName: "moath",
    email: "moath@",
    createdAt: "2023-01-27T16:13:01.775Z",
    updatedAt: "2023-01-27T16:13:01.775Z",
    __v: 0
},
  isLoading: false,
  isError: false,
  dispatch: undefined,
}
export const AuthContext = createContext(INITIAL_STATE)

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
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
