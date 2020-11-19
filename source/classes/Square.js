module.exports = class Square extends require("./Rectangle") {
  constructor(length) {
    super(length);
    this.width = length;
  }
};
