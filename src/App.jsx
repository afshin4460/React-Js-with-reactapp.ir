import React from 'react';
import './App.css';
import Website from './components/webstie';

function App() {

  const handleClick = (name) => {
    alert('Hi ' + name)
  };

  return (
    <div className='App'>
      <Website name='Afshin' age={28} click={() => handleClick('Afshin')} />
      <Website name='shiva' age={27} click={() => handleClick('Shiva')} />
    </div>
  );
}

export default App;
