
const aqua = require('./index.js');

aqua.var("string", "KKK");
aqua.set("KKK", "ABC");
aqua.outf(aqua.get("KKK"));
// aqua.set();