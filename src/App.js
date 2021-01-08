import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Starter from './Pages/Starter';
import Keywords from './Pages/Keywords';
import GamingLD from './Pages/GamingLD';
import SocialLD from './Pages/SocialLD';
import StreamLD from './Pages/StreamLD';
import TotalLD from './Pages/TotalLD';
import Websites from './Pages/Websites';
import Blocked from './Pages/Blocked'; 

function App() {
  return (
    <div className="app-routes">
      <BrowserRouter>
        <Switch>
          <Route path="/websites" component={Websites} />
          <Route path="/totalLD" component={TotalLD} />
          <Route path="/streamLD" component={StreamLD} />
          <Route path="/keywords" component={Keywords} />
          <Route path="/gamingLD" component={GamingLD} />
          <Route path="/socialLD" component={SocialLD} />
          <Route path="/blocked" component={Blocked} />
          <Route path="/" component={Starter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
