import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'
import Chat from './Chat'

const HomePage = () => {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
        <Chat />
      </AppBody>
    </>
  )
}

export default HomePage

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
