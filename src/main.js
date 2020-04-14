import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './triangle.js';



$(document).ready(function(){
  $("#user-input").submit(function(event){
    event.preventDefault();
    $("#result-scalene").show();
    $("#result-equil").show();
    $("#result-Isosceles").show();
  });
});
