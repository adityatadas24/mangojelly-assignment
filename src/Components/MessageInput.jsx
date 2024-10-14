import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage, receiveMessage } from '../features/ChatSlice';
import { Box, TextField, Button } from '@mui/material';

const MessageInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (input.trim()) {
      dispatch(sendMessage(input));
      setInput('');

      setTimeout(() => {
        dispatch(receiveMessage('This is a Bot reply!'));
      }, 1000);
    }
  };

  return (
    <Box sx={{ display: 'flex', padding: 2 }}>
      <TextField
        fullWidth
        label="Type your message"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <Button variant="contained" color="primary" onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
