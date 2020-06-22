import React from 'react';
import './assets/scss/app.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage.js';
import Initiatives from './pages/Initiatives.js';
import Connexion from './pages/Connexion.js';
import Missions from './pages/Missions.js';

function App() {
  return (
    <div className="app">
      <header className="header" />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/initiatives">Initiatives</Link>
              </li>
              <li>
                <Link to="/connexion">Connexion</Link>
              </li>
              <li>
                <Link to="/missions">Missions</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
