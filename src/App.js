import React from 'react';
import NavView from './containers/Nav';
import Messages from './containers/Messages';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <NavView />
      <Messages />
    </div>
  );
}

export default App;
