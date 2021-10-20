import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  DELETE_PROJECT,
  DELETE_PROJECT_ERROR,
  GET_ALL_BLOGS,
  GET_BLOG_BY_ID,
  GET_BLOG_ERROR,
  SELECTED_BLOG_ID,
  UPDATE_PROJECT,
  UPDATE_PROJECT_ERROR,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_ERROR,
} from './actionTypes';
import { setAlert } from './alertAction';

export const createProject = (blog) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('projects')
      .add({
        ...blog,
        authorName: profile.name,
        authorImage: profile.avatar,
        authorId: authorId,
        ratings: [],
        createAt: new Date(),
      })
      .then(() => {
        dispatch(setAlert('Blog Created Successfully.', 'success'));
        dispatch({ type: CREATE_PROJECT, blog });
      })
      .catch((err) => {
        dispatch({ type: CREATE_PROJECT_ERROR, err });
      });
  };
};

export const getAllBlogs = (blogs) => {
  return (dispatch) => {
    try {
      dispatch({ type: GET_ALL_BLOGS, data: blogs });
    } catch (error) {
      dispatch({ type: GET_BLOG_ERROR, data: error.message });
    }
  };
};
export const getBlogById = (blog) => {
  return (dispatch) => {
    try {
      dispatch({ type: GET_BLOG_BY_ID, data: blog });
    } catch (error) {
      dispatch({ type: GET_BLOG_ERROR, data: error.message });
    }
  };
};
export const getClientBlogById = (blogId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('projects') // to change 'blogs'
      .doc(blogId)
      .get()
      .then((doc) => {
        dispatch({ type: GET_BLOG_BY_ID, data: doc.data() });
      })
      .catch((err) => {
        dispatch({ type: GET_BLOG_ERROR, err });
      });
  };
};

export const uploadImage = (image) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const storage = firebase.storage();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    let progress;
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            dispatch(setAlert('Image Uploaded Successfully.', 'info'));
            dispatch({ type: UPLOAD_IMAGE, url });
            dispatch({ type: 'STATE_PROGRESS', progress });
          })
          .catch((err) => {
            dispatch({ type: UPLOAD_IMAGE_ERROR, err });
          });
      },
    );
  };
};
export const updateProject = (blog, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .doc(id)
      .set({
        ...blog,
        createAt: new Date(),
      })
      .then(() => {
        dispatch({ type: UPDATE_PROJECT, blog });
        dispatch(setAlert('Blog Updated Successfully.', 'info'));
      })
      .catch((err) => {
        dispatch({ type: UPDATE_PROJECT_ERROR, err });
      });
  };
};
export const deleteProject = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .doc(id)
      .delete()
      .then(() => {
        dispatch(setAlert('Your Blog Deleted.', 'warning'));
        dispatch({ type: DELETE_PROJECT });
      })
      .catch((err) => {
        dispatch({ type: DELETE_PROJECT_ERROR, err });
      });
  };
};
