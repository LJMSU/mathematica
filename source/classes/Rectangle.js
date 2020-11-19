module.exports = class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  get area() {
    return this.length * this.width;
  }
  get perimeter() {
    return 2 * (this.length + this.width);
  }
  get diagonal() {
    return Math.sqrt(this.length ** 2 + this.width ** 2);
  }
};
