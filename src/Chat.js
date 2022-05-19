import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ChatInput from './ChatInput'
import { useSelector } from 'react-redux'
import { useDocument, useCollection } from 'react-firebase-hooks/firestore'
import { db } from './firebase'
import { doc, query, orderBy, collection, getDoc } from 'firebase/firestore'
import Message from './Message'
import { useUserContext } from './user_context'

const Chat = () => {
  const { myUser } = useUserContext()
  const chatRef = useRef(null)
  const { roomID } = useSelector((store) => store.app)
  const documentRef = doc(db, 'rooms', roomID)
  const colRef = collection(documentRef, 'messages')
  const q = query(colRef, orderBy('timestamp', 'asc'))
  const [messages, loading] = useCollection(q)

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [roomID, loading, messages])

  return (
    <ChatContainer>
      {roomID && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#Talk to your colleagues</strong>
                <StarBorderOutlinedIcon />
              </h4>
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>
          <ChatMessages>
            {messages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data()
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={myUser.name}
                  userImage={myUser.picture}
                />
              )
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput channelID={roomID} />
        </>
      )}
    </ChatContainer>
  )
}

export default Chat

const ChatBottom = styled.div`
  padding-bottom: 200px;
`

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  > h4 {
    display: flex;
    align-items: center;
    text-transform: lowercase;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`

const ChatMessages = styled.div``
