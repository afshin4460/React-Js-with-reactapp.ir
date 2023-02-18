import React, {useState} from 'react';
import './App.css';
//import Website from './components/webstie';
//import Counter from './components/counter/counter';

function App() {

  /* const handleClick = (name) => { //for Website component
    alert('Hi ' + name)
  }; */
  const actionLink = (e) => {
    e.preventDefault();
    alert('clicked');
  };
  const [isToggleOn, setIsToggleOn] = useState(true);
  const handleToggleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div className='App'>
      {/* <Website name='Afshin' age={28} click={() => handleClick('Afshin')} />
      <Website name='shiva' age={27} click={() => handleClick('Shiva')} /> */}
      {/* <Counter /> */}
      <a href="https://reactapp.ir" onClick={actionLink}>click me</a>
      <button onClick={handleToggleClick}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default App;
