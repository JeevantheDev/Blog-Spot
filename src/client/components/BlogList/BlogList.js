import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogSummary from '../BlogSummary/BlogSummary';
import Loader from '../shared/Loader';

const BlogList = ({ blogs, auth }) => {
  const state = {
    data: [],
    filterList: [],
  };
  const [list, setList] = useState(state);
  const [isaverage, setIsAverage] = useState(false);
  const [rate, setRate] = useState('');

  useEffect(() => {
    setList({
      data: blogs ? blogs : [],
      filterList: blogs ? blogs : [],
    });
  }, [blogs]);

  const filterList = (e) => {
    e.stopPropagation();
    if (e.target.value !== 'All') {
      if (isaverage) {
        sortListByFilter(e, rate);
      } else {
        const updateList = list.data.filter((blog) => {
          return blog.category.toLowerCase() === e.target.value.toLowerCase();
        });
        setList({
          data: blogs,
          filterList: [...updateList],
        });
      }
    } else {
      setList({
        data: blogs,
        filterList: blogs,
      });
    }
  };
  const sortListByFilter = (e, newValue) => {
    e.stopPropagation();
    if (e.target.value !== 'All') {
      const updateList = list.data.filter((blog) => {
        const set = new Set();
        blog.ratings.map((rating) => {
          set.add(rating.rating);
        });
        let sum = 0;
        set.forEach((val) => {
          sum += val;
        });
        const avg = sum / set.size;
        return avg >= newValue && blog.category.toLowerCase() === e.target.value.toLowerCase();
      });
      setList({
        data: blogs,
        filterList: [...updateList],
      });
    } else {
      setList({
        data: blogs,
        filterList: blogs,
      });
    }
  };
  const sortList = (e) => {
    e.stopPropagation();
    if (e.target.value !== 'All') {
      const updateList = list.data.filter((blog) => {
        const set = new Set();
        blog.ratings.map((rating) => {
          set.add(rating.rating);
        });
        let sum = 0;
        set.forEach((val) => {
          sum += val;
        });
        const avg = sum / set.size;
        if (e.target.value.length === 1) {
          setRate(parseInt(e.target.value));
        }
        return avg >= e.target.value;
      });
      setList({
        data: blogs,
        filterList: [...updateList],
      });
    } else {
      setList({
        data: blogs,
        filterList: blogs,
      });
    }
    setIsAverage(!isaverage);
  };

  return (
    <div className='blog-list section'>
      <span className='flow-text '>
        All <span className='teal-text'>Activity</span>
      </span>
      <div className='devider'></div>
      <div className='section sticky'>
        <div style={{ marginBottom: '0' }} className='row'>
          <div className='col s6'>
            <select onChange={filterList} className='browser-default'>
              <option value='' disabled selected>
                Filter by Category
              </option>
              <option value='All'>All</option>
              <option value='Travelling'>Travelling</option>
              <option value='Sports'>Sports</option>
              <option value='Entertainment'>Entertainment</option>
              <option value='Technology'>Technology</option>
              <option value='Development'>Development</option>
            </select>
          </div>
          <div className='col s6'>
            <select onChange={sortList} className='browser-default'>
              <option value='' disabled selected>
                Sort by Rating
              </option>
              <option value='All'>All</option>
              <option value='4'>⭐⭐⭐⭐ & Up</option>
              <option value='3'>⭐⭐⭐ & Up</option>
              <option value='2'>⭐⭐ & Up</option>
            </select>
          </div>
        </div>
      </div>
      {blogs ? (
        <Fragment>
          {list.filterList.length > 0 ? (
            <Fragment>
              {list.filterList.map((blog) => {
                return (
                  <Link to={`/blogs/${blog.id}/${blog.slug}`} style={{ cursor: 'pointer' }} key={blog.id}>
                    <BlogSummary authId={auth.uid} blog={blog} />
                  </Link>
                );
              })}
            </Fragment>
          ) : (
            <Fragment>
              <div className='card z-depth-1 blue-grey darken-1'>
                <div className='card-content'>
                  <span className='card-title white-text'>Sorry, no blogs found..</span>
                </div>
              </div>
            </Fragment>
          )}
        </Fragment>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BlogList;
