$(document).ready(function(){
	$(".nav a").click(function(){
		$(this).addClass("navOn").siblings().removeClass("navOn");
	})
})
