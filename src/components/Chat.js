// src/components/Chat.js
import React, { useState } from 'react';
import { sendMessage } from '../services/api';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendMessage({ content: message });
      setChatLog([...chatLog, response.data]);
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Secure Messaging</h2>
      <div className="chat-log">
        {chatLog.map((msg, index) => (
          <div key={index}>
            <p><strong>{msg.sender.username}</strong>: {msg.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} placeholder="Type a message..." required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
