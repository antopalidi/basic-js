const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let dreamTeam = members.filter(el => typeof el === "string")
        .map(el => el.replace(/\s+/g, ''))
        .map(el => el[0].toUpperCase()).sort().join('');
    return dreamTeam
};
