/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_ALERT = exports.SET_ALERT = 'SET_ALERT';
var REMOVE_ALERT = exports.REMOVE_ALERT = 'REMOVE_ALERT';

var SIGNUP_LOGIN_SUCCESS = exports.SIGNUP_LOGIN_SUCCESS = 'SIGNUP_LOGIN_SUCCESS';
var AUTH_ERROR = exports.AUTH_ERROR = 'AUTH_ERROR';
var SIGNOUT_SUCCESS = exports.SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';

var GET_ALL_BLOGS = exports.GET_ALL_BLOGS = 'GET_ALL_BLOGS';
var GET_BLOG_BY_ID = exports.GET_BLOG_BY_ID = 'GET_BLOG_BY_ID';
var GET_BLOG_ERROR = exports.GET_BLOG_ERROR = 'GET_BLOG_ERROR';
var CREATE_PROJECT = exports.CREATE_PROJECT = 'CREATE_PROJECT';
var CREATE_PROJECT_ERROR = exports.CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';
var UPDATE_PROJECT = exports.UPDATE_PROJECT = 'UPDATE_PROJECT';
var UPDATE_PROJECT_ERROR = exports.UPDATE_PROJECT_ERROR = 'UPDATE_PROJECT_ERROR';
var DELETE_PROJECT = exports.DELETE_PROJECT = 'DELETE_PROJECT';
var DELETE_PROJECT_ERROR = exports.DELETE_PROJECT_ERROR = 'DELETE_PROJECT_ERROR';
var STATE_PROGRESS = exports.STATE_PROGRESS = 'STATE_PROGRESS';
var UPLOAD_IMAGE = exports.UPLOAD_IMAGE = 'UPLOAD_IMAGE';
var UPLOAD_IMAGE_ERROR = exports.UPLOAD_IMAGE_ERROR = 'UPLOAD_IMAGE_ERROR';

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux-firebase");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProject = exports.updateProject = exports.uploadImage = exports.getClientBlogById = exports.getBlogById = exports.getAllBlogs = exports.createProject = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(4);

var _alertAction = __webpack_require__(9);

var createProject = exports.createProject = function createProject(blog) {
  return function (dispatch, getState, _ref) {
    var getFirebase = _ref.getFirebase,
        getFirestore = _ref.getFirestore;

    var firestore = getFirestore();
    var profile = getState().firebase.profile;
    var authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add(_extends({}, blog, {
      authorName: profile.name,
      authorImage: profile.avatar,
      authorId: authorId,
      ratings: [],
      createAt: new Date()
    })).then(function () {
      dispatch((0, _alertAction.setAlert)('Blog Created Successfully.', 'success'));
      dispatch({ type: _actionTypes.CREATE_PROJECT, blog: blog });
    }).catch(function (err) {
      dispatch({ type: _actionTypes.CREATE_PROJECT_ERROR, err: err });
    });
  };
};

var getAllBlogs = exports.getAllBlogs = function getAllBlogs(blogs) {
  return function (dispatch) {
    try {
      dispatch({ type: _actionTypes.GET_ALL_BLOGS, data: blogs });
    } catch (error) {
      dispatch({ type: _actionTypes.GET_BLOG_ERROR, data: error.message });
    }
  };
};
var getBlogById = exports.getBlogById = function getBlogById(blog) {
  return function (dispatch) {
    try {
      dispatch({ type: _actionTypes.GET_BLOG_BY_ID, data: blog });
    } catch (error) {
      dispatch({ type: _actionTypes.GET_BLOG_ERROR, data: error.message });
    }
  };
};
var getClientBlogById = exports.getClientBlogById = function getClientBlogById(blogId) {
  return function (dispatch, getState, _ref2) {
    var getFirebase = _ref2.getFirebase,
        getFirestore = _ref2.getFirestore;

    var firestore = getFirestore();
    firestore.collection('projects') // to change 'blogs'
    .doc(blogId).get().then(function (doc) {
      dispatch({ type: _actionTypes.GET_BLOG_BY_ID, data: doc.data() });
    }).catch(function (err) {
      dispatch({ type: _actionTypes.GET_BLOG_ERROR, err: err });
    });
  };
};

