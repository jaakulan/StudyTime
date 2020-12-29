import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Starter from './Pages/Starter';
import Keywords from './Pages/Keywords';
import GamingLD from './Pages/GamingLD';
import SocialLD from './Pages/SocialLD';
import StreamLD from './Pages/StreamLD';
import TotalLD from './Pages/TotalLD';
import Websites from './Pages/Websites';

function App() {
  return (
    <div className="app-routes">
      <BrowserRouter>
        <Switch>
          <Route path="/Websites" component={Websites} />
          <Route path="/TotalLD" component={TotalLD} />
          <Route path="/StreamLD" component={StreamLD} />
          <Route path="/keywords" component={Keywords} />
          <Route path="/GamingLD" component={GamingLD} />
          <Route path="/SocialLD" component={SocialLD} />
          <Route path="/" component={Starter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
