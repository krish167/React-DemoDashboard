import React from 'react';
import './App.css';
import Dashboard from './components/dashboard'

class App extends React.Component {

  render() {
    return (
      <div className="formContainer">
        <Dashboard></Dashboard>
      </div>
    )
  }
}

export default App;
