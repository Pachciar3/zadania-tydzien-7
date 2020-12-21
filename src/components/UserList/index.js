import React from 'react';

import User from '../User';

function UserList({ data }) {
  const generatedUsers = data.map(el => <User key={`user-${el.login.uuid}`} data={el} />);
  return (
    <div className="userlist">
      {generatedUsers}
    </div>
  )
}

export default UserList;

