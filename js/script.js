$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    $("#result").text(result);
  });
});
var pingpong = function(number) {
  return ping;
  concole.log(ping);
};
