import React from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import User from '../User';
import './styles.scss';

function UserDetails({ data }) {
  const { id } = useParams();

  const choosedUserData = data.filter(el => el.login.uuid === id);
  if (choosedUserData.length > 0) {
    const data = choosedUserData[0];
    const coordinates = [
      data.location.coordinates.latitude, data.location.coordinates.longitude
    ]
    return (
      <article className="details">
        <Link to="/users">Back</Link>
        <User data={data} />
        <span>Map:</span>
        <MapContainer center={coordinates} zoom={10} scrollWheelZoom={false} >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates} >
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