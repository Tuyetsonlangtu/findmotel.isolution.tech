/**
 * Created by hien.tran on 6/2/2017.
 */

"use strict";

import express from 'express';
import fbPassport from '../passport/auth.facebook';
let router = express.Router();

router.get('/', (req, res) => {
  res.json({status: "server runing"});
});

router.post('/user', (req, res) => {
  res.json({status: "create user"});
});

router.get('/auth/facebook',
  fbPassport.authenticate('facebook', { scope: ['email', 'user_location'], session: false })
);

router.get('/auth/facebook/callback', (req, res, next) => {
  fbPassport.authenticate('facebook', (err) => {
    let rs = {
      success: err,
      message: "login success"
    }
    if(err) rs = { success: err, message: 'login fail' }
    return res.json(rs);
  })(req, res, next);
});

export default router;