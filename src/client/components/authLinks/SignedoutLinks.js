import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../shared/Search';

const SignedoutLinks = () => {
  return (
    <Fragment>
      <ul className='right'>
        <li>
          <NavLink to='/signin'>Login</NavLink>
        </li>
      </ul>
      <ul className='right sidenav pad-1' id='mobile-demo'>
        <Search />
        <li>
          <NavLink to='/signin'>Login</NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default SignedoutLinks;
