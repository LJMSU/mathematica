module.exports = class Circle {
  constructor(input, type = "radius") {
    switch (type) {
      case "r":
      case "radius":
        this.radius = input;
        this.diameter = input * 2;
        break;
      case "d":
      case "diameter":
        this.diameter = input;
        this.radius = input / 2;
        break;
      default:
        throw new TypeError(
          `expected "radius"/"r" or "diameter"/"d" but found "${type}"`
        );
    }
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }
};
