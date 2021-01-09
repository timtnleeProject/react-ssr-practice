import React, { useState } from 'react';
import {
  Switch, Route, Link, Redirect,
} from 'react-router-dom';
import List from './List';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <Switch>
        <Route path="/hello">
          <h2>Hello</h2>
          <span>
            Count:
            {' '}
            {count}
          </span>
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            count++
          </button>
          <Link to="/">Back To Home</Link>
        </Route>
        <Route exact path="/">
          <h2>Home</h2>
          <ul>
            <li><Link to="/hello">Hello</Link></li>
            <li><Link to="/list">List</Link></li>
          </ul>
        </Route>
        <Route exact path="/list">
          <List />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
