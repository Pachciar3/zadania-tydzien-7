import React from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import User from '../User';
import './styles.scss';

function UserDetails({ data }) {
  const { id } = useParams();
  const choosedUserData = data.filter(el => el.login.uuid === id);
  console.log(choosedUserData)
  if (choosedUserData.length > 0) {
    return (
      <article className="details">
        <Link to="/users">Back</Link>
        <User data={choosedUserData[0]} />
        <span>Map:</span>
        <MapContainer
          center={[
            Number(choosedUserData[0].location.coordinates.latitude),
            Number(choosedUserData[0].location.coordinates.longitude)
          ]}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[
              Number(choosedUserData[0].location.coordinates.latitude),
              Number(choosedUserData[0].location.coordinates.longitude)
            ]}
          >
          </Marker>
        </MapContainer>
      </article>
    )
  }

  return (
    <Redirect to="/users" />
  )
}

export default UserDetails;