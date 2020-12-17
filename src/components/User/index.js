import React, { useState, useEffect } from 'react';
import {
  Link
} from 'react-router-dom';

import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import fomatDate from '../../helpers/fomatDate';
import './styles.scss';


function User({ data }) {
  const { picture, name, location, email, registered, login } = data;

  const [isReady, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 100)
  }, [])

  const address = location ? `${location.street.name} ${location.city}` : "No address";
  const userName = name ? `${name.title}. ${name.first} ${name.last}` : "No user name";
  const registeredDate = new Date(registered.date);

  return (
    <article className="user">
      <ReactPlaceholder showLoadingAnimation type="media" ready={isReady} >
        <div className="user__thumbnail"><img src={picture.large} alt="user" /></div>
        <h3 className="user__name"><Link to={`/users/${login.uuid}`}>{userName}</Link></h3>
        <ul className="user__info">
          <li><strong>Address: </strong>{address}</li>
          <li><strong>Email: </strong>{email}</li>
          <li><strong>Registration date: </strong>{fomatDate(registeredDate)}</li>
        </ul>
      </ReactPlaceholder>
    </article >
  )
}

export default User;