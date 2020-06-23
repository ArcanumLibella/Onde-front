import React from 'react';
import './assets/scss/app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, Initiatives, Connexion, Missions } from './pages';

// COMPONENTS
import Menu from './components/Menu';

function App() {
  return (
    <div className="app">
      <Router>
        <Menu />
        <div>
          <Switch>
            <Route path="/initiatives">
              <Initiatives />
            </Route>
            <Route path="/connexion">
              <Connexion />
            </Route>
            <Route path="/missions">
              <Missions />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
