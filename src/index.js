const pokeName = require("./pokename.json");

module.exports = {
  pokeName,
  random
};
function random() {
  return pokeName[randomInteger(0, pokeName.length)];
}
function randomInteger(minimum, maximum) {
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
