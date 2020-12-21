import React, { useState, useEffect } from 'react';

import api from '../../api';

import UserList from '../UserList';
import UserDetails from '../UserDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Loader from '../Loader';
import Message from '../Message';

function Users() {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    api
      .get('?results=10')
      .then(data => {
        if (data) {
          setData(data.results);
          setLoaded(true);
        } else {
          setError(true);
        }
      })
      .catch(error => {
        setError(true);
        console.log(error);
      });
  }, [])
  if (isLoaded) {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/users/:id">
              <UserDetails data={data} />
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
      <Message type="error">Something get wrong. Sorry</Message>
    )
  }
  return (
    <Loader />
  )
}

export default Users;
