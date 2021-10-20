import React, { Fragment } from 'react';
import { signUpLoginFacebook } from '../../actions/authAction';
import { connect } from 'react-redux';

const FacebookSignin = ({ signUpLoginFacebook }) => {
  return (
    <Fragment>
      <a
        onClick={(e) => {
          e.stopPropagation();
          signUpLoginFacebook();
        }}
        className='button button--social-login button--facebook'
        href='#'
      >
        <i className='icon fab fa-facebook'></i>Login With Facebook
      </a>
    </Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUpLoginFacebook: () => dispatch(signUpLoginFacebook()),
  };
};

export default connect(null, mapDispatchToProps)(FacebookSignin);
