import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Chat from './components/Chat';

function App() {
  return (
    <div className="container">
      <Title />
      <br />
      <Chat />
      <br />
      <Form />
    </div>
  );
}

export default App;
