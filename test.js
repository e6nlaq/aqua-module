
const aqua = require('./index.js');

aqua.var("string", "KKK");
aqua.set("KKK", "ABC");
aqua.outf(aqua.len(aqua.get("KKK")));
// aqua.set();