var uploadImage = exports.uploadImage = function uploadImage(image) {
  return function (dispatch, getState, _ref3) {
    var getFirebase = _ref3.getFirebase,
        getFirestore = _ref3.getFirestore;

    var firebase = getFirebase();
    var storage = firebase.storage();
    var uploadTask = storage.ref('images/' + image.name).put(image);
    var progress = void 0;
    uploadTask.on('state_changed', function (snapshot) {
      progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
    }, function (error) {
      console.log(error);
    }, function () {
      storage.ref('images').child(image.name).getDownloadURL().then(function (url) {
        dispatch((0, _alertAction.setAlert)('Image Uploaded Successfully.', 'info'));
        dispatch({ type: _actionTypes.UPLOAD_IMAGE, url: url });
        dispatch({ type: 'STATE_PROGRESS', progress: progress });
      }).catch(function (err) {
        dispatch({ type: _actionTypes.UPLOAD_IMAGE_ERROR, err: err });
      });
    });
  };
};
var updateProject = exports.updateProject = function updateProject(blog, id) {
  return function (dispatch, getState, _ref4) {
    var getFirebase = _ref4.getFirebase,
        getFirestore = _ref4.getFirestore;

    var firestore = getFirestore();
    firestore.collection('projects').doc(id).set(_extends({}, blog, {
      createAt: new Date()
    })).then(function () {
      dispatch({ type: _actionTypes.UPDATE_PROJECT, blog: blog });
      dispatch((0, _alertAction.setAlert)('Blog Updated Successfully.', 'info'));
    }).catch(function (err) {
      dispatch({ type: _actionTypes.UPDATE_PROJECT_ERROR, err: err });
    });
  };
};
var deleteProject = exports.deleteProject = function deleteProject(id) {
  return function (dispatch, getState, _ref5) {
    var getFirebase = _ref5.getFirebase,
        getFirestore = _ref5.getFirestore;

    var firestore = getFirestore();
    firestore.collection('projects').doc(id).delete().then(function () {
      dispatch((0, _alertAction.setAlert)('Your Blog Deleted.', 'warning'));
      dispatch({ type: _actionTypes.DELETE_PROJECT });
    }).catch(function (err) {
      dispatch({ type: _actionTypes.DELETE_PROJECT_ERROR, err: err });
    });
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOut = exports.signUpLoginGithub = exports.signUpLoginFacebook = exports.signUpLoginGoogle = undefined;

var _actionTypes = __webpack_require__(4);

var _alertAction = __webpack_require__(9);

var signUpLoginGoogle = exports.signUpLoginGoogle = function signUpLoginGoogle() {
  return function (dispatch, getState, _ref) {
    var getFirebase = _ref.getFirebase,
        getFirestore = _ref.getFirestore;

    var firebase = getFirebase();
    var firestore = getFirestore();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    firebase.auth().signInWithPopup(provider).then(function (resp) {
      return firestore.collection('users').doc(resp.user.uid).set({
        name: resp.user.displayName,
        email: resp.user.email,
        avatar: resp.user.photoURL
      });
    }).then(function () {
      dispatch((0, _alertAction.setAlert)('Logged in successfully.', 'success'));
      dispatch({
        type: _actionTypes.SIGNUP_LOGIN_SUCCESS
      });
    }).catch(function (err) {
      var errors = err.message;

      if (errors) {
        dispatch((0, _alertAction.setAlert)(errors, 'error'));
      }
      dispatch({
        type: _actionTypes.AUTH_ERROR,
        err: err
      });
    });
  };
};

var signUpLoginFacebook = exports.signUpLoginFacebook = function signUpLoginFacebook() {
  return function (dispatch, getState, _ref2) {
    var getFirebase = _ref2.getFirebase,
        getFirestore = _ref2.getFirestore;

    var firebase = getFirebase();
    var firestore = getFirestore();
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    firebase.auth().signInWithPopup(provider).then(function (resp) {
      return firestore.collection('users').doc(resp.user.uid).set({
        name: resp.user.displayName,
        email: resp.user.email,
        avatar: resp.user.photoURL
      });
    }).then(function () {
      dispatch((0, _alertAction.setAlert)('Logged in successfully.', 'success'));
      dispatch({
        type: _actionTypes.SIGNUP_LOGIN_SUCCESS
      });
    }).catch(function (err) {
      var errors = err.message;

      if (errors) {
        dispatch((0, _alertAction.setAlert)(errors, 'error'));
      }
      dispatch({
        type: _actionTypes.AUTH_ERROR,
        err: err
      });
    });
  };
};

var signUpLoginGithub = exports.signUpLoginGithub = function signUpLoginGithub() {
  return function (dispatch, getState, _ref3) {
    var getFirebase = _ref3.getFirebase,
        getFirestore = _ref3.getFirestore;

    var firebase = getFirebase();
    var firestore = getFirestore();
    var provider = new firebase.auth.GithubAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    firebase.auth().signInWithPopup(provider).then(function (resp) {
      return firestore.collection('users').doc(resp.user.uid).set({
        name: resp.user.displayName,
        email: resp.user.email,
        avatar: resp.user.photoURL
      });
    }).then(function () {
      dispatch((0, _alertAction.setAlert)('Logged in successfully.', 'success'));
      dispatch({
        type: _actionTypes.SIGNUP_LOGIN_SUCCESS
      });
    }).catch(function (err) {
      var errors = err.message;

      if (errors) {
        dispatch((0, _alertAction.setAlert)(errors, 'error'));
      }
      dispatch({
        type: _actionTypes.AUTH_ERROR,
        err: err
      });
    });
  };
};

var signOut = exports.signOut = function signOut() {
  return function (dispatch, getState, _ref4) {
    var getFirebase = _ref4.getFirebase;

    var firebase = getFirebase();

    firebase.auth().signOut().then(function () {
      dispatch((0, _alertAction.setAlert)('Logged out successfully.', 'warning'));
      dispatch({
        type: _actionTypes.SIGNOUT_SUCCESS
      });
    });
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAlert = undefined;

var _uuid = __webpack_require__(25);

var _actionTypes = __webpack_require__(4);

var setAlert = exports.setAlert = function setAlert(msg, alertType) {
  var on = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var timeOut = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;
  return function (dispatch) {
    var id = (0, _uuid.v4)();
    on = !on;
    dispatch({
      type: _actionTypes.SET_ALERT,
      payload: { msg: msg, alertType: alertType, on: on, id: id }
    });

    setTimeout(function () {
      return dispatch({
        type: _actionTypes.REMOVE_ALERT,
        payload: id
      });
    }, timeOut);
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _reactReduxFirebase = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function Search(_ref) {
  var blogs = _ref.blogs;

  var state = {
    sourcedata: [],
    filterData: []
  };

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0, _react.useState)(state),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      flag = _useState6[0],
      setFlag = _useState6[1];

  (0, _react.useEffect)(function () {
    setFlag(searchValue === '' && false);
  }, []);

  (0, _react.useEffect)(function () {
    if (!blogs) return;
    setData({
      sourcedata: blogs,
      filterData: blogs
    });
  }, [blogs]);

  var filterList = function filterList(e) {
    e.stopPropagation();
    var updateList = data.sourcedata.filter(function (item) {
      return item && item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });

    setData({
      sourcedata: blogs,
      filterData: updateList
    });

    setSearchValue(e.target.value);
    setFlag(e.target.value !== '' ? true : false);
  };

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'li',
      { style: { width: '100%' } },
      _react2.default.createElement(
        'div',
        { className: 'input-field col s12' },
        _react2.default.createElement(
          'i',
          { className: 'material-icons prefix teal-text darken-3' },
          'search'
        ),
        _react2.default.createElement('input', {
          autocomplete: 'off',
          placeholder: 'Search Blogs...',
          id: 'value',
          onChange: filterList,
          className: 'validate dark-text custom-placeholder'
        }),
        flag && _react2.default.createElement(
          'ul',
          { className: 'collection with-header white-text float-none search-results z-depth-1' },
          data.filterData.length > 0 ? _react2.default.createElement(
            _react.Fragment,
            null,
            data.filterData.map(function (item) {
              return _react2.default.createElement(
                'li',
                { key: item.id, className: 'collection-item blue-grey' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { style: { color: 'inherit' }, to: '/blogs/' + item.id + '/' + item.slug },
                  item.title
                )
              );
            })
          ) : _react2.default.createElement(
            'li',
            { className: 'collection-item blue-grey white-text' },
            'No Blogs Found..'
          )
        )
      )
    ),
    _react2.default.createElement(
      'style',
      { jsx: true },
      '\n          .custom-placeholder::placeholder {\n            color: #333;\n          }\n        '
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    blogs: state.firestore.ordered.projects ? state.firestore.ordered.projects : state.blog.blogs
  };
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _reactReduxFirebase.firestoreConnect)([{ collection: 'projects' }]))(Search);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader() {
  return _react2.default.createElement(
    'div',
    { className: 'preloader-wrapper active custom-align-spinner-2' },
    _react2.default.createElement(
      'div',
      { className: 'spinner-layer spinner-teal-only' },
      _react2.default.createElement(
        'div',
        { className: 'circle-clipper left' },
        _react2.default.createElement('div', { className: 'circle' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'gap-patch' },
        _react2.default.createElement('div', { className: 'circle' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'circle-clipper right' },
        _react2.default.createElement('div', { className: 'circle' })
      )
    )
  );
};

exports.default = Loader;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(22);

var _App2 = _interopRequireDefault(_App);

var _AuthPage = __webpack_require__(27);

var _AuthPage2 = _interopRequireDefault(_AuthPage);

var _BlogPage = __webpack_require__(31);

var _BlogPage2 = _interopRequireDefault(_BlogPage);

var _HomePage = __webpack_require__(34);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _NewBlogPage = __webpack_require__(39);

var _NewBlogPage2 = _interopRequireDefault(_NewBlogPage);

var _SavedBlogPage = __webpack_require__(42);

var _SavedBlogPage2 = _interopRequireDefault(_SavedBlogPage);

var _UpdateBlogPage = __webpack_require__(43);

var _UpdateBlogPage2 = _interopRequireDefault(_UpdateBlogPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _AuthPage2.default, {
    path: '/signin'
  }), _extends({}, _BlogPage2.default, {
    path: '/blogs/:id/:slug'
  }), _extends({}, _SavedBlogPage2.default, {
    path: '/saved/:id'
  }), _extends({}, _NewBlogPage2.default, {
    path: '/newBlog'
  }), _extends({}, _UpdateBlogPage2.default, {
    path: '/updateBlog/:id/:slug'
  })]
})];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-render-html");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-star-ratings");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(_ref) {
  var dataPerPage = _ref.dataPerPage,
      totalData = _ref.totalData,
      paginate = _ref.paginate,
      page = _ref.page;

  var pageNumbers = [];

  for (var i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  var maxNum = void 0;

  pageNumbers.forEach(function (page) {
    maxNum = Math.max(page);
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'ul',
      { className: 'pagination' },
      _react2.default.createElement(
        'li',
        { className: page === 1 ? 'disabled' : '' },
        page !== 1 ? _react2.default.createElement(
          'a',
          { onClick: function onClick() {
              return paginate(page - 1);
            }, href: '#page=' + page },
          _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'chevron_left'
          )
        ) : _react2.default.createElement(
          'a',
          { href: '#page=' + page },
          _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'chevron_left'
          )
        )
      ),
      pageNumbers.map(function (number) {
        return _react2.default.createElement(
          'li',
          { key: number, className: page === number ? 'active' : '' },
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                return paginate(number);
              }, href: '#page=' + number },
            number
          )
        );
      }),
      _react2.default.createElement(
        'li',
        { className: page === maxNum ? 'disabled' : '' },
        page !== maxNum ? _react2.default.createElement(
          'a',
          { onClick: function onClick() {
              return paginate(page + 1);
            }, href: '#page=' + page },
          _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'chevron_right'
          )
        ) : _react2.default.createElement(
          'a',
          { href: '#page=' + page },
          _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'chevron_right'
          )
        )
      )
    )
  );
};

exports.default = Pagination;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _tinymceReact = __webpack_require__(40);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _reactSlugify = __webpack_require__(41);

var _reactSlugify2 = _interopRequireDefault(_reactSlugify);

var _alertAction = __webpack_require__(9);

