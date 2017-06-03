require("source-map-support").install();
module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(3);
/**
 * Created by hien.tran on 6/2/2017.
 */






//Config mongodb
let conn = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.createConnection(__WEBPACK_IMPORTED_MODULE_1__common_config___default.a.database.mongoose.databaseURI)
let Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = Promise;
__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.set('debug', __WEBPACK_IMPORTED_MODULE_1__common_config___default.a.database.mongoose.logging);


const User = conn.model(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__user__["a" /* default */].schema);



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


if (false) {
  throw new Error('Do not import `config.js` from inside the client-side code.');
}

const port = 4000;
module.exports = {
  // Node.js app
  port: process.env.PORT || port,

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl: process.env.API_SERVER_URL || `http://localhost:${process.env.PORT || port}`,
  },

  analytics: {
    googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

  database: {
    mongoose: {
      databaseURI : "mongodb://10.0.15.5:27017/ISolution-FindMotel",
      logging: false
    }
  }
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_randomstring__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_randomstring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_randomstring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/**
 * Created by hien.tran on 6/2/2017.
 */




let Schema = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Schema;

function metSalt(){
  return __WEBPACK_IMPORTED_MODULE_0_randomstring___default.a.generate({length: 50});
}
function metSetId() {
  return __WEBPACK_IMPORTED_MODULE_0_randomstring___default.a.generate(12);
}

const User = new Schema({
  _id: {
    type: String,
    default: metSetId,
    index: true,
    unique: true
  },
  username:{
    type: String,
    unique: true,
  },
  password:{
    type: String,
    unique: true,
  },
  salt: {
    type: String,
    default: metSalt
  },
  fullname: {
    type: String,
    unique: true,
    sparse: true,
    dropDups: true
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    dropDups: true
  },
  phone: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
  accessToken: String,
  expirationDate: Date,
  isEnabled: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'User',
  schema: User
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__common_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_api__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__routes_api__);
/**
 * Created by hien.tran on 5/29/2017.
 */











let app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());

app.use("/", __WEBPACK_IMPORTED_MODULE_6__routes__["a" /* default */]);
app.use(__WEBPACK_IMPORTED_MODULE_5_passport___default.a.initialize());
app.use("/api", __WEBPACK_IMPORTED_MODULE_7__routes_api___default.a);

app.listen(__WEBPACK_IMPORTED_MODULE_4__common_config___default.a.port, () => {
  console.info(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_4__common_config___default.a.port}/`);
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(1);
/**
 * Created by hien.tran on 6/2/2017.
 */






__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_1_passport_facebook__["Strategy"]({
  clientID: __WEBPACK_IMPORTED_MODULE_2__config___default.a.auth.facebook.clientID,
  clientSecret: __WEBPACK_IMPORTED_MODULE_2__config___default.a.auth.facebook.clientSecret,
  callbackURL: __WEBPACK_IMPORTED_MODULE_2__config___default.a.auth.facebook.callbackURL,
  profileFields: ['displayName', 'name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true,
}, (req, accessToken, refreshToken, profile, done) => {

  const result = async () => {

  }
  result().catch(done);

  __WEBPACK_IMPORTED_MODULE_3__models__["a" /* User */].findOne({'email': 'duchienntu@gmail.com'}).then( obj => {
    console.log("obj: ", obj);
  });

  console.log("accessToken: ", accessToken);
  const loginName = 'facebook';
  const claimType = 'urn:facebook:access_token';
  done(null, { id: '123', email: 'duchienntu@gmail.com',});
}));

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_passport___default.a);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Created by hien.tran on 6/2/2017.
 */


module.exports = {
  // Authentication
  auth: {
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },
    facebook: {
      clientID: process.env.FACEBOOK_APP_ID || '2006619856232997',
      clientSecret: process.env.FACEBOOK_APP_SECRET || '2466ea45b5f5d3d1b2227758c08f0922',
      callbackURL: '/auth/facebook/callback'
    },

    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd',
    },

    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ',
    },
  },
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by hien.tran on 6/2/2017.
 */


module.exports = (app) => {
  let express = __webpack_require__(0)
    ,router = express.Router();

  router.use("/user", __webpack_require__(12)(app));
  return router;
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/**
 * Created by hien.tran on 6/2/2017.
 */



let router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.get('/', (req, res) => {
  res.json({ status: "user info" });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passport_auth_facebook__ = __webpack_require__(9);
/**
 * Created by hien.tran on 6/2/2017.
 */





let router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.get('/', (req, res) => {
  res.json({status: "server runing"});
});

router.post('/user', (req, res) => {
  res.json({status: "create user"});
});

router.get('/auth/facebook',
  __WEBPACK_IMPORTED_MODULE_1__passport_auth_facebook__["a" /* default */].authenticate('facebook', { scope: ['email', 'user_location'], session: false })
);

router.get('/auth/facebook/callback', (req, res, next) => {
  __WEBPACK_IMPORTED_MODULE_1__passport_auth_facebook__["a" /* default */].authenticate('facebook', (err) => {
    let rs = {
      success: err,
      message: "login success"
    }
    if(err) rs = { success: err, message: 'login fail' }
    return res.json(rs);
  })(req, res, next);
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("randomstring");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
module.exports = __webpack_require__(6);


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map