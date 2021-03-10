const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    return {
        seconds: Math.floor(( 2 ** disksNumber - 1 ) / ( turnsSpeed / 3600 )),
        turns: 2 ** disksNumber - 1
    }
};
