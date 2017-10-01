//Introducing the business logic
var displayNumbers = [];
var pingPong = function(number, displayNumbers) {
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
    var number = parseInt($("input#number").val());
    pingPong(number, displayNumbers);
    displayNumbers.forEach(function(output) {
      $('#display').append("<li>" + output + "</li>");
    });
    var result = pingPong(i);
    $("#result").text(number, displayNumbers);
  });
});
