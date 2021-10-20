import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  DELETE_PROJECT,
  DELETE_PROJECT_ERROR,
  GET_ALL_BLOGS,
  GET_BLOG_BY_ID,
  GET_BLOG_ERROR,
  STATE_PROGRESS,
  UPDATE_PROJECT,
  UPDATE_PROJECT_ERROR,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_ERROR,
} from '../actions/actionTypes';

const initState = {
  blogs: [],
  currentBlog: null,
  url: '',
  progress: '',
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_BLOGS:
      return {
        ...state,
        blogs: action.data,
      };
    case GET_BLOG_BY_ID:
      return {
        ...state,
        currentBlog: action.data,
      };
    case CREATE_PROJECT:
    case UPDATE_PROJECT:
      return state;
    case STATE_PROGRESS:
      return {
        ...state,
        progress: action.progress,
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        url: action.url,
      };

    case GET_BLOG_ERROR:
    case CREATE_PROJECT_ERROR:
    case UPDATE_PROJECT_ERROR:
    case UPLOAD_IMAGE_ERROR:
    case DELETE_PROJECT:
    case DELETE_PROJECT_ERROR:
      return state;
    default:
      return state;
  }
};
export default blogReducer;
