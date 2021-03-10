const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let result = 1
        if (!Array.isArray(arr)) return 1;

        arr.reduce((depth, i) => {
            if (Array.isArray(i)) {
                depth = this.calculateDepth(i) + 1;
                depth > result ? result = depth : result;
            }
        }, 1)

        return result
    }
};