/**
 * Created by hien.tran on 6/2/2017.
 */

"use strict";
import mongoose from 'mongoose';
import config from '../common/config';
import user from './user';

//Config mongodb
let conn = mongoose.createConnection(config.database.mongoose.databaseURI)
let Schema = mongoose.Schema;
mongoose.Promise = Promise;
mongoose.set('debug', config.database.mongoose.logging);


const User = conn.model(user.name, user.schema);

export { User}