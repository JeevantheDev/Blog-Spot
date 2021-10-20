import moment from 'moment';
import React, { Fragment } from 'react';
import StarRatings from 'react-star-ratings';

const CommentItems = ({ comments }) => {
  return (
    <Fragment>
      {comments ? (
        comments.map((comment) => {
          return (
            <div key={comment.id} className='col s12 m4'>
              <div className='card-panel blue-grey darken-3 z-depth-1'>
                <StarRatings
                  isAggregateRating={true}
                  rating={comment.rating}
                  starRatedColor='orange'
                  numberOfStars={5}
                  starSpacing={'3px'}
                  starDimension={'30px'}
                />
                <div className='row valign-wrapper'>
                  <div className='col s2'>
                    <a href='#' className='btn btn-floating pink lighten-1'>
                      <img className='avatar' src={comment.authorImage} alt='' />
                    </a>
                  </div>
                  <div className='col s10'>
                    <p className='orange-text'>By {comment.authorName}</p>
                    <p className='white-text'>{moment(comment.createAt.toDate()).calendar()}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
};

export default CommentItems;
