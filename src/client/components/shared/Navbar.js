/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from '../authLinks/SignedinLinks';
import SignedoutLinks from '../authLinks/SignedoutLinks';
import { connect } from 'react-redux';

const Navbar = ({ auth, profile }) => {
  const links = auth.uid ? <SignedinLinks profile={profile} /> : <SignedoutLinks />;

  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          Blog<span className='teal-text text-lighten-2'>Spot</span>
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