var _projectAction = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var BlogEditor = function BlogEditor(_ref) {
  var type = _ref.type,
      blog = _ref.blog,
      id = _ref.id,
      url = _ref.url,
      progress = _ref.progress,
      uploadImage = _ref.uploadImage,
      createProject = _ref.createProject,
      history = _ref.history,
      updateProject = _ref.updateProject,
      setAlert = _ref.setAlert;

  var _useState = (0, _react.useState)({ slug: '', title: '', image: '', category: '', content: '' }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      flag = _useState4[0],
      setFlag = _useState4[1];

  (0, _react.useEffect)(function () {
    setData({
      slug: blog ? blog.slug : '',
      title: blog ? blog.title : '',
      image: blog ? blog.image : '',
      category: blog ? blog.category : '',
      content: blog ? blog.content : ''
    });
  }, [blog]);

  (0, _react.useEffect)(function () {
    if (url !== '' && flag) {
      setData(_extends({}, data, { image: url }));
    }
  }, [url]);

  var titleChange = function titleChange(e) {
    setData(_extends({}, data, {
      title: e.target.value,
      slug: (0, _reactSlugify2.default)(e.target.value)
    }));
  };

  var optionChange = function optionChange(e) {
    setData(_extends({}, data, {
      category: e.target.value
    }));
  };

  var handleImageChange = function handleImageChange(e) {
    if (e.target.files[0]) {
      var image = e.target.files[0];
      setData(_extends({}, data, { image: image }));
    }
  };
  var handleImageUpload = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              uploadImage(data.image);
              setFlag(true);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function handleImageUpload(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(e) {
    setData(_extends({}, data, { content: e }));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (type === 'create') {
      if (data.title !== '' && data.slug !== '' && data.image !== '' && data.category !== '' && data.content !== '') {
        createProject(data);
        history.push('/');
      } else {
        setAlert('Fill all the area.', 'error');
      }
    } else {
      if (data.title !== '' && data.slug !== '' && data.image !== '' && data.category !== '' && data.content !== '') {
        updateProject(_extends({}, data, {
          authorName: blog.authorName,
          authorImage: blog.authorImage,
          authorId: blog.authorId,
          ratings: blog.ratings
        }), id);
        history.push('/');
      } else {
        setAlert('Fill all the area.', 'error');
      }
    }
  };

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'form',
      { onSubmit: handleSubmit, className: 'white' },
      _react2.default.createElement(
        'h5',
        { className: 'grey-text text-darken-3' },
        type === 'create' ? 'Create Blog' : 'Update Blog'
      ),
      _react2.default.createElement(
        'div',
        { className: 'input-field' },
        _react2.default.createElement(
          'label',
          { htmlFor: 'title' },
          'Title'
        ),
        _react2.default.createElement('input', { className: 'center-align', value: data.title, type: 'text', onChange: titleChange, id: 'title' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'file-field input-field row' },
        _react2.default.createElement(
          'div',
          { className: 'col s6 m10' },
          _react2.default.createElement(
            'div',
            { className: 'btn' },
            _react2.default.createElement(
              'span',
              null,
              'File'
            ),
            _react2.default.createElement('input', { type: 'file', onChange: handleImageChange })
          ),
          _react2.default.createElement(
            'div',
            { className: 'file-path-wrapper' },
            _react2.default.createElement('input', { className: 'file-path validate', placeholder: 'Upload your display image', type: 'text' })
          )
        ),
        _react2.default.createElement(
          'a',
          { onClick: handleImageUpload, className: 'waves-effect waves-light btn' },
          'Upload'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'custom-align' },
        _react2.default.createElement('img', {
          'class': 'materialboxed',
          'data-caption': 'Your Display image',
          width: '250',
          src: data.image ? data.image : 'data:image/png;base64,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'
        })
      ),
      _react2.default.createElement(
        'div',
        { 'class': 'progress col s6' },
        _react2.default.createElement('div', { 'class': 'determinate', style: { width: (progress ? progress : 0) + '%' } })
      ),
      _react2.default.createElement(
        'div',
        { className: 'input-field' },
        _react2.default.createElement(
          'select',
          { onChange: optionChange, 'class': 'browser-default' },
          _react2.default.createElement(
            'option',
            { value: data.category, disabled: true, selected: true },
            data.category === '' ? 'Choose your blog category' : data.category
          ),
          _react2.default.createElement(
            'option',
            { value: 'Travelling' },
            'Travelling'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Sports' },
            'Sports'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Entertainment' },
            'Entertainment'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Technology' },
            'Technology'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Development' },
            'Development'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'input-field' },
        _react2.default.createElement(_tinymceReact.Editor, {
          value: data.content,
          init: {
            height: 500,
            menubar: true,
            plugins: ['advlist autolink lists link image charmap print preview', 'searchreplace code fullscreen', 'insertdatetime media table paste code help wordcount'],
            file_picker_types: 'file image media',
            file_picker_callback: function file_picker_callback(callback, value, meta) {
              var input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
              input.onchange = function () {
                var file = this.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                  callback(e.target.result, {
                    alt: file.name
                  });
                };
                reader.readAsDataURL(file);
              };
              input.click();
            }
          },
          onEditorChange: handleChange
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'input-field' },
        _react2.default.createElement(
          'button',
          { className: 'btn pink lighten-1 z-depth-0' },
          type === 'create' ? 'Create' : 'Update'
        )
      )
    )
  );
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    url: state.blog.url,
    progress: state.blog.progress
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createProject: function createProject(blog) {
      return dispatch((0, _projectAction.createProject)(blog));
    },
    uploadImage: function uploadImage(image) {
      return dispatch((0, _projectAction.uploadImage)(image));
    },
    updateProject: function updateProject(blog, id) {
      return dispatch((0, _projectAction.updateProject)(blog, id));
    },
    setAlert: function setAlert(msg, type) {
      return dispatch((0, _alertAction.setAlert)(msg, type));
    }
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BlogEditor));

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-firestore");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(20);

var _express = __webpack_require__(21);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(10);

var _Routes = __webpack_require__(13);

var _Routes2 = _interopRequireDefault(_Routes);

var _createStore = __webpack_require__(44);

var _createStore2 = _interopRequireDefault(_createStore);

var _renderer = __webpack_require__(55);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);
  _Routes2.default.forEach(function (r) {
    r.queryParams = req.query;
  });

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route,
        match = _ref.match;
    return route.loadData ? route.loadData(store, match) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.url) return res.redirect(301, context.url);
    if (context.notFound) res.status(404);

    res.send(content);
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Listen on 3000');
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(10);

var _Navbar = __webpack_require__(23);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Navbar2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = { component: App };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _SignedinLinks = __webpack_require__(24);

var _SignedinLinks2 = _interopRequireDefault(_SignedinLinks);

var _SignedoutLinks = __webpack_require__(26);

var _SignedoutLinks2 = _interopRequireDefault(_SignedoutLinks);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(_ref) {
  var auth = _ref.auth,
      profile = _ref.profile;

  var links = auth.uid ? _react2.default.createElement(_SignedinLinks2.default, { profile: profile }) : _react2.default.createElement(_SignedoutLinks2.default, null);

  return _react2.default.createElement(
    'nav',
    { className: 'nav-wrapper grey darken-3' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/', className: 'brand-logo' },
        'Blog',
        _react2.default.createElement(
          'span',
          { className: 'teal-text text-lighten-2' },
          'Spot'
        )
      ),
      links
    )
  );
}; /* eslint-disable jsx-a11y/anchor-is-valid */


var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Navbar);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _authAction = __webpack_require__(8);

var _reactRedux = __webpack_require__(1);

var _Search = __webpack_require__(11);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignedinLinks = function SignedinLinks(_ref) {
  var signOut = _ref.signOut,
      profile = _ref.profile;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'ul',
      { className: 'right' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/newBlog' },
          'New Blog'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { onClick: signOut },
          'Log Out'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/', className: 'btn btn-floating pink lighten-1' },
          _react2.default.createElement('img', { className: 'avatar', src: profile.avatar, alt: '' })
        )
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'right sidenav pad-1', id: 'mobile-demo' },
      _react2.default.createElement(_Search2.default, null),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/newBlog' },
          'New Blog'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { onClick: signOut },
          'Log Out'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/', className: 'btn btn-floating pink lighten-1' },
          _react2.default.createElement('img', { className: 'avatar', src: profile.avatar, alt: '' })
        )
      )
    )
  );
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signOut: function signOut() {
      return dispatch((0, _authAction.signOut)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SignedinLinks);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _Search = __webpack_require__(11);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignedoutLinks = function SignedoutLinks() {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'ul',
      { className: 'right' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/signin' },
          'Login'
        )
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'right sidenav pad-1', id: 'mobile-demo' },
      _react2.default.createElement(_Search2.default, null),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/signin' },
          'Login'
        )
      )
    )
  );
};

