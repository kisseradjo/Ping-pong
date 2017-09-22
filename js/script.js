// jQuery user interface
var pingPong = function(number) {
  return "ping";
};
var pingPong = function(number) {
  if ((number % 3 === 0) &&
    (number % 5 !== 0)) {
    return "ping";
  } else if ((number % 5 === 0) && (number % 15 !== 0)) {
    return "pong";
  } else {
    return "pingpong";
  }
};

$(document).ready(function() {
  $("#click").click(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    $("#result").text(result);
  });
});
