(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.test = factory());
}(this, function () { 'use strict';

	const msg = "hello world";

	return msg;

}));
