import { Button } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from './firebase'
import { doc, addDoc, serverTimestamp, collection } from 'firebase/firestore'

const ChatInput = ({ channelID }) => {
  const [input, setInput] = useState('')
  const sendMessage = (e) => {
    e.preventDefault()

    if (!channelID) return
    const documentReference = doc(db, 'rooms', channelID)
    const colRef = collection(documentReference, 'messages')

    if (input) {
      addDoc(colRef, {
        message: input,
        timestamp: serverTimestamp(),
        user: 'Somebody Else',
        userImage: null,
      }).then(() => setInput(''))
    }
  }

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder='Send your message...'
        />
        <Button hidden type='sumbit' onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;

    input {
      position: fixed;
      bottom: 30px;
      width: 60%;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
      outline-width: 0;
    }

    button {
      display: none !important;
    }
  }
`
