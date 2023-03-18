
// Aqua Module / index.js
// Copyright (c) 2023 e6nlaq

var varia = {};

exports.version = "1.0.0";
exports.outf = function (s) {
	console.log(s);
}
exports.get = function (s) {
	if (s in varia) {
		return varia[s];
	} else {
		throw new Error("Variable does not exist.");
	}
}
