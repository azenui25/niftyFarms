"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _config = require("./config");

var getToken = function getToken(user) {
  return _jsonwebtoken.jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  }, _config.config.JWT_SECRET, {
    expiresIn: '48h'
  });
};

exports.getToken = getToken;