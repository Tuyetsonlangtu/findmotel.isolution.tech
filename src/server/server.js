/**
 * Created by hien.tran on 5/29/2017.
 */

"use strict";
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import config from '../common/config';
import passport from 'passport';
import publicApi from './routes';
import privateApi from './routes/api';

let app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", publicApi);
app.use(passport.initialize());
app.use("/api", privateApi);

app.listen(config.port, () => {
  console.info(`The server is running at http://localhost:${config.port}/`);
});