export function Triangle(side1, side2, side3) {
  this.side1 = parseInt(side1);
  this.side2 = parseInt(side2);
  this.side3 = parseInt(side3);
}

Triangle.prototype.checkType = function() {
  if (((isNaN(this.side1))) || ((isNaN(this.side2))) || ((isNaN(this.side3)))) {
    return "string";
  } else if((this.side1 < 0) || (this.side2 < 0) || (this.side3 < 0)) {
    return "negative number";
  } else if((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  } else if ((this.side1 === this.side2) && (this.side1 === this.side3) && (this.side2 === this.side3)) {
    return "equilateral triangle";
  } else if ((this.side1 !== this.side2) && (this.side1 !== this.side3) && (this.side2 !== this.side3)) {
    return "scalene triangle";
  } else if ((this.side1  === this.side2) || (this.side1 === this.side3) || (this.side2 === this.side3)) {
    return "isosceles triangle";
  } 
};


