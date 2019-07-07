var button = document.querySelector("button");
	
button.addEventListener("click", function(){
	button.classList.toggle("green");
});

//made variables global just to test if it still works
//revisit global variables concept use strict mode etc
//global variables not recommended already an issue
//try strict mode to see what it does and if it shows errors
//perfect example to demonstate global variable and scope issues
	
function calcLoan(){
	var Loan = document.getElementById("income").value;
	var Period = document.getElementById("term").value;
	var R = document.getElementById("interest").value;
	var Rate = R/12/100;
	var Interest = 1+Rate;
	var Payment = ((Rate*Loan)/(1-(1/Math.pow(Interest,Period)))).toFixed(2);
	document.getElementById("result").innerHTML = "$" + Payment;
}
