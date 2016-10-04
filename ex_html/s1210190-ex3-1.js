var numbers = [1,4,5,7,8,9];
var result = numbers.reduce(function(total, val) { return total + val; })
var paragraph = document.getElementById("calc_result");
var content = document.createTextNode("Result value is " + result);
paragraph.appendChild(content);