import React from 'react';

import User from '../User';

function UserList({data}) {

    const generatedUsers = data.results.map((el) => <User key={`user-${el.login.uuid}`} data={el} />);
    return (
      <div>
        {generatedUsers}
      </div>
    )

}

export default UserList;