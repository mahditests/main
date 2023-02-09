function Button() {
var A=document.getElementById("getnumber").value;
var B;
if (A > 17) {	
	(B = A)
}
else 		{	
	(B = (" 18 عدد وارد شده کمتر  "))	
}
document.getElementById("number").innerHTML = B;
}

function end() {
	alert("فرم شما ارسال شد")
}