import React from 'react';
import './App.css';
import Dashboard from './components/dashboard.tsx'
import location from './data/country-list'

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
