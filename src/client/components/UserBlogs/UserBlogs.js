import moment from 'moment';
import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteProject } from '../../actions/projectAction';
import Pagination from '../Pagination/Pagination';
import Loader from '../shared/Loader';

const UserBlogs = ({ blog, auth }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(4);
  const filterData = [];

  useEffect(() => {
    if (blog) {
      blog.filter((blog) => {
        if (blog.authorId === auth.uid) {
          filterData.unshift(blog);
        }
      });
      setData(filterData);
    }
  }, [blog]);

  const indexLast = currentPage * dataPerPage;
  const indexFast = indexLast - dataPerPage;
  const currentData = data.slice(indexFast, indexLast);

  const paginate = (number) => setCurrentPage(number);

  const deleteBlogById = (id) => {
    if (window.confirm('Are you sure ?')) {
      props.deleteProject(id);
    }
  };
  if (blog) {
    return (
      <Fragment>
        {currentData.length > 0 ? (
          <Fragment>
            {currentData.map((blog) => {
              return (
                <Link to={`/blogs/${blog.id}/${blog.slug}`} key={blog.id}>
                  <div className='card z-depth-1 blog-summary teal darken-1'>
                    <div className='card-content white-text'>
                      <span className='new badge z-depth-1' data-badge-caption=' '>
                        {blog.category}
                      </span>
                      <span className='card-title'>{blog.title}</span>
                      <div style={{ marginBottom: '0' }} className='row'>
                        <div className='col s2'>
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
                    {auth.uid === blog.authorId && (
                      <div className='card-action'>
                        <Link className='yellow-text' to={`/updateBlog/${blog.id}/${blog.slug}`}>
                          <i className='material-icons'>create</i>
                        </Link>{' '}
                        <a
                          className='red-text'
                          onClick={(e) => {
                            e.preventDefault();
                            deleteBlogById(blog.id);
                          }}
                        >
                          <i className='material-icons'>delete</i>
                        </a>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </Fragment>
        ) : (
          <Fragment>
            <div className='card-panel teal'>
              <span className='card-title white-text'>No Blogs yet.</span>
            </div>
          </Fragment>
        )}
        {data.length > 4 ? (
          <Pagination dataPerPage={dataPerPage} totalData={data.length} paginate={paginate} page={currentPage} />
        ) : null}
      </Fragment>
    );
  } else {
    return <Loader />;
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id)),
  };
};
export default connect(null, mapDispatchToProps)(UserBlogs);
