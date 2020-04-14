import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './triangle.js';
import { Triangle } from './triangle.js';
import { checkType } from './triangle.js';




$(document).ready(function () {
  $("#user-input").submit(function (event) {
    event.preventDefault();
    var side1 = $("#side1").val();
    var side2 = $("#side2").val();
    var side3 = $("#side3").val();
    var result = new Triangle(side1, side2, side3);
    if (result.checkType() === "string") {
      $("#result-string").show();
    } else if (result.checkType() === "negative number") {
      $("#result-negative").show();
    } else if (result.checkType() === "not a triangle") {
      $("#no-triangle").show();
    } else if (result.checkType() === "scalene triangle") {
      $("#result-scalene").show();
    } else if (result.checkType() === "equilateral triangle") {
      $("#result-equil").show();
    } else if (result.checkType() === "isosceles triangle") {
      $("#result-Isosceles").show();
    }
  });
});
