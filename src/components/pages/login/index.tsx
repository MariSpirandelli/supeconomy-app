import React from 'react'
import Button from '@material-ui/core/Button'
import styles from './login.module.scss'
import { useSE } from '../../../SEProvider/SEProvider'
import { Input, InputAdornment, InputLabel, TextField } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { AccountCircle } from '@material-ui/icons'

export type LoginInputs = {
  cpf: string
  password: string
}

interface State {
  cpf: string
  password: string
  showPassword: boolean
}

export default function LoginForm() {
  const se = useSE()

  const [values, setValues] = React.useState<State>({
    cpf: '',
    password: '',
    showPassword: false,
  })

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault()
    se.actions.login(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiIwMTYuMDM0LjIyNi0wOSIsImNyZWF0ZWRBdCI6IjIwMjAtMDEtMDVUMjM6NDM6MjUuNDkyWiIsInBvaW50IjpudWxsLCJob21lQWRkcmVzcyI6bnVsbCwid29ya0FkZHJlc3MiOm51bGwsIm5hbWUiOiJNYXJpYW5uYSIsImlhdCI6MTYwMDYyMzMzOCwiZXhwIjoxNjAyMzEwMzYxMzcyfQ.zrfTW-6jCZre_jt832xp6cz7CegNRn2drTGqtsIZCVU'
    )
  }

  return (
    <div className={styles.loginbg}>
      <h3 className={styles.welcomeText}>Bem vindo!</h3>
      <div className={styles.loginLogo}>
        <img src='/supeconomy.png' />
      </div>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <TextField
          id='standard-required'
          label='Cpf'
          helperText='somente numeros'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
        <Input
          id='standard-adornment-password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          startAdornment={
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button type='submit' variant='contained' color='primary'>
          Login
        </Button>
      </form>
    </div>
  )
}
