import React, { Fragment } from 'react';
import { signUpLoginGoogle } from '../../actions/authAction';
import { connect } from 'react-redux';

// import style from './socialAuth.css';
const GoogleSignin = ({ signUpLoginGoogle }) => {
  return (
    <Fragment>
      <a
        onClick={(e) => {
          e.stopPropagation();
          signUpLoginGoogle();
        }}
        className='button button--social-login button--google'
        href='#'
      >
        <i className='icon fab fa-google'></i>Login With Google
      </a>
    </Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUpLoginGoogle: () => dispatch(signUpLoginGoogle()),
  };
};
export default connect(null, mapDispatchToProps)(GoogleSignin);
