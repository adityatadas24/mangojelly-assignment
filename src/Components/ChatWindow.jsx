import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    <Box id="chat-window" sx={{ maxHeight: 400, overflowY: 'scroll', padding: 2 }}>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${msg.user}: ${msg.text}`}
              secondary={msg.timestamp}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatWindow;
