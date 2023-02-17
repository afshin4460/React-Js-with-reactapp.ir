import React from 'react';
import './App.css';
//import Website from './components/webstie';
import Counter from './components/counter/counter';

function App() {

  /* const handleClick = (name) => {
    alert('Hi ' + name)
  }; */

  return (
    <div className='App'>
      {/* <Website name='Afshin' age={28} click={() => handleClick('Afshin')} />
      <Website name='shiva' age={27} click={() => handleClick('Shiva')} /> */}
      <Counter />
    </div>
  );
}

export default App;
