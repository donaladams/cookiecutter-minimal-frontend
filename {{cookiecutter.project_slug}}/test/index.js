/*global describe:true, it:true */
/*jshint node:true */
'use strict';

if (typeof window === 'undefined') {
  console.log('setwindow');
  global.window = {};
}

console.time = function () {}.bind(console);
console.timeEnd = function () {}.bind(console);

var should = require('should');

// Put tests here!
