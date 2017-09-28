//Introducing the business logic
// var pingPong = function(number) {
//   return "ping";
// };
var pingPong = function(number) {
  if ((number % 3 === 0) &&
    (number % 5 !== 0)) {
    return "ping";
  } else if ((number % 5 === 0) && (number % 15 !== 0)) {
    return "pong";
  } else if ((number % 15 === 0) && (number >= 15)) {
    return "pingpong";
  }
};
// jQuery user interface logic
$(document).ready(function() {
  $("#click").click(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    $("#result").text(result);
  });
});
