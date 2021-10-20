import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

const Search = ({ blogs }) => {
  const state = {
    sourcedata: [],
    filterData: [],
  };
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(state);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    setFlag(searchValue === '' && false);
  }, []);

  useEffect(() => {
    if (!blogs) return;
    setData({
      sourcedata: blogs,
      filterData: blogs,
    });
  }, [blogs]);

  const filterList = (e) => {
    e.stopPropagation();
    const updateList = data.sourcedata.filter(
      (item) => item && item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1,
    );

    setData({
      sourcedata: blogs,
      filterData: updateList,
    });

    setSearchValue(e.target.value);
    setFlag(e.target.value !== '' ? true : false);
  };

  return (
    <Fragment>
      <li style={{ width: '100%' }}>
        <div className='input-field col s12'>
          <i className='material-icons prefix teal-text darken-3'>search</i>
          <input
            autocomplete='off'
            placeholder='Search Blogs...'
            id='value'
            onChange={filterList}
            className='validate dark-text custom-placeholder'
          />
          {flag && (
            <ul className='collection with-header white-text float-none search-results z-depth-1'>
              {data.filterData.length > 0 ? (
                <Fragment>
                  {data.filterData.map((item) => (
                    <li key={item.id} className='collection-item blue-grey'>
                      <Link style={{ color: 'inherit' }} to={`/blogs/${item.id}/${item.slug}`}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </Fragment>
              ) : (
                <li className='collection-item blue-grey white-text'>No Blogs Found..</li>
              )}
            </ul>
          )}
        </div>
      </li>
      <style jsx>
        {`
          .custom-placeholder::placeholder {
            color: #333;
          }
        `}
      </style>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.firestore.ordered.projects ? state.firestore.ordered.projects : state.blog.blogs,
  };
};

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'projects' }]))(Search);
