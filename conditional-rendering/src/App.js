import React, { Component } from 'react';

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

class LoginControl extends Component {

  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    }
  }

  handleLoggedInclick = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  handleLoggedOutclick = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  
  render() {
    let isLoggedIn = this.state.isLoggedIn;
    let button;
  
    if(isLoggedIn)
    {
      button = <LoginButton onClick={this.handleLoggedInclick} />
    }
    else
    {
      button = <LogoutButton onClick={this.handleLoggedOutclick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    );
  }
}

function Greeting(props) {
  let message = "";

  if(props.isLoggedIn)
  {
    message = "Logged Out";
  }
  else
  {
    message = "Logged In";
  }

  return (
    <h2>Hello Dibyendu you are {message}</h2>
  );
}

function App() {
  return (
    <LoginControl  />
  );
}

export default App;
