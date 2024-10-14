import React from 'react';
import ChatWindow from './Components/ChatWindow';
import MessageInput from './Components/MessageInput';
import { Box, Typography } from '@mui/material';

function App() {
  return (
    <>
      <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Chat Interface
        </Typography>
        <ChatWindow />
        <MessageInput />
      </Box>
    </>
  );
}

export default App;