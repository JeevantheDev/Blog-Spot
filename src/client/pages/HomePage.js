import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import BlogList from '../components/BlogList/BlogList';
import UserBlogs from '../components/UserBlogs/UserBlogs';
import Favourite from '../components/Favourite/Favourite';
import Search from '../components/shared/Search';

// import MetaTags from '../metaTags/MetaTags';
const Dashboard = ({ blogs, auth }) => {
  const [state, setState] = useState({ favourites: [] });

  const getFavouriteBlogs = () => {
    let blogs;
    if (localStorage.getItem('blogs') === null) {
      blogs = [];
    } else {
      blogs = JSON.parse(localStorage.getItem('blogs'));
    }
    return blogs;
  };

  useEffect(() => {
    const blogs = getFavouriteBlogs();
    setState({
      favourites: blogs,
    });
  }, []);

  return (
    <React.Fragment>
      <div className='dashboard container'>
        <ul style={{ width: '100%', position: 'relative' }}>
          <Search />
        </ul>
        {/* <MetaTags title={'Home'} /> */}
        <div className='row'>
          <div className='col s12 m6'>
            <div style={{ marginTop: '0.8rem' }}>
              <span className='flow-text'>
                Marked as <span className='teal-text'>Favourite</span>
              </span>
              <Favourite favourites={state.favourites} />
            </div>
            <div className='devider'></div>
            <div style={{ marginTop: '1.5rem' }}>
              <span className='flow-text'>
                Your <span className='teal-text'>Blogs</span>
              </span>
              {auth.uid ? (
                <UserBlogs auth={auth} blog={blogs} />
              ) : (
                <div className='card z-depth-1 teal'>
                  <div className='card-content'>
                    <span className='card-title white-text'>Sorry, you have not login yet..</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='col s12 m6'>
            <BlogList auth={auth} blogs={blogs} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.firestore.ordered.projects, // rename to blogs
    auth: state.firebase.auth,
  };
};

export default {
  component: compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects', orderBy: ['createAt', 'desc'] }]),
  )(Dashboard),
};
