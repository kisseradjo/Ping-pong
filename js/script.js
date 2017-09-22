var pingPong = function(number) {
  return "ping";
};
$(document).ready(function() {
  $("#click").click(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    $("#result").text(result);
  });
});
