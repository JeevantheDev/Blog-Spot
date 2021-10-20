import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';
import { compose } from 'redux';

// import MetaTags from '../metaTags/MetaTags';

const SavedBlogPage = ({ id }) => {
  const [save, setSave] = useState([]);
  const [flag, setFlag] = useState(false);
  const initState = (data, id) => {
    return [data].map((item) => ({
      ...item,
      id: id,
    }));
  };
  useEffect(() => {
    getBlogs();
  }, [save]);

  useEffect(() => {
    if (id) {
      const blogs = getBlogs();
      blogs.filter((blog) => {
        if (blog.id === id) {
          const copy = initState(blog, id);
          setSave(copy[0]);
        }
      });
    }
  }, []);

  const getBlogs = () => {
    let blogs;
    if (window.localStorage.getItem('blogs') === null) {
      blogs = [];
    } else {
      blogs = JSON.parse(localStorage.getItem('blogs'));
      var found = false;
      for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].image === save.image) {
          found = true;
          break;
        }
      }
      if (found) {
        setFlag(true);
      }
    }
    return blogs;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const blogs = getBlogs();
    if (blogs.length > 0) {
      if (flag) {
        blogs.forEach((blog, index) => {
          if (blog.image === save.image) {
            blogs.splice(index, 1);
          }
        });
        localStorage.setItem('blogs', JSON.stringify(blogs));
        setFlag(false);
        console.log('Blog is already saved');
      } else {
        blogs.unshift(save);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        setFlag(true);
      }
    } else {
      blogs.unshift(save);
      localStorage.setItem('blogs', JSON.stringify(blogs));
      setFlag(true);
    }
  };

  if (save.length !== 0) {
    return (
      <Fragment>
        {/* <MetaTags title={save.title} /> */}
        <nav className='transparent z-depth-0'>
          <div className='nav-wrapper container'>
            <div className='col s12'>
              <Link to='/' className='breadcrumb grey-text text-darken-2'>
                Dashboard
              </Link>
              <a href='#' className='breadcrumb blue-text text-darken-2'>
                Favourite Blog
              </a>
            </div>
          </div>
        </nav>
        <div className='container section blog-details'>
          <div className='card z-depth-1'>
            <div className='card-content'>
              <div className='custom-action-btn'>
                <a onClick={handleSave} href='#!' class='secondary-content'>
                  {flag ? <i class='material-icons'>grade</i> : <i class='material-icons'>star_outline</i>}
                </a>
              </div>
              <span class='new badge' data-badge-caption=' '>
                {save.category}
              </span>
              <span className='card-title'>{save.title}</span>
              <img src={save.image} alt='Display Image' className='avatar' />
              <p>{renderHTML(save.content)}</p>
            </div>
            <div className='card-action grey lighten-4 grey-text'>
              <div className='row valign-wrapper'>
                <div class='col s2'>
                  <img src={save.authorImage} alt='Author Image' class='circle responsive-img' />
                </div>
                <div className='col s10'>
                  <p>Posted by {save.authorName}</p>
                  <p className='grey-text'>{moment(save.createAt.toDate).format('LL')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <div className='container center'>
        <p>Loading Project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const blogs = state.firestore.data.projects;
  const blog = blogs ? blogs[id] : null;
  return {
    id: id,
    blog: blog,
    auth: state.firebase.auth,
  };
};

export default {
  component: compose(connect(mapStateToProps), firestoreConnect([{ collection: 'projects' }]))(SavedBlogPage),
};
