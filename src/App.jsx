import React, {useState} from 'react';
import './App.css';
//import Website from './components/webstie';
//import Counter from './components/counter/counter';
//import Greeting from './components/greeting';
//import MailBox from './components/mailBox';
//import NumberList from './components/numberList';
import NameForm from './components/forms/nameForm';

function App() {

  /* const handleClick = (name) => { //for Website component
    alert('Hi ' + name)
  }; */
  /* const actionLink = (e) => {
    e.preventDefault();
    alert('clicked');
  };
  const [isToggleOn, setIsToggleOn] = useState(true);
  const handleToggleClick = () => {
    setIsToggleOn(!isToggleOn);
  }; */
  /* const [isLogedIn, setIsLogedIn] = useState(true);
  const handleLoginClick = () => {
    setIsLogedIn(!isLogedIn);
  }; */
  /* const messages = ['React', 'RReact', 'RRReact']; */

  return (
    <div className='App'>
      {/* <Website name='Afshin' age={28} click={() => handleClick('Afshin')} />
      <Website name='shiva' age={27} click={() => handleClick('Shiva')} /> */}
      {/* <Counter /> */}
      {/* <a href="https://reactapp.ir" onClick={actionLink}>click me</a>
      <button onClick={handleToggleClick}>{isToggleOn ? 'ON' : 'OFF'}</button> */}
      {/* <Greeting isLoggedIn={isLogedIn} />
      <button onClick={handleLoginClick}>{isLogedIn ? 'LogOut' : 'LogIn'}</button> */}
      {/* <MailBox unreadMessage={messages} /> */}
      {/* <NumberList /> */}
      <NameForm />
    </div>
  );
}

export default App;
