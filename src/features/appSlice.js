import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  roomID: '5ousmTLi9yluJZ4ZEgCI',
  user: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomID = action.payload
    },
    authUser: (state, action) => {
      state.userInfo = action.payload
    },
    authError: (state, action) => (state.error = action.payload),
  },
})

export const { enterRoom, authUser, authError } = appSlice.actions

export default appSlice.reducer
