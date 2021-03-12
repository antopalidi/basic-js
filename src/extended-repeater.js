const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (options === undefined) {
        return str;
    }

    let repeatTimes = options.repeatTimes;
    let additionRepeatTimes = options.additionRepeatTimes;
    let additionSeparator = options.additionSeparator;
    let separator = options.separator;
    let addition = options.addition;


    if (repeatTimes === undefined || !Number.isInteger(repeatTimes)) {
        repeatTimes = 1;
    }

    if (additionRepeatTimes === undefined || !Number.isInteger(additionRepeatTimes)) {
        additionRepeatTimes = 1;
    }

    if (additionSeparator === undefined) {
        additionSeparator = "|";
    }

    if (separator === undefined) {
        separator = "+";
    }

    if (addition === undefined) {
        addition = "";
    } else {
        addition = `${addition}`;
    }


    const result = function (str, count, separator) {
        return str + (separator + str).repeat(count - 1);
    }

    return result(`${str}` +
        result(addition, additionRepeatTimes, additionSeparator),
        repeatTimes,
        separator);
};
  