exports.default = SignedoutLinks;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _FacebookSignin = __webpack_require__(28);

var _FacebookSignin2 = _interopRequireDefault(_FacebookSignin);

var _GithubSignin = __webpack_require__(29);

var _GithubSignin2 = _interopRequireDefault(_GithubSignin);

var _GoogleSignin = __webpack_require__(30);

var _GoogleSignin2 = _interopRequireDefault(_GoogleSignin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import MetaTags from '../metaTags/MetaTags';

var AuthPage = function AuthPage(_ref) {
  var auth = _ref.auth;

  if (auth.uid) return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });

  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      'div',
      { style: { margin: '2rem 0' }, className: 'custom-align' },
      _react2.default.createElement(
        'form',
        { className: 'card z-depth-1' },
        _react2.default.createElement(
          'div',
          { className: 'login-methods card-content' },
          _react2.default.createElement(
            'h5',
            { className: 'grey-text flow-text text-darken-3' },
            'Please!!! ',
            _react2.default.createElement(
              'span',
              { className: 'teal-text' },
              'Login'
            ),
            ' here..'
          ),
          _react2.default.createElement(_GoogleSignin2.default, null),
          _react2.default.createElement(_FacebookSignin2.default, null),
          _react2.default.createElement(_GithubSignin2.default, null)
        )
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.firebase.auth
  };
};

