import React, { Fragment } from 'react';
import { signUpLoginGithub } from '../../actions/authAction';
import { connect } from 'react-redux';

const GithubSignin = ({ signUpLoginGithub }) => {
  return (
    <Fragment>
      <a
        onClick={(e) => {
          e.preventDefault();
          signUpLoginGithub();
        }}
        className='button button--social-login button--github'
        href='#'
      >
        <i className='icon fab fa-github'></i>Login With Github
      </a>
    </Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUpLoginGithub: () => dispatch(signUpLoginGithub()),
  };
};
export default connect(null, mapDispatchToProps)(GithubSignin);
