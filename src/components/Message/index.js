import React from 'react';

import './styles.scss';

function Message({ children, type = 'information' }) {

  return (
    <div className={`message ${type}`} >
      {children}
    </div >
  );
}

export default Message;