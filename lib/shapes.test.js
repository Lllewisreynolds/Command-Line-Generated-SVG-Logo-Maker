// Importing individual shape classes from shapes module (each extend the shape class)

const { Square, Circle, Triangle } = require("./shapes.js");

// Examples of unit testing for each of the desired shapes with their expected render

describe("Square test", () => {
    test("test for square shape with a navajo white background", () => {
      const shape = new Square('#FFDEAD');
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="#FFDEAD" />'
      );
    });
});

describe("Circle test", () => {
    test("test for circle shape with a bright green background", () => {
      const shape = new Circle("#66ff00");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="#66ff00" />'
      );
    });
  });

describe("Triangle test", () => {
    test("test for triangular shape with a hot pink background", () => {
      const shape = new Triangle("#FF69B4");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="#FF69B4" />'
      );
    });
  });