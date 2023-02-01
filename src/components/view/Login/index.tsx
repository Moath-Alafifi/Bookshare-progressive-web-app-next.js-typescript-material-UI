import { SCButton } from '@/components/shared'
import { AuthContext } from '@/contexts/AuthContext'
import { loginCall } from '@/pages/api/apiCalls/login'
import { FormControl, Input, InputLabel, Paper, TextField } from '@mui/material'
import React, { useContext, useRef } from 'react'

const LoginView = () => {
  const { isLoading, dispatch } = useContext(AuthContext)
  const email = useRef(null)
  const password = useRef(null)
  const onSubmitHandler = (e) => {
    e.preventDefault()
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    )
  }
  return (
    <Paper
      onSubmit={onSubmitHandler}
      component="form"
      elevation={0}
      sx={{
        p: '2px 4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        backgroundColor: 'background.default',
        height: '100vh',
        width: '100%',
      }}
    >
      <TextField
        fullWidth
        label="Enter email"
        type="email"
        placeholder="email"
        inputRef={email}
        variant="standard"
      />
      <TextField
        fullWidth
        label="Enter password"
        type="password"
        placeholder="password"
        inputRef={password}
        variant="standard"
      />

      <SCButton
        type="submit"
        buttonSize="xl"
        text="Log in"
        styles={{ color: '#fff' }}
      />
    </Paper>
  )
}

export default LoginView
