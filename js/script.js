//Introducing the business logic
var displayNumbers = [];
var pingPong = function(number, displayNumbers) {
  for (i = 1; i <= number; i++) {
    if ((number % 3 === 0) && (number % 5 !== 0)) {
      displayNumbers.push("ping");
    } else if ((number % 5 === 0) && (number % 15 !== 0)) {
      displayNumbers.push("pong");
    } else if ((number % 15 === 0) && (number >= 15)) {
      displayNumbers.push("pingPong");
    } else {
      displayNumbers.push(number);
    }
  }
};
// jQuery user interface logic
$(document).ready(function() {
  $("#click").click(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    pingPong(number, displayNumbers);
    displayNumbers.forEach(function(output) {
      $('#display').append("<li>" + output + "</li>");
    });
    var result = pingPong(number);
    $("#result").text(number, displayNumbers);
  });
});
