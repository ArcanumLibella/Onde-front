import React from 'react';
import { Link } from 'react-router-dom';

const Logout = props => {
  const {  } = props;

  return (
    <Logout>
      <p>Coucou</p>
      {/* {sessionStorage.removeItem('User')} */}
      <Link to="/">
        retourne a la home
      </Link>
    </Logout>
  );
};

export default Logout;
