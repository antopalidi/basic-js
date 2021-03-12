const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value === undefined) value = ''
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (position % 1 === 0 && position > 0 && typeof position !== "string") {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain.length = 0
      throw new Error('bad position!');
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = this.chain.join('~~')
    this.chain.length = 0
    return result
  }
};

module.exports = chainMaker;
