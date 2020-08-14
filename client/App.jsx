import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/hello">
        <Link to="/">
          To Home
        </Link>
      </Route>
      <Route path="/">
        <Link to="/hello">
          To Hello
        </Link>
      </Route>
    </Switch>
  );
}

export default App;
