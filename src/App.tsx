import logo from './logo.svg';
import './App.css';
import React from 'react'
import {ComponenteConBordeWithInnerSize} from './hoc/ComponenteConBorde'

function App() {
  return (
    <div className="App">
      <ComponenteConBordeWithInnerSize  />
    </div>
  );
}

export default App;