exports.default = { component: (0, _reactRedux.connect)(mapStateToProps)(AuthPage) };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _authAction = __webpack_require__(8);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookSignin = function FacebookSignin(_ref) {
  var signUpLoginFacebook = _ref.signUpLoginFacebook;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'a',
      {
        onClick: function onClick(e) {
          e.stopPropagation();
          signUpLoginFacebook();
        },
        className: 'button button--social-login button--facebook',
        href: '#'
      },
      _react2.default.createElement('i', { className: 'icon fab fa-facebook' }),
      'Login With Facebook'
    )
  );
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signUpLoginFacebook: function signUpLoginFacebook() {
      return dispatch((0, _authAction.signUpLoginFacebook)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(FacebookSignin);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _authAction = __webpack_require__(8);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubSignin = function GithubSignin(_ref) {
  var signUpLoginGithub = _ref.signUpLoginGithub;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'a',
      {
        onClick: function onClick(e) {
          e.preventDefault();
          signUpLoginGithub();
        },
        className: 'button button--social-login button--github',
        href: '#'
      },
      _react2.default.createElement('i', { className: 'icon fab fa-github' }),
      'Login With Github'
    )
  );
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signUpLoginGithub: function signUpLoginGithub() {
      return dispatch((0, _authAction.signUpLoginGithub)());
    }
  };
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(GithubSignin);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _authAction = __webpack_require__(8);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import style from './socialAuth.css';
var GoogleSignin = function GoogleSignin(_ref) {
  var signUpLoginGoogle = _ref.signUpLoginGoogle;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'a',
      {
        onClick: function onClick(e) {
          e.stopPropagation();
          signUpLoginGoogle();
        },
        className: 'button button--social-login button--google',
        href: '#'
      },
      _react2.default.createElement('i', { className: 'icon fab fa-google' }),
      'Login With Google'
    )
  );
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signUpLoginGoogle: function signUpLoginGoogle() {
      return dispatch((0, _authAction.signUpLoginGoogle)());
    }
  };
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(GoogleSignin);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var loadData = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(store, match) {
    var data, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getBlogData(store, match);

          case 2:
            data = _context.sent;
            _context.next = 5;
            return getAllBlogData(store);

          case 5:
            res = _context.sent;

            console.log(res);
            return _context.abrupt('return', store.dispatch((0, _projectAction.getBlogById)(data)));

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function loadData(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactReduxFirebase = __webpack_require__(5);

var _reactRenderHtml = __webpack_require__(14);

var _reactRenderHtml2 = _interopRequireDefault(_reactRenderHtml);

var _reactRouterDom = __webpack_require__(2);

var _redux = __webpack_require__(3);

var _projectAction = __webpack_require__(7);

var _Comments = __webpack_require__(32);

var _Comments2 = _interopRequireDefault(_Comments);

var _Loader = __webpack_require__(12);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BlogPage = function BlogPage(_ref) {
  var blog = _ref.blog,
      auth = _ref.auth,
      id = _ref.id,
      deleteProject = _ref.deleteProject,
      getBlogById = _ref.getBlogById,
      getClientBlogById = _ref.getClientBlogById,
      props = _objectWithoutProperties(_ref, ['blog', 'auth', 'id', 'deleteProject', 'getBlogById', 'getClientBlogById']);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      save = _useState2[0],
      setSave = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      flag = _useState4[0],
      setFlag = _useState4[1];

  var initState = function initState(data, id) {
    return [data].map(function (item) {
      return _extends({}, item, {
        id: id
      });
    });
  };

  (0, _react.useEffect)(function () {
    getClientBlogById(id);
  }, []);

  (0, _react.useEffect)(function () {
    var copy = blog && id ? initState(blog, id) : [];
    setSave(copy[0] || []);
  }, [id, blog]);

  (0, _react.useEffect)(function () {
    getBlogs();
  }, [save]);

  var getBlogs = function getBlogs() {
    var blogs = void 0;
    if (window.localStorage.getItem('blogs') === null) {
      blogs = [];
    } else {
      blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      var found = false;
      for (var i = 0; i < blogs.length; i++) {
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

  var handleSave = function handleSave(e) {
    e.stopPropagation();
    var blogs = getBlogs();
    if (blogs.length > 0) {
      if (flag) {
        blogs.forEach(function (blog, index) {
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

  var deleteBlogById = function deleteBlogById(id) {
    if (window.confirm('Are you sure ?')) {
      deleteProject(id);
      props.history.push('/');
    }
  };

  if (blog) {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'nav',
        { className: 'transparent z-depth-0' },
        _react2.default.createElement(
          'div',
          { className: 'nav-wrapper container' },
          _react2.default.createElement(
            'div',
            { className: 'col s12' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: 'breadcrumb grey-text text-darken-2' },
              'Dashboard'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'breadcrumb blue-text text-darken-2' },
              'Blog Detail'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { style: { padding: '0' }, className: 'container section blog-details' },
        _react2.default.createElement(
          'div',
          { className: 'card z-depth-1' },
          _react2.default.createElement(
            'div',
            { className: 'custom-action-btn pad-2' },
            auth.uid === blog.authorId && _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/updateBlog/' + id + '/' + blog.slug },
                _react2.default.createElement(
                  'i',
                  { className: 'material-icons' },
                  'create'
                )
              ),
              _react2.default.createElement(
                'a',
                {
                  href: '#',
                  className: 'red-text',
                  onClick: function onClick(e) {
                    e.stopPropagation();
                    deleteBlogById(id);
                  }
                },
                _react2.default.createElement(
                  'i',
                  { className: 'material-icons' },
                  'delete'
                )
              )
            ),
            _react2.default.createElement(
              'a',
              { onClick: handleSave, href: '#!', className: 'secondary-content' },
              flag ? _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'grade'
              ) : _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'star_outline'
              )
            )
          ),
          _react2.default.createElement('div', { className: 'devider' }),
          _react2.default.createElement(
            'div',
            { className: 'card-content' },
            _react2.default.createElement(
              'span',
              { className: 'new badge', 'data-badge-caption': ' ' },
              blog.category
            ),
            _react2.default.createElement(
              'span',
              { className: 'card-title' },
              blog.title
            ),
            _react2.default.createElement('img', { src: blog.image, alt: 'Display Image', className: 'avatar' }),
            _react2.default.createElement(
              'p',
              null,
              (0, _reactRenderHtml2.default)(blog.content)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'card-action grey lighten-4 grey-text' },
            _react2.default.createElement(
              'div',
              { className: 'row valign-wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'col s2' },
                _react2.default.createElement('img', { src: blog.authorImage, alt: 'Author Image', className: 'circle responsive-img' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col s10' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Posted by ',
                  blog.authorName
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'grey-text' },
                  (0, _moment2.default)(blog.createAt.toDate()).calendar()
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'card p-5 grey lighten-2' },
          _react2.default.createElement(_Comments2.default, { blog: blog, id: id })
        )
      )
    );
  } else {
    return _react2.default.createElement(_Loader2.default, null);
  }
};

function mapDispatchToProps(dispatch) {
  return {
    deleteProject: function deleteProject(id) {
      return dispatch((0, _projectAction.deleteProject)(id));
    },
    getAllBlogs: function getAllBlogs(data) {
      return dispatch((0, _projectAction.getAllBlogs)(data));
    },
    getBlogById: function getBlogById(id) {
      return dispatch((0, _projectAction.getBlogById)(id));
    },
    getClientBlogById: function getClientBlogById(id) {
      return dispatch((0, _projectAction.getClientBlogById)(id));
    }
  };
}
function mapStateToProps(state, ownProps) {
  var id = ownProps.match.params.id;
  return {
    id: id,
    blog: state.blog.currentBlog,
    auth: state.firebase.auth
  };
}

function getBlogData(store, match) {
  return new Promise(function (resolve, reject) {
    store.firestore.get({ collection: 'projects', doc: match.params.id }).then(function (snapshot) {
      resolve(snapshot.data());
    }).catch(function (err) {
      return reject(err.message);
    });
  });
}

function getAllBlogData(store) {
  return new Promise(function (resolve, reject) {
    var data = [];
    store.firestore.get({ collection: 'projects' }).then(function (snapshot) {
      snapshot.docs.forEach(function (doc) {
        data.push(doc.data());
      });
      resolve(store.dispatch((0, _projectAction.getAllBlogs)(data)));
    }).catch(function (err) {
      return reject(err.message);
    });
  });
}

exports.default = {
  component: (0, _redux.compose)(_reactRouterDom.withRouter, (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactReduxFirebase.firestoreConnect)([{ collection: 'projects' }]))(BlogPage),
  loadData: loadData
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _reactStarRatings = __webpack_require__(15);

var _reactStarRatings2 = _interopRequireDefault(_reactStarRatings);

var _alertAction = __webpack_require__(9);

var _projectAction = __webpack_require__(7);

var _CommentItems = __webpack_require__(33);

var _CommentItems2 = _interopRequireDefault(_CommentItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Comments = function Comments(_ref) {
  var auth = _ref.auth,
      id = _ref.id,
      blog = _ref.blog,
      profile = _ref.profile,
      updateProject = _ref.updateProject,
      setAlert = _ref.setAlert;

  var state = {
    authorId: '',
    authorImage: '',
    authorName: '',
    category: '',
    content: '',
    createAt: '',
    image: '',
    ratings: [],
    title: '',
    slug: ''
  };
  var stateUser = {
    id: '',
    authorName: '',
    authorImage: '',
    createAt: '',
    rating: ''
  };

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      star = _useState2[0],
      setStar = _useState2[1];

  var _useState3 = (0, _react.useState)(stateUser),
      _useState4 = _slicedToArray(_useState3, 2),
      user = _useState4[0],
      setUser = _useState4[1];

  var _useState5 = (0, _react.useState)(state),
      _useState6 = _slicedToArray(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      flag = _useState8[0],
      setFlag = _useState8[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      check = _useState10[0],
      setCheck = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      ratings = _useState12[0],
      setRatings = _useState12[1];

  (0, _react.useEffect)(function () {
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
      slug: blog ? blog.slug : ''
    });

    blog && auth && blog.ratings.forEach(function (rating) {
      setFlag(rating.id === auth.uid ? false : true);
      setCheck(rating.id === auth.uid ? false : true);
      setStar(rating.id === auth.uid ? rating.rating : 0);
    });
  }, [blog]);

  (0, _react.useEffect)(function () {
    setUser({
      id: star ? auth.uid : '',
      authorName: star ? profile.name : '',
      authorImage: star ? profile.avatar : '',
      createAt: new Date(),
      rating: star ? star : ''
    });
  }, [star]);

  (0, _react.useEffect)(function () {
    var _ref2;

    user.id && setData(_extends({}, data, {
      ratings: (_ref2 = []).concat.apply(_ref2, _toConsumableArray(data.ratings).concat([user]))
    }));
  }, [user]);

  var changeRating = function changeRating(value) {
    setStar(value);
    setCheck(false);
  };

  var handleSubmit = function handleSubmit(e) {
    e.stopPropagation();
    if (check === false) {
      updateProject(data, id);
      setFlag(false);
    } else {
      setAlert('Please give the rating.', 'error');
    }
  };

  return _react2.default.createElement(
    _react.Fragment,
    null,
    auth.uid && _react2.default.createElement(
      'div',
      { className: 'rate' },
      _react2.default.createElement(
        'span',
        { className: 'teal-text custom-font' },
        flag ? 'Give your Rating: ' : 'Your Rating: '
      ),
      _react2.default.createElement(
        'div',
        null,
        flag && check ? _react2.default.createElement(_reactStarRatings2.default, {
          isAggregateRating: true,
          rating: star,
          starRatedColor: 'orange',
          numberOfStars: 5,
          starSpacing: '3px',
          starDimension: '30px',
          changeRating: changeRating,
          name: 'star'
        }) : _react2.default.createElement(_reactStarRatings2.default, {
          isAggregateRating: true,
          rating: star,
          starRatedColor: 'orange',
          numberOfStars: 5,
          starSpacing: '3px',
          starDimension: '30px'
        })
      ),
      flag && _react2.default.createElement(
        'a',
        { onClick: handleSubmit, className: 'waves-effect waves-light btn green' },
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          'add'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'card-action' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(_CommentItems2.default, { comments: ratings || blog.ratings })
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateProject: function updateProject(blog, id) {
      return dispatch((0, _projectAction.updateProject)(blog, id));
    },
    setAlert: function setAlert(msg, type) {
      return dispatch((0, _alertAction.setAlert)(msg, type));
    }
  };
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(Comments);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStarRatings = __webpack_require__(15);

var _reactStarRatings2 = _interopRequireDefault(_reactStarRatings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentItems = function CommentItems(_ref) {
  var comments = _ref.comments;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    comments ? comments.map(function (comment) {
      return _react2.default.createElement(
        'div',
        { key: comment.id, className: 'col s12 m4' },
        _react2.default.createElement(
          'div',
          { className: 'card-panel blue-grey darken-3 z-depth-1' },
          _react2.default.createElement(_reactStarRatings2.default, {
            isAggregateRating: true,
            rating: comment.rating,
            starRatedColor: 'orange',
            numberOfStars: 5,
            starSpacing: '3px',
            starDimension: '30px'
          }),
          _react2.default.createElement(
            'div',
            { className: 'row valign-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'col s2' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'btn btn-floating pink lighten-1' },
                _react2.default.createElement('img', { className: 'avatar', src: comment.authorImage, alt: '' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col s10' },
              _react2.default.createElement(
                'p',
                { className: 'orange-text' },
                'By ',
                comment.authorName
              ),
              _react2.default.createElement(
                'p',
                { className: 'white-text' },
                (0, _moment2.default)(comment.createAt.toDate()).calendar()
              )
            )
          )
        )
      );
    }) : _react2.default.createElement(
      'p',
      null,
      'Loading...'
    )
  );
};

exports.default = CommentItems;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactReduxFirebase = __webpack_require__(5);

var _redux = __webpack_require__(3);

var _BlogList = __webpack_require__(35);

var _BlogList2 = _interopRequireDefault(_BlogList);

var _UserBlogs = __webpack_require__(37);

var _UserBlogs2 = _interopRequireDefault(_UserBlogs);

var _Favourite = __webpack_require__(38);

var _Favourite2 = _interopRequireDefault(_Favourite);

var _Search = __webpack_require__(11);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import MetaTags from '../metaTags/MetaTags';
var Dashboard = function Dashboard(_ref) {
  var blogs = _ref.blogs,
      auth = _ref.auth;

  var _useState = (0, _react.useState)({ favourites: [] }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var getFavouriteBlogs = function getFavouriteBlogs() {
    var blogs = void 0;
    if (localStorage.getItem('blogs') === null) {
      blogs = [];
    } else {
      blogs = JSON.parse(localStorage.getItem('blogs'));
    }
    return blogs;
  };

  (0, _react.useEffect)(function () {
    var blogs = getFavouriteBlogs();
    setState({
      favourites: blogs
    });
  }, []);

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'div',
      { className: 'dashboard container' },
      _react2.default.createElement(
        'ul',
        { style: { width: '100%', position: 'relative' } },
        _react2.default.createElement(_Search2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col s12 m6' },
          _react2.default.createElement(
            'div',
            { style: { marginTop: '0.8rem' } },
            _react2.default.createElement(
              'span',
              { className: 'flow-text' },
              'Marked as ',
              _react2.default.createElement(
                'span',
                { className: 'teal-text' },
                'Favourite'
              )
            ),
            _react2.default.createElement(_Favourite2.default, { favourites: state.favourites })
          ),
          _react2.default.createElement('div', { className: 'devider' }),
          _react2.default.createElement(
            'div',
            { style: { marginTop: '1.5rem' } },
            _react2.default.createElement(
              'span',
              { className: 'flow-text' },
              'Your ',
              _react2.default.createElement(
                'span',
                { className: 'teal-text' },
                'Blogs'
              )
            ),
            auth.uid ? _react2.default.createElement(_UserBlogs2.default, { auth: auth, blog: blogs }) : _react2.default.createElement(
              'div',
              { className: 'card z-depth-1 teal' },
              _react2.default.createElement(
                'div',
                { className: 'card-content' },
                _react2.default.createElement(
                  'span',
                  { className: 'card-title white-text' },
                  'Sorry, you have not login yet..'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s12 m6' },
          _react2.default.createElement(_BlogList2.default, { auth: auth, blogs: blogs })
        )
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    blogs: state.firestore.ordered.projects, // rename to blogs
    auth: state.firebase.auth
  };
};

exports.default = {
  component: (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _reactReduxFirebase.firestoreConnect)([{ collection: 'projects', orderBy: ['createAt', 'desc'] }]))(Dashboard)
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _BlogSummary = __webpack_require__(36);

var _BlogSummary2 = _interopRequireDefault(_BlogSummary);

var _Loader = __webpack_require__(12);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var BlogList = function BlogList(_ref) {
  var blogs = _ref.blogs,
      auth = _ref.auth;

  var state = {
    data: [],
    filterList: []
  };

  var _useState = (0, _react.useState)(state),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isaverage = _useState4[0],
      setIsAverage = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      rate = _useState6[0],
      setRate = _useState6[1];

  (0, _react.useEffect)(function () {
    setList({
      data: blogs ? blogs : [],
      filterList: blogs ? blogs : []
    });
  }, [blogs]);

  var filterList = function filterList(e) {
    e.stopPropagation();
    if (e.target.value !== 'All') {
      if (isaverage) {
        sortListByFilter(e, rate);
      } else {
        var updateList = list.data.filter(function (blog) {
          return blog.category.toLowerCase() === e.target.value.toLowerCase();
        });
        setList({
          data: blogs,
          filterList: [].concat(_toConsumableArray(updateList))
        });
      }
    } else {
      setList({
        data: blogs,
        filterList: blogs
      });
    }
  };
  var sortListByFilter = function sortListByFilter(e, newValue) {
    e.stopPropagation();
    if (e.target.value !== 'All') {
      var updateList = list.data.filter(function (blog) {
        var set = new Set();
        blog.ratings.map(function (rating) {
          set.add(rating.rating);
        });
        var sum = 0;
        set.forEach(function (val) {
          sum += val;
        });
        var avg = sum / set.size;
        return avg >= newValue && blog.category.toLowerCase() === e.target.value.toLowerCase();
      });
      setList({
        data: blogs,
        filterList: [].concat(_toConsumableArray(updateList))
      });
    } else {
      setList({
        data: blogs,
        filterList: blogs
      });
    }
  };
  var sortList = function sortList(e) {
    e.stopPropagation();
    if (e.target.value !== 'All') {
      var updateList = list.data.filter(function (blog) {
        var set = new Set();
        blog.ratings.map(function (rating) {
          set.add(rating.rating);
        });
        var sum = 0;
        set.forEach(function (val) {
          sum += val;
        });
        var avg = sum / set.size;
        if (e.target.value.length === 1) {
          setRate(parseInt(e.target.value));
        }
        return avg >= e.target.value;
      });
      setList({
        data: blogs,
        filterList: [].concat(_toConsumableArray(updateList))
      });
    } else {
      setList({
        data: blogs,
        filterList: blogs
      });
    }
    setIsAverage(!isaverage);
  };

  return _react2.default.createElement(
    'div',
    { className: 'blog-list section' },
    _react2.default.createElement(
      'span',
      { className: 'flow-text ' },
      'All ',
      _react2.default.createElement(
        'span',
        { className: 'teal-text' },
        'Activity'
      )
    ),
    _react2.default.createElement('div', { className: 'devider' }),
    _react2.default.createElement(
      'div',
      { className: 'section sticky' },
      _react2.default.createElement(
        'div',
        { style: { marginBottom: '0' }, className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col s6' },
          _react2.default.createElement(
            'select',
            { onChange: filterList, className: 'browser-default' },
            _react2.default.createElement(
              'option',
              { value: '', disabled: true, selected: true },
              'Filter by Category'
            ),
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Travelling' },
              'Travelling'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Sports' },
              'Sports'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Entertainment' },
              'Entertainment'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Technology' },
              'Technology'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Development' },
              'Development'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s6' },
          _react2.default.createElement(
            'select',
            { onChange: sortList, className: 'browser-default' },
            _react2.default.createElement(
              'option',
              { value: '', disabled: true, selected: true },
              'Sort by Rating'
            ),
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              '\u2B50\u2B50\u2B50\u2B50 & Up'
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              '\u2B50\u2B50\u2B50 & Up'
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              '\u2B50\u2B50 & Up'
            )
          )
        )
      )
    ),
    blogs ? _react2.default.createElement(
      _react.Fragment,
      null,
      list.filterList.length > 0 ? _react2.default.createElement(
        _react.Fragment,
        null,
        list.filterList.map(function (blog) {
          return _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/blogs/' + blog.id + '/' + blog.slug, style: { cursor: 'pointer' }, key: blog.id },
            _react2.default.createElement(_BlogSummary2.default, { authId: auth.uid, blog: blog })
          );
        })
      ) : _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { className: 'card z-depth-1 blue-grey darken-1' },
          _react2.default.createElement(
            'div',
            { className: 'card-content' },
            _react2.default.createElement(
              'span',
              { className: 'card-title white-text' },
              'Sorry, no blogs found..'
            )
          )
        )
      )
    ) : _react2.default.createElement(_Loader2.default, null)
  );
};

exports.default = BlogList;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(2);

var _projectAction = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogSummary = function BlogSummary(_ref) {
  var blog = _ref.blog,
      authId = _ref.authId;

  var deleteBlogById = function deleteBlogById(id) {
    if (window.confirm('Are you sure ?')) {
      (0, _projectAction.deleteProject)(id);
    }
  };
  return _react2.default.createElement(
    'div',
    { className: 'card z-depth-1 project-summary blue-grey darken-1' },
    _react2.default.createElement(
      'div',
      { className: 'card-content white-text' },
      _react2.default.createElement(
        'span',
        { 'class': 'new badge z-depth-1', 'data-badge-caption': ' ' },
        blog.category
      ),
      _react2.default.createElement(
        'span',
        { className: 'card-title' },
        blog.title
      ),
      _react2.default.createElement(
        'div',
        { style: { marginBottom: '0' }, className: 'row' },
        _react2.default.createElement(
          'div',
          { 'class': 'col s2' },
          _react2.default.createElement(
            'a',
            { href: '#', className: 'btn btn-floating pink lighten-1' },
            _react2.default.createElement('img', { className: 'avatar', src: blog.authorImage, alt: '' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s10' },
          _react2.default.createElement(
            'p',
            { className: 'orange-text' },
            'Posted by ',
            blog.authorName
          ),
          _react2.default.createElement(
            'p',
            { className: 'white-text' },
            (0, _moment2.default)(blog.createAt.toDate()).calendar()
          )
        )
      )
    ),
    authId === blog.authorId ? _react2.default.createElement(
      'div',
      { className: 'card-action' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'yellow-text', to: '/projectUpdate/' + blog.id + '/' + blog.slug },
        _react2.default.createElement(
          'i',
          { 'class': 'material-icons' },
          'create'
        )
      ),
      ' ',
      _react2.default.createElement(
        'a',
        {
          className: 'red-text',
          onClick: function onClick(e) {
            e.preventDefault();
            deleteBlogById(blog.id);
          }
        },
        _react2.default.createElement(
          'i',
          { 'class': 'material-icons' },
          'delete'
        )
      )
    ) : ''
  );
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteProject: function deleteProject(id) {
      return dispatch((0, _projectAction.deleteProject)(id));
    }
  };
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(BlogSummary);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _projectAction = __webpack_require__(7);

var _Pagination = __webpack_require__(16);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Loader = __webpack_require__(12);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserBlogs = function UserBlogs(_ref) {
  var blog = _ref.blog,
      auth = _ref.auth;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = (0, _react.useState)(4),
      _useState6 = _slicedToArray(_useState5, 1),
      dataPerPage = _useState6[0];

  var filterData = [];

  (0, _react.useEffect)(function () {
    if (blog) {
      blog.filter(function (blog) {
        if (blog.authorId === auth.uid) {
          filterData.unshift(blog);
        }
      });
      setData(filterData);
    }
  }, [blog]);

  var indexLast = currentPage * dataPerPage;
  var indexFast = indexLast - dataPerPage;
  var currentData = data.slice(indexFast, indexLast);

  var paginate = function paginate(number) {
    return setCurrentPage(number);
  };

  var deleteBlogById = function deleteBlogById(id) {
    if (window.confirm('Are you sure ?')) {
      props.deleteProject(id);
    }
  };
  if (blog) {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      currentData.length > 0 ? _react2.default.createElement(
        _react.Fragment,
        null,
        currentData.map(function (blog) {
          return _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/blogs/' + blog.id + '/' + blog.slug, key: blog.id },
            _react2.default.createElement(
              'div',
              { className: 'card z-depth-1 blog-summary teal darken-1' },
              _react2.default.createElement(
                'div',
                { className: 'card-content white-text' },
                _react2.default.createElement(
                  'span',
                  { className: 'new badge z-depth-1', 'data-badge-caption': ' ' },
                  blog.category
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'card-title' },
                  blog.title
                ),
                _react2.default.createElement(
                  'div',
                  { style: { marginBottom: '0' }, className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col s2' },
                    _react2.default.createElement(
                      'a',
                      { href: '#', className: 'btn btn-floating pink lighten-1' },
                      _react2.default.createElement('img', { className: 'avatar', src: blog.authorImage, alt: '' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col s10' },
                    _react2.default.createElement(
                      'p',
                      { className: 'orange-text' },
                      'Posted by ',
                      blog.authorName
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'white-text' },
                      (0, _moment2.default)(blog.createAt.toDate()).calendar()
                    )
                  )
                )
              ),
              auth.uid === blog.authorId && _react2.default.createElement(
                'div',
                { className: 'card-action' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { className: 'yellow-text', to: '/updateBlog/' + blog.id + '/' + blog.slug },
                  _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'create'
                  )
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  {
                    className: 'red-text',
                    onClick: function onClick(e) {
                      e.preventDefault();
                      deleteBlogById(blog.id);
                    }
                  },
                  _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    'delete'
                  )
                )
              )
            )
          );
        })
      ) : _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { className: 'card-panel teal' },
          _react2.default.createElement(
            'span',
            { className: 'card-title white-text' },
            'No Blogs yet.'
          )
        )
      ),
      data.length > 4 ? _react2.default.createElement(_Pagination2.default, { dataPerPage: dataPerPage, totalData: data.length, paginate: paginate, page: currentPage }) : null
    );
  } else {
    return _react2.default.createElement(_Loader2.default, null);
  }
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteProject: function deleteProject(id) {
      return dispatch((0, _projectAction.deleteProject)(id));
    }
  };
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(UserBlogs);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _Pagination = __webpack_require__(16);

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Favourite = function Favourite(props) {
  var favourites = props.favourites;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setDatas = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = (0, _react.useState)(4),
      _useState6 = _slicedToArray(_useState5, 1),
      dataPerPage = _useState6[0];

  (0, _react.useEffect)(function () {
    if (favourites) {
      setDatas(favourites);
    }
  }, [favourites]);

  var indexLast = currentPage * dataPerPage;
  var indexFast = indexLast - dataPerPage;
  var currentData = data.slice(indexFast, indexLast);

  var paginate = function paginate(number) {
    return setCurrentPage(number);
  };
  if (favourites.length > 0) {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'div',
        { style: { paddingTop: '0' }, className: 'section' },
        _react2.default.createElement(
          'ul',
          { className: 'notifications collection z-depth-1 ' },
          currentData && currentData.map(function (item) {
            return _react2.default.createElement(
              'li',
              { 'class': 'collection-item avatar' },
              _react2.default.createElement('img', { src: item.authorImage, alt: 'display image', 'class': 'circle' }),
              _react2.default.createElement(
                'div',
                { className: 'center-btn' },
                _react2.default.createElement(
                  'span',
                  { 'class': 'title' },
                  item.title
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'teal white-text p-2 z-depth-1' },
                  item.category
                )
              ),
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/saved/' + item.id, 'class': 'secondary-content teal-text' },
                _react2.default.createElement(
                  'i',
                  { 'class': 'material-icons' },
                  'read_more'
                )
              )
            );
          })
        ),
        data.length > 4 ? _react2.default.createElement(_Pagination2.default, { dataPerPage: dataPerPage, totalData: data.length, paginate: paginate, page: currentPage }) : null
      )
    );
  } else {
    return _react2.default.createElement(
      'div',
      { className: 'card-panel' },
      _react2.default.createElement(
        'span',
        { className: 'card-title' },
        'No Blogs marked as Favourite'
      )
    );
  }
};

exports.default = Favourite;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _BlogEditor = __webpack_require__(17);

var _BlogEditor2 = _interopRequireDefault(_BlogEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import MetaTags from '../metaTags/MetaTags';
var NewBlogPage = function NewBlogPage(_ref) {
  var auth = _ref.auth;

  if (!auth.uid) return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signin' });
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'nav',
      { className: 'transparent z-depth-0' },
      _react2.default.createElement(
        'div',
        { className: 'nav-wrapper container' },
        _react2.default.createElement(
          'div',
          { className: 'col s12' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'breadcrumb grey-text text-darken-2' },
            'Dashboard'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'breadcrumb blue-text text-darken-2' },
            'New Blog'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '0' }, className: 'container section' },
      _react2.default.createElement(_BlogEditor2.default, { id: '', blog: null, type: 'create' })
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.firebase.auth
  };
};

exports.default = { component: (0, _reactRedux.connect)(mapStateToProps)(NewBlogPage) };

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@tinymce/tinymce-react");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-slugify");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactReduxFirebase = __webpack_require__(5);

var _reactRenderHtml = __webpack_require__(14);

var _reactRenderHtml2 = _interopRequireDefault(_reactRenderHtml);

var _reactRouterDom = __webpack_require__(2);

var _redux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import MetaTags from '../metaTags/MetaTags';

var SavedBlogPage = function SavedBlogPage(_ref) {
  var id = _ref.id;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      save = _useState2[0],
      setSave = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      flag = _useState4[0],
      setFlag = _useState4[1];

  var initState = function initState(data, id) {
    return [data].map(function (item) {
      return _extends({}, item, {
        id: id
      });
    });
  };
  (0, _react.useEffect)(function () {
    getBlogs();
  }, [save]);

  (0, _react.useEffect)(function () {
    if (id) {
      var blogs = getBlogs();
      blogs.filter(function (blog) {
        if (blog.id === id) {
          var copy = initState(blog, id);
          setSave(copy[0]);
        }
      });
    }
  }, []);

  var getBlogs = function getBlogs() {
    var blogs = void 0;
    if (window.localStorage.getItem('blogs') === null) {
      blogs = [];
    } else {
      blogs = JSON.parse(localStorage.getItem('blogs'));
      var found = false;
      for (var i = 0; i < blogs.length; i++) {
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

  var handleSave = function handleSave(e) {
    e.preventDefault();
    var blogs = getBlogs();
    if (blogs.length > 0) {
      if (flag) {
        blogs.forEach(function (blog, index) {
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
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'nav',
        { className: 'transparent z-depth-0' },
        _react2.default.createElement(
          'div',
          { className: 'nav-wrapper container' },
          _react2.default.createElement(
            'div',
            { className: 'col s12' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: 'breadcrumb grey-text text-darken-2' },
              'Dashboard'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'breadcrumb blue-text text-darken-2' },
              'Favourite Blog'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'container section blog-details' },
        _react2.default.createElement(
          'div',
          { className: 'card z-depth-1' },
          _react2.default.createElement(
            'div',
            { className: 'card-content' },
            _react2.default.createElement(
              'div',
              { className: 'custom-action-btn' },
              _react2.default.createElement(
                'a',
                { onClick: handleSave, href: '#!', 'class': 'secondary-content' },
                flag ? _react2.default.createElement(
                  'i',
                  { 'class': 'material-icons' },
                  'grade'
                ) : _react2.default.createElement(
                  'i',
                  { 'class': 'material-icons' },
                  'star_outline'
                )
              )
            ),
            _react2.default.createElement(
              'span',
              { 'class': 'new badge', 'data-badge-caption': ' ' },
              save.category
            ),
            _react2.default.createElement(
              'span',
              { className: 'card-title' },
              save.title
            ),
            _react2.default.createElement('img', { src: save.image, alt: 'Display Image', className: 'avatar' }),
            _react2.default.createElement(
              'p',
              null,
              (0, _reactRenderHtml2.default)(save.content)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'card-action grey lighten-4 grey-text' },
            _react2.default.createElement(
              'div',
              { className: 'row valign-wrapper' },
              _react2.default.createElement(
                'div',
                { 'class': 'col s2' },
                _react2.default.createElement('img', { src: save.authorImage, alt: 'Author Image', 'class': 'circle responsive-img' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col s10' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Posted by ',
                  save.authorName
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'grey-text' },
                  (0, _moment2.default)(save.createAt.toDate).format('LL')
                )
              )
            )
          )
        )
      )
    );
  } else {
    return _react2.default.createElement(
      'div',
      { className: 'container center' },
      _react2.default.createElement(
        'p',
        null,
        'Loading Project...'
      )
    );
  }
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var id = ownProps.match.params.id;
  var blogs = state.firestore.data.projects;
  var blog = blogs ? blogs[id] : null;
  return {
    id: id,
    blog: blog,
    auth: state.firebase.auth
  };
};

exports.default = {
  component: (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _reactReduxFirebase.firestoreConnect)([{ collection: 'projects' }]))(SavedBlogPage)
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _BlogEditor = __webpack_require__(17);

var _BlogEditor2 = _interopRequireDefault(_BlogEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import MetaTags from '../metaTags/MetaTags';
var UpdateBlogPage = function UpdateBlogPage(_ref) {
  var auth = _ref.auth,
      blog = _ref.blog,
      id = _ref.id;

  if (!auth.uid) return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signin' });
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'nav',
      { className: 'transparent z-depth-0' },
      _react2.default.createElement(
        'div',
        { className: 'nav-wrapper container' },
        _react2.default.createElement(
          'div',
          { className: 'col s12' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'breadcrumb grey-text text-darken-2' },
            'Dashboard'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'breadcrumb blue-text text-darken-2' },
            'Update Blog'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '0' }, className: 'container section' },
      _react2.default.createElement(_BlogEditor2.default, { id: id, blog: blog, type: 'update' })
    )
  );
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var id = ownProps.match.params.id;
  var blogs = state.firestore.data.projects;
  var blog = blogs ? blogs[id] : null;
  return {
    id: id,
    blog: blog,
    auth: state.firebase.auth
  };
};

exports.default = { component: (0, _reactRedux.connect)(mapStateToProps)(UpdateBlogPage) };

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(3);

var _reduxThunk = __webpack_require__(45);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _rootReducer = __webpack_require__(46);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _reduxFirestore = __webpack_require__(18);

var _reactReduxFirebase = __webpack_require__(5);

var _fbConfig = __webpack_require__(50);

var _fbConfig2 = _interopRequireDefault(_fbConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var store = (0, _redux.createStore)(_rootReducer2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument({ getFirebase: _reactReduxFirebase.getFirebase, getFirestore: _reduxFirestore.getFirestore })), (0, _reactReduxFirebase.reactReduxFirebase)(_fbConfig2.default, {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true
  }), (0, _reduxFirestore.reduxFirestore)(_fbConfig2.default)));

  return store;
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authReducer = __webpack_require__(47);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _blogReducer = __webpack_require__(48);

var _blogReducer2 = _interopRequireDefault(_blogReducer);

var _alertReducer = __webpack_require__(49);

var _alertReducer2 = _interopRequireDefault(_alertReducer);

var _redux = __webpack_require__(3);

var _reduxFirestore = __webpack_require__(18);

var _reactReduxFirebase = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  auth: _authReducer2.default,
  blog: _blogReducer2.default,
  alert: _alertReducer2.default,
  firestore: _reduxFirestore.firestoreReducer,
  firebase: _reactReduxFirebase.firebaseReducer
});

exports.default = rootReducer;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(4);

var initState = {
  authError: null
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SIGNUP_LOGIN_SUCCESS:
      return _extends({}, state, {
        authError: null
      });
    case _actionTypes.AUTH_ERROR:
      return _extends({}, state, {
        authError: 'Login Failed'
      });
    case _actionTypes.SIGNOUT_SUCCESS:
      return state;
    case _actionTypes.SIGNUP_LOGIN_SUCCESS:
      return _extends({}, state, {
        authError: null
      });
    case _actionTypes.AUTH_ERROR:
      return _extends({}, state, {
        authError: action.err.message
      });
    default:
      return state;
  }
};
exports.default = authReducer;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(4);

var initState = {
  blogs: [],
  currentBlog: null,
  url: '',
  progress: ''
};

var blogReducer = function blogReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.GET_ALL_BLOGS:
      return _extends({}, state, {
        blogs: action.data
      });
    case _actionTypes.GET_BLOG_BY_ID:
      return _extends({}, state, {
        currentBlog: action.data
      });
    case _actionTypes.CREATE_PROJECT:
    case _actionTypes.UPDATE_PROJECT:
      return state;
    case _actionTypes.STATE_PROGRESS:
      return _extends({}, state, {
        progress: action.progress
      });
    case _actionTypes.UPLOAD_IMAGE:
      return _extends({}, state, {
        url: action.url
      });

    case _actionTypes.GET_BLOG_ERROR:
    case _actionTypes.CREATE_PROJECT_ERROR:
    case _actionTypes.UPDATE_PROJECT_ERROR:
    case _actionTypes.UPLOAD_IMAGE_ERROR:
    case _actionTypes.DELETE_PROJECT:
    case _actionTypes.DELETE_PROJECT_ERROR:
      return state;
    default:
      return state;
  }
};
exports.default = blogReducer;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _actionTypes.SET_ALERT:
      return [].concat(_toConsumableArray(state), [payload]);
    case _actionTypes.REMOVE_ALERT:
      return state.filter(function (alert) {
        return alert.id !== payload;
      });
    default:
      return state;
  }
};

var _actionTypes = __webpack_require__(4);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = [];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__(51);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(52);

__webpack_require__(53);

__webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var firebaseConfig = {
  apiKey: 'AIzaSyDvqDWyCTvlZb6mHpwOFJCAh_GsPW17SH8',
  authDomain: 'blog-spot-e4923.firebaseapp.com',
  databaseURL: 'https://blog-spot-e4923.firebaseio.com',
  projectId: 'blog-spot-e4923',
  storageBucket: 'blog-spot-e4923.appspot.com',
  messagingSenderId: '918283899354',
  appId: '1:918283899354:web:3c7f9f9f425c774a7d30e3',
  measurementId: 'G-16RM8CVW3L'
};

// Initialize Firebase
_app2.default.initializeApp(firebaseConfig);
// firebase.analytics();

exports.default = _app2.default;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(56);

var _reactHelmet = __webpack_require__(57);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(58);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(13);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n        <!DOCTYPE html>\n        <html>\n            <head>\n              ' + helmet.title.toString() + '\n              ' + helmet.meta.toString() + '\n              <link\n                  rel="stylesheet"\n                  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"\n              />\n              <link\n                  rel="stylesheet"\n                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"\n                  integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="\n                  crossorigin="anonymous"\n              />           \n              <link\n                  href="https://fonts.googleapis.com/icon?family=Material+Icons"\n                  rel="stylesheet"\n              />\n              <link rel="stylesheet" type="text/css" href="https://firebasestorage.googleapis.com/v0/b/blog-spot-e4923.appspot.com/o/css%2Findex.css?alt=media&token=afa3503f-05ea-49d1-a5b5-efd5d880552f" />\n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n                <script>\n                  window.INITIAL_STATE=' + (0, _serializeJavascript2.default)(store.getState()) + '\n                </script>\n                <script src="bundle.js"></script>\n                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>\n            </body>\n        </html>\n    ';
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })
/******/ ]);