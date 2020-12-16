import React, { useState, useEffect } from 'react';

import api from './api';

import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Loader from './components/Loader';
import Snackbar from './components/Snackbar';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [hasError, setError] = useState(false);
  const [hasErrorMessage, setErrorMessage] = useState(true);

  function closeErorrMessage() {
    setErrorMessage(false)
  }

  useEffect(() => {
    api
      .get('?results=10')
      .then(result => {
        setData(result);
        setLoaded(true);
      })
      .catch(error => setError(true));
  }, [])
  if (isLoaded) {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/users/:id">
              <UserDetails data={data.results} />
            </Route>
            <Route path="/users">
              <UserList data={data} />
            </Route>
            <Route path="/">
              <Redirect to="/users" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
  if (hasError) {
    return (
      hasErrorMessage && <Snackbar handleClose={closeErorrMessage}>Something get wrong</Snackbar>
    )
  }
  return (
    <Loader />
  )
}

export default App;
