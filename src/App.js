import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app-routes">
      <BrowserRouter>  
        <Switch>
          <p>Hello</p>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
