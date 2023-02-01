import { useRouter } from 'next/router'
import React from 'react'
import LoginForm from '../components/pages/login'
import { useSE } from '../SEProvider'


function Login() {
  const se = useSE();
  const router = useRouter()
  const authenticated = se.state.isAuthenticated

  if(authenticated){
    router.push(`/products?name=${name}`)
  }

  return (
    <>
      <LoginForm></LoginForm>
    </>
  )
}

export default Login
