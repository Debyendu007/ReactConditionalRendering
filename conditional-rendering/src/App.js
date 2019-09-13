import React, { useState } from 'react';
import PanelView from './Penel/Panel'

function LoginButton(props){
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function LoginControl()
{
  const [isLogIn, setLoginStatus] = useState(false);

  function handleLogInClick() {
    setLoginStatus(true);
  }

  function handleLogOutClick() {
    setLoginStatus(false);
  }

  let button;

  if(isLogIn)
  {
    button = <LogoutButton onClick={handleLogOutClick} />
  }
  else
  {
    button = <LoginButton onClick={handleLogInClick} />
  }

  return (
    <div>
      <Greeting isLogIn={isLogIn}/>
      {button}
    </div>
  );
}

function Greeting(props) {
  let message = "";

  if(props.isLogIn)
  {
    message = "Logged In";
  }
  else
  {
    message = "Logged Out";
  }

  return (
    <h2>Hello Dibyendu you are {message}</h2>
  );
}

function App() {
  return (
    <React.Fragment>
      <LoginControl />
      <br /><br />
      <PanelView />
    </React.Fragment>
  );
}

export default App;