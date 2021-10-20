import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import BlogEditor from '../components/BlogEditor/BlogEditor';

// import MetaTags from '../metaTags/MetaTags';
const NewBlogPage = ({ auth }) => {
  if (!auth.uid) return <Redirect to='/signin' />;
  return (
    <Fragment>
      {/* <MetaTags title={'Create Blog'} /> */}
      <nav className='transparent z-depth-0'>
        <div className='nav-wrapper container'>
          <div className='col s12'>
            <Link to='/' className='breadcrumb grey-text text-darken-2'>
              Dashboard
            </Link>
            <a href='#' className='breadcrumb blue-text text-darken-2'>
              New Blog
            </a>
          </div>
        </div>
      </nav>
      <div style={{ padding: '0' }} className='container section'>
        <BlogEditor id='' blog={null} type='create' />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default { component: connect(mapStateToProps)(NewBlogPage) };
