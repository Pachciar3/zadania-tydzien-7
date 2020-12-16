import React, { useEffect } from 'react';

import './styles.scss';

function Snackbar({ children, hide, handleClose, autoHideDuration = '5000', position = 'bottom-center', type = 'error' }) {
  useEffect(() => {
    let timeout;
    if (!hide) {
      timeout = setTimeout(() => {
        handleClose();
      }, autoHideDuration);
    }
    return () => clearTimeout(timeout);
  }, [hide, handleClose, autoHideDuration]);

  const snackClass = `snackbar ${position} ${type}`;

  return (
    <>
      {
        !hide &&
        <div className={snackClass}>
          <span>
            {children}
          </span>
          <button className="snackbar__button" onClick={handleClose}>X</button>
        </div>
      }
    </>
  );
}


export default Snackbar;