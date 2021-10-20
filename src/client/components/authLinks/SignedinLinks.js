import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../actions/authAction';
import { connect } from 'react-redux';
import Search from '../shared/Search';

const SignedinLinks = ({ signOut, profile }) => {
  return (
    <Fragment>
      <ul className='right'>
        <li>
          <NavLink to='/newBlog'>New Blog</NavLink>
        </li>
        <li>
          <a onClick={signOut}>Log Out</a>
        </li>
        <li>
          <NavLink to='/' className='btn btn-floating pink lighten-1'>
            <img className='avatar' src={profile.avatar} alt='' />
          </NavLink>
        </li>
      </ul>
      <ul className='right sidenav pad-1' id='mobile-demo'>
        <Search />
        <li>
          <NavLink to='/newBlog'>New Blog</NavLink>
        </li>
        <li>
          <a onClick={signOut}>Log Out</a>
        </li>
        <li>
          <NavLink to='/' className='btn btn-floating pink lighten-1'>
            <img className='avatar' src={profile.avatar} alt='' />
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedinLinks);
