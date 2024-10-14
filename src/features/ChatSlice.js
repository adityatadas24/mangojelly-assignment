import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  messages: [],
  currentUser: 'User',
};

const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        text: action.payload,
        user: state.currentUser,
        timestamp: new Date().toLocaleTimeString(),
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        text: action.payload,
        user: 'Bot',
        timestamp: new Date().toLocaleTimeString(),
      });
    },
  },
});

export const { sendMessage, receiveMessage } = ChatSlice.actions;

export default ChatSlice.reducer;
