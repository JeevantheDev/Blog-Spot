import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import FacebookSignin from '../components/socialAuth/FacebookSignin';
import GithubSignin from '../components/socialAuth/GithubSignin';
import GoogleSignin from '../components/socialAuth/GoogleSignin';

// import MetaTags from '../metaTags/MetaTags';

const AuthPage = ({ auth }) => {
  if (auth.uid) return <Redirect to='/' />;

  return (
    <div className='container'>
      {/* <MetaTags title={'Login'} /> */}
      <div style={{ margin: '2rem 0' }} className='custom-align'>
        <form className='card z-depth-1'>
          <div className='login-methods card-content'>
            <h5 className='grey-text flow-text text-darken-3'>
              Please!!! <span className='teal-text'>Login</span> here..
            </h5>
            <GoogleSignin />
            <FacebookSignin />
            <GithubSignin />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default { component: connect(mapStateToProps)(AuthPage) };
