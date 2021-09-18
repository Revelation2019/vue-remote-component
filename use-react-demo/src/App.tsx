import React, { useEffect } from 'react';
import './App.css';
import RemoteBaseComponent from './RemoteBaseComponent';

function App() {

  const handleClick = () => {
    console.log('click')
  }

  return (
    <div className="App">
      <RemoteBaseComponent type="button" text="提交" handleClick={handleClick}></RemoteBaseComponent>
    </div>
  );
}

export default App;
