
import React from 'react';
import './App.css';

import ClassProps from './ClassProps';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClassProps name='Hello World!1' place='place1'><p>hiii</p></ClassProps>
        <ClassProps name='Hello World!2' place='place2'><button>Click</button></ClassProps>
        
        <ClassProps name='Hello World!2' place='place3'/>
        
        
      </div>
    );

  }
  
}

export default App;
