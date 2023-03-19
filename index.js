
// Aqua Module / index.js
// Copyright (c) 2023 e6nlaq

const is_windows = process.platform === 'win32'
const is_mac = process.platform === 'darwin'
const is_linux = process.platform === 'linux'
var varia = {};
const windows = is_windows;
const unix = is_mac || is_linux;

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
exports.var = function (type, s) {
	switch (type) {
		case "int":
		case "longlong":
		case "ll":
		case "int64_t":
		case "double":
			varia[s] = 0.0;

			break;

		case "string":
			varia[s] = "";
			break;

		case "bool":
			varia[s] = false;
			break;

		default:
			throw new Error("nonexistent type");
			break;
	}
}
exports.set = function (name, val) {
	varia[name] = val;
}
exports.len = function (val) {
	return val.length;
}
