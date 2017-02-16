$(function() {
  $("button").click(function(event) {
    var number1Input= $("input#number1").val();
    var operation1 = $("input:radio[name=operation]:checked").val();
    var number2Input= $("input#number2").val();

    // var addResult = function(number1Input, number2Input) {
    //   return number1Input + number2Input;
if (operation1==="Add"){
      $("#tryResult").text(parseInt(number1Input)+parseInt(number2Input));
} else if (operation1==="subtract"){
        $("#tryResult").text(parseInt(number1Input)-parseInt(number2Input));
} else if (operation1==="multiply"){
          $("#tryResult").text(parseInt(number1Input)*parseInt(number2Input));
} else if (operation1==="divide"){
          $("#tryResult").text(parseInt(number1Input)/parseInt(number2Input));
    } else {
      alert(operation1);
    }
  event.preventDefault();
  });
});
