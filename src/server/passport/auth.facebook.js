/**
 * Created by hien.tran on 6/2/2017.
 */

import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import config from './config';
import {User} from '../../models';

passport.use(new FacebookStrategy({
  clientID: config.auth.facebook.clientID,
  clientSecret: config.auth.facebook.clientSecret,
  callbackURL: config.auth.facebook.callbackURL,
  profileFields: ['displayName', 'name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true,
}, (req, accessToken, refreshToken, profile, done) => {

  const result = async () => {

  }
  result().catch(done);

  User.findOne({'email': 'duchienntu@gmail.com'}).then( obj => {
    console.log("obj: ", obj);
  });

  console.log("accessToken: ", accessToken);
  const loginName = 'facebook';
  const claimType = 'urn:facebook:access_token';
  done(null, { id: '123', email: 'duchienntu@gmail.com',});
}));

export default passport;