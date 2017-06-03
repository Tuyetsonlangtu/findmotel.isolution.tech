/**
 * Created by hien.tran on 6/2/2017.
 */

"use strict";
module.exports = (app) => {
  let express = require('express')
    ,router = express.Router();

  router.use("/user", require("./user.route")(app));
  return router;
};