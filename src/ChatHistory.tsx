import * as React from 'react';
import { Message } from './store/chat/types';

interface ChatHistoryProps {
  messages: Message[];
  deleteMessage: (timestamp: number) => void;
}

const ChatHistory: React.SFC<ChatHistoryProps> = ({ messages, deleteMessage }) => {
  const deleteMS = timestamp => {
    deleteMessage(timestamp);
  };

  return (
    <div className="chat-history">
      {messages.map(message => (
        <div className="message-item" key={message.timestamp}>
          <h3>From: {message.user}</h3>
          <p>{message.message}</p>
          <button onClick={() => deleteMS(message.timestamp)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
