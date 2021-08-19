import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ExamplePage from './pages/ExamplePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ExamplePage} />
        <Route exact path="/" component={ExamplePage} />
      </Switch>
    </Router>
  );
}

export default App;
