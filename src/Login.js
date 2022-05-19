import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { useUserContext } from './user_context'

const Login = () => {
  const { loginWithRedirect } = useUserContext()
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png'
          alt='slack-logo'
        />
      </LoginInnerContainer>
      <Button variant='outlined' onClick={loginWithRedirect}>
        Login with Google
      </Button>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  background-color: var(--slack-color);
  height: 100vh;
  display: grid;
  place-items: center;

  > button {
    margin-bottom: 80px;
  }
`

const LoginInnerContainer = styled.div`
  > img {
    object-fit: contain;
    height: 40vh;
  }
`
