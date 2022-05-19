import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import { useUserContext } from './user_context'

const Header = () => {
  const { myUser, logout } = useUserContext()
  return (
    <HeaderContainer>
      <HeaderNav>
        {/* Header Left */}
        <HeaderLeft>
          <HeaderAvatar
            src={myUser.picture}
            onClick={() => logout({ returnTo: window.location.origin })}
          />
          <AccessTimeIcon className='time' />
        </HeaderLeft>
        {/* Header Center */}
        <HeaderCenter>
          <SearchIcon />
          <input type='text' placeholder='Search Slack...' />
        </HeaderCenter>
        {/* Header Right */}
        <HeaderRight>
          <HelpOutlinedIcon />
        </HeaderRight>
      </HeaderNav>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px 0;
  background: var(--slack-color);
`

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: auto;
`

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  .time {
    margin-left: auto;
    margin-right: 30px;
    color: white;
  }
`

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

const HeaderCenter = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;

  input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline-width: 0;
    color: white;
  }
`

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  color: white;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`
