import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Starter from './Pages/Starter';
import Keywords from './Pages/Keywords';

function App() {
  return (
    <div className="app-routes">
      <BrowserRouter>
        <Switch>
          <Route path="/keywords" component={Keywords} />
          <Route path="/" component={Starter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
