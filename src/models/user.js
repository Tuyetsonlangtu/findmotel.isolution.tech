/**
 * Created by hien.tran on 6/2/2017.
 */

"use strict";
import mongoose from 'mongoose';
import { generateCode } from '../common/common';
let Schema = mongoose.Schema;

function metSalt(){
  return generateCode(50);
}

function metSetId() {
  return generateCode(12);
}

const User = new Schema({
  _id: {
    type: String,
    default: generateCode,
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

export default {
  name: 'User',
  schema: User
}