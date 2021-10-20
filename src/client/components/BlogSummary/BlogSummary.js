import React, { Fragment } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { deleteProject } from '../../actions/projectAction';
import { connect } from 'react-redux';

const BlogSummary = ({ blog, authId }) => {
  const deleteBlogById = (id) => {
    if (window.confirm('Are you sure ?')) {
      deleteProject(id);
    }
  };
  return (
    <div className='card z-depth-1 project-summary blue-grey darken-1'>
      <div className='card-content white-text'>
        <span class='new badge z-depth-1' data-badge-caption=' '>
          {blog.category}
        </span>
        <span className='card-title'>{blog.title}</span>
        <div style={{ marginBottom: '0' }} className='row'>
          <div class='col s2'>
            <a href='#' className='btn btn-floating pink lighten-1'>
              <img className='avatar' src={blog.authorImage} alt='' />
            </a>
          </div>
          <div className='col s10'>
            <p className='orange-text'>Posted by {blog.authorName}</p>
            <p className='white-text'>{moment(blog.createAt.toDate()).calendar()}</p>
          </div>
        </div>
      </div>
      {authId === blog.authorId ? (
        <div className='card-action'>
          <Link className='yellow-text' to={`/projectUpdate/${blog.id}/${blog.slug}`}>
            <i class='material-icons'>create</i>
          </Link>{' '}
          <a
            className='red-text'
            onClick={(e) => {
              e.preventDefault();
              deleteBlogById(blog.id);
            }}
          >
            <i class='material-icons'>delete</i>
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id)),
  };
};
export default connect(null, mapDispatchToProps)(BlogSummary);
