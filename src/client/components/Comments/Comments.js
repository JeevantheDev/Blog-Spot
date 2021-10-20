import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import StarRatings from 'react-star-ratings';

import { setAlert } from '../../actions/alertAction';
import { updateProject } from '../../actions/projectAction';
import CommentItems from './CommentItems';

const Comments = ({ auth, id, blog, profile, updateProject, setAlert }) => {
  const state = {
    authorId: '',
    authorImage: '',
    authorName: '',
    category: '',
    content: '',
    createAt: '',
    image: '',
    ratings: [],
    title: '',
    slug: '',
  };
  const stateUser = {
    id: '',
    authorName: '',
    authorImage: '',
    createAt: '',
    rating: '',
  };
  const [star, setStar] = useState(0);
  const [user, setUser] = useState(stateUser);
  const [data, setData] = useState(state);
  const [flag, setFlag] = useState(true);
  const [check, setCheck] = useState(true);
  const [ratings, setRatings] = useState(null);

  useEffect(() => {
    setRatings(blog ? blog.ratings : []);
    setData({
      authorId: blog ? blog.authorId : '',
      authorImage: blog ? blog.authorImage : '',
      authorName: blog ? blog.authorName : '',
      category: blog ? blog.category : '',
      content: blog ? blog.content : '',
      createAt: blog ? blog.createAt : '',
      image: blog ? blog.image : '',
      ratings: blog ? blog.ratings : '',
      title: blog ? blog.title : '',
      slug: blog ? blog.slug : '',
    });

    blog &&
      auth &&
      blog.ratings.forEach((rating) => {
        setFlag(rating.id === auth.uid ? false : true);
        setCheck(rating.id === auth.uid ? false : true);
        setStar(rating.id === auth.uid ? rating.rating : 0);
      });
  }, [blog]);

  useEffect(() => {
    setUser({
      id: star ? auth.uid : '',
      authorName: star ? profile.name : '',
      authorImage: star ? profile.avatar : '',
      createAt: new Date(),
      rating: star ? star : '',
    });
  }, [star]);

  useEffect(() => {
    user.id &&
      setData({
        ...data,
        ratings: [].concat(...data.ratings, user),
      });
  }, [user]);

  const changeRating = (value) => {
    setStar(value);
    setCheck(false);
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    if (check === false) {
      updateProject(data, id);
      setFlag(false);
    } else {
      setAlert('Please give the rating.', 'error');
    }
  };

  return (
    <Fragment>
      {auth.uid && (
        <div className='rate'>
          <span className='teal-text custom-font'>{flag ? 'Give your Rating: ' : 'Your Rating: '}</span>
          <div>
            {flag && check ? (
              <StarRatings
                isAggregateRating={true}
                rating={star}
                starRatedColor='orange'
                numberOfStars={5}
                starSpacing={'3px'}
                starDimension={'30px'}
                changeRating={changeRating}
                name='star'
              />
            ) : (
              <StarRatings
                isAggregateRating={true}
                rating={star}
                starRatedColor='orange'
                numberOfStars={5}
                starSpacing={'3px'}
                starDimension={'30px'}
              />
            )}
          </div>
          {flag && (
            <a onClick={handleSubmit} className='waves-effect waves-light btn green'>
              <i className='material-icons'>add</i>
            </a>
          )}
        </div>
      )}
      <div className='card-action'>
        <div className='row'>
          <CommentItems comments={ratings || blog.ratings} />
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProject: (blog, id) => dispatch(updateProject(blog, id)),
    setAlert: (msg, type) => dispatch(setAlert(msg, type)),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Comments);
