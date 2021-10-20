import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import renderHTML from 'react-render-html';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { deleteProject, getBlogById, getClientBlogById, getAllBlogs } from '../actions/projectAction';
import Comments from '../components/Comments/Comments';
import Loader from '../components/shared/Loader';

const BlogPage = ({ blog, auth, id, deleteProject, getBlogById, getClientBlogById, ...props }) => {
  const [save, setSave] = useState([]);
  const [flag, setFlag] = useState(false);

  const initState = (data, id) => {
    return [data].map((item) => ({
      ...item,
      id: id,
    }));
  };

  useEffect(() => {
    getClientBlogById(id);
  }, []);

  useEffect(() => {
    const copy = blog && id ? initState(blog, id) : [];
    setSave(copy[0] || []);
  }, [id, blog]);

  useEffect(() => {
    getBlogs();
  }, [save]);

  const getBlogs = () => {
    let blogs;
    if (window.localStorage.getItem('blogs') === null) {
      blogs = [];
    } else {
      blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      let found = false;
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
    e.stopPropagation();
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

  const deleteBlogById = (id) => {
    if (window.confirm('Are you sure ?')) {
      deleteProject(id);
      props.history.push('/');
    }
  };

  if (blog) {
    return (
      <Fragment>
        {/* <MetaTags
          title={blog.title}
          description={blog.title}
          authorName={blog.authorName}
          image={blog.authorImage}
          url={window.location.href}
        /> */}
        <nav className='transparent z-depth-0'>
          <div className='nav-wrapper container'>
            <div className='col s12'>
              <Link to='/' className='breadcrumb grey-text text-darken-2'>
                Dashboard
              </Link>
              <a href='#' className='breadcrumb blue-text text-darken-2'>
                Blog Detail
              </a>
            </div>
          </div>
        </nav>
        <div style={{ padding: '0' }} className='container section blog-details'>
          <div className='card z-depth-1'>
            <div className='custom-action-btn pad-2'>
              {auth.uid === blog.authorId && (
                <Fragment>
                  <Link to={`/updateBlog/${id}/${blog.slug}`}>
                    <i className='material-icons'>create</i>
                  </Link>
                  <a
                    href='#'
                    className='red-text'
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteBlogById(id);
                    }}
                  >
                    <i className='material-icons'>delete</i>
                  </a>
                </Fragment>
              )}
              <a onClick={handleSave} href='#!' className='secondary-content'>
                {flag ? <i className='material-icons'>grade</i> : <i className='material-icons'>star_outline</i>}
              </a>
            </div>
            <div className='devider'></div>
            <div className='card-content'>
              <span className='new badge' data-badge-caption=' '>
                {blog.category}
              </span>
              <span className='card-title'>{blog.title}</span>
              <img src={blog.image} alt='Display Image' className='avatar' />
              <p>{renderHTML(blog.content)}</p>
            </div>
            <div className='card-action grey lighten-4 grey-text'>
              <div className='row valign-wrapper'>
                <div className='col s2'>
                  <img src={blog.authorImage} alt='Author Image' className='circle responsive-img' />
                </div>
                <div className='col s10'>
                  <p>Posted by {blog.authorName}</p>
                  <p className='grey-text'>{moment(blog.createAt.toDate()).calendar()}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card p-5 grey lighten-2'>
            <Comments blog={blog} id={id} />
          </div>
        </div>
      </Fragment>
    );
  } else {
    return <Loader />;
  }
};

function mapDispatchToProps(dispatch) {
  return {
    deleteProject: (id) => dispatch(deleteProject(id)),
    getAllBlogs: (data) => dispatch(getAllBlogs(data)),
    getBlogById: (id) => dispatch(getBlogById(id)),
    getClientBlogById: (id) => dispatch(getClientBlogById(id)),
  };
}
function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  return {
    id: id,
    blog: state.blog.currentBlog,
    auth: state.firebase.auth,
  };
}

function getBlogData(store, match) {
  return new Promise((resolve, reject) => {
    store.firestore
      .get({ collection: 'projects', doc: match.params.id })
      .then((snapshot) => {
        resolve(snapshot.data());
      })
      .catch((err) => reject(err.message));
  });
}

function getAllBlogData(store) {
  return new Promise((resolve, reject) => {
    let data = [];
    store.firestore
      .get({ collection: 'projects' })
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          data.push(doc.data());
        });
        resolve(store.dispatch(getAllBlogs(data)));
      })
      .catch((err) => reject(err.message));
  });
}

async function loadData(store, match) {
  let data = await getBlogData(store, match);
  let res = await getAllBlogData(store);
  console.log(res);
  return store.dispatch(getBlogById(data));
}

export default {
  component: compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: 'projects' }]),
  )(BlogPage),
  loadData,
};
