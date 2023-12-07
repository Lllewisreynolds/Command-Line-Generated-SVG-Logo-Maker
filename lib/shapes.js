//  Class constructor used to define parameters of shape

  class Shape {
    constructor(colourChoice) {
      this.colour = colourChoice;
    }
  }
  
  // Each individual class extends from Shape base class to inherit any properties associated
  class Square extends Shape {
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.colour}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.colour}" />`;
    }
  }

class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`;
    }
  }

// Exporting individual shape classes to make use of in index & shapes.test files
module.exports = { Triangle, Square, Circle };