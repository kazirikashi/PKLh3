const Hero = require("./hero");
var layla = new Hero("layla", 100, 4000);
var kagura = new Hero("kagura", 1900, 4000);
var ling = new Hero("ling", 500, 4000);
var akai = new Hero("akai", 750, 40000);
var arlott = new Hero("arlott", 850, 5000);

kagura.serang(layla);
ling.serang(layla);
akai.serang(layla);
arlott.serang(layla);
