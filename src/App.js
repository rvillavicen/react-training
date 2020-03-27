import React from 'react';
import NavView from './containers/Nav';
import Messages from './containers/Messages';
import messages from './data/messages.json'

function App() {
  if(!localStorage.getItem('messages')) {
    localStorage.setItem('messages', JSON.stringify(messages))
  }
  
  return (
    <div style={{ display: 'flex' }}>
      <NavView />
      <Messages />
    </div>
  );
}

export default App;
