//Introducing the business logic
var displayNumbers = [];
var pingPong = function(number, displayNumbers) {
  // Giving conditions for display
  for (i = 1; i <= number; i++) {
    if ((i % 3 === 0) && (i % 5 !== 0)) {
      displayNumbers.push("ping");
    } else if ((i % 5 === 0) && (i % 15 !== 0)) {
      displayNumbers.push("pong");
    } else if ((i % 15 === 0) && (i >= 15)) {
      displayNumbers.push("pingPong");
    } else {
      displayNumbers.push(i);
    }
  }
};
// jQuery user interface logic
$(document).ready(function() {
  $("#click").click(function(event) {
    event.preventDefault();
    // changing result from a string to an integer
    var number = parseInt($("input#number").val());
    pingPong(number, displayNumbers);
    // Giving function to show array of numbers
    displayNumbers.forEach(function(output) {
      $('#display').append("<li>" + output + "</li>");
    });
    // Calling the displayed results through the variable and id "result"
    var result = pingPong(i);
    $("#result").text(number, displayNumbers);
  });
});
