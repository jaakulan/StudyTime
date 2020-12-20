import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Starter from './Pages/starter'

function App() {
  return (
    <div className="app-routes">
      <BrowserRouter>  
        <Switch>
          <Route path="/" component={Starter} />
